import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import moment from 'moment';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'home',
  templateUrl: 'home.html',
})
export class HomePage {

  private appSettings:FirebaseObjectObservable<any>;
  private appSettingsSub;
  private Twilio;
  private settings;
  private envMode;
  private twilioData;
  private twilioRequest;
  private twilioRequestSub;
  private twilioMessages: Array<any> = [];
  private messagesInPeriod: Array<any> = [];
  private failedMessages: Array<any> = [];
  loading: any;


  constructor(
    private http: Http,
    private navCtrl: NavController,
    private navParams: NavParams,
    private afdb: AngularFireDatabase,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
  ) {
    console.log(this);

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.init();
      }
    });
  }

  ionViewDidLeave() {
    console.log('home ionViewDidLeave');
    if(this.twilioRequestSub){
      this.twilioRequestSub.unsubscribe();
    }
    if(this.appSettingsSub){
      console.log('home ionViewDidLeave this.appSettingsSub');
      this.appSettingsSub.unsubscribe();
    }
  }

  init(){
    this.appSettings = this.afdb.object('/appSettings/messaging');
    this.appSettingsSub = this.appSettings.subscribe(res => {
      this.settings = {
        album: res.album,
        messagingENV: res.messagingENV,
        startDate: res.startDate,
        endDate: res.endDate
      }
      this.Twilio = res.Twilio;
      this.envModeToggle();
      if(!this.twilioData){
        //this.fetchTwilioData();
      }
    });
  }

  unsubscribe(){
    if(this.appSettingsSub){
      this.appSettingsSub.unsubscribe();
    }
    if(this.twilioRequestSub){
      this.twilioRequestSub.unsubscribe();
    }
  }

  envModeToggle(){
    this.envMode = (this.settings.messagingENV == 'PROD') ? true : false;
  }

  envModeChange(){
    console.log(this.envMode);
    let envMode = (this.envMode) ? 'PROD' : 'DEV';
    this.update({messagingENV:envMode});
  }

  update(obj){
    this.appSettings.update(obj);
  }

  updateDateFilter(){
    let {endDate, startDate} = this.settings;
    this.appSettings.update({startDate: startDate});
    this.appSettings.update({endDate: endDate});
  }

  fetchTwilioData(page_uri:string = null){
    if(!page_uri){
      this.loading = this.loadingCtrl.create();
      this.loading.present();
      this.twilioMessages = [];
      this.failedMessages = [];
      this.messagesInPeriod = [];
    }

    let headers = new Headers();
    let Twilio = this.Twilio ;
    let AccountSid = this.Twilio.api_key;
    let AuthToken = this.Twilio.api_secret;
    let requestUri = (page_uri) ? `https://api.twilio.com${page_uri}` :  `${this.Twilio.API}?PageSize=1000`;
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    headers.append('Authorization', 'Basic ' + btoa(AccountSid + ":" + AuthToken));
    let options = new RequestOptions({ headers: headers });
    this.twilioRequest = this.http.get(requestUri, options)

    this.twilioRequestSub = this.twilioRequest.map((res) => res.json())
      .subscribe((res) => {
        this.twilioData = res;
        let tmpArr = [...this.twilioMessages, ...res.messages];
        this.twilioMessages = tmpArr;
        this.sortTwilioData();
      }, (err) => {
        err = err.json();
        console.log('Twilio err', err)
      })
  }

  sortTwilioData(){
    let messages = this.twilioData.messages;
    if(this.twilioData.next_page_uri){
      this.fetchTwilioData(this.twilioData.next_page_uri);
    }else{
      let startDate = moment(this.settings.startDate, "YYYY-MM-DD");
      let endDate   = moment(this.settings.endDate, "YYYY-MM-DD");
      this.messagesInPeriod = this.twilioMessages.filter(_message => {
        let dateSentTmp = moment(_message.date_sent).format("YYYY-MM-DD");
        let dateSent = moment(dateSentTmp, "YYYY-MM-DD");
        if(dateSent.isBetween(startDate, endDate) && _message.status == 'failed'){
          this.failedMessages.push(_message);
        }
        return dateSent.isBetween(startDate, endDate) && _message.status != 'failed';
      })
      this.loading.dismiss();
    }
  }

}
