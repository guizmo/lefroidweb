import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';

import { GameProvider } from '../../providers/game/game';

@IonicPage()
@Component({
  selector: 'page-borne',
  templateUrl: 'borne.html',
})
export class BornePage {

  private borne;
  private pageTitle: string = 'Paramétrages';
  private parametersForm;
  private gameServiceSub;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gameService: GameProvider,
    public formBuilder: FormBuilder,
  ) {
    this.parametersForm = this.formBuilder.group({
      days: '', endDate: '', endTime: '', estimate: '', message: '', messageLost: '', pondRation: '', starDate: '', starTime: '', messagesTypesWon: '', messagesTypesLost: '',
    });
    this.borne = this.navParams.get('borne');
    if(this.borne){
      this.init();
      this.pageTitle = 'Paramétrages : ' + this.borne.replace('_', ' ');
    }
    console.log(this);
  }

  ionViewDidLoad() {
  }
  parametersFormSubmit(){
    if(!this.parametersForm.valid){
      console.log('Not valid');
    }else{
      let values = {
        days: this.parametersForm.value.days,
        endDate: this.parametersForm.value.endDate,
        endTime: this.parametersForm.value.endTime,
        estimate: this.parametersForm.value.estimate,
        message: this.parametersForm.value.message,
        messageLost: this.parametersForm.value.messageLost,
        pondRation: this.parametersForm.value.pondRation,
        starDate: this.parametersForm.value.starDate,
        starTime: this.parametersForm.value.starTime,
        messagesTypes:{
          lost: this.parametersForm.value.messagesTypesLost,
          won: this.parametersForm.value.messagesTypesWon
        }
      }
      this.gameService.update(values);
    }
  }

  init(){

    this.gameServiceSub = this.gameService.get(this.borne).subscribe(res => {
      if(res){
        console.log('res.days', res.days);
        this.parametersForm.patchValue({
          days: res.days,
          endDate: res.endDate,
          endTime: res.endTime,
          estimate: res.estimate,
          message: res.message,
          messageLost: res.messageLost,
          pondRation: res.pondRation,
          starDate: res.starDate,
          starTime: res.starTime,
          messagesTypesLost: res.messagesTypes.lost,
          messagesTypesWon: res.messagesTypes.won
        });
      }
    })

  }

}
