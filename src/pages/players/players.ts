import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import moment from 'moment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


import { LotsProvider } from '../../providers/lots/lots';
import { GameProvider } from '../../providers/game/game';
import { PlayersProvider } from '../../providers/players/players';

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {

  private players;
  private borne;
  private pageTitle: string = 'Joueurs';
  private playersSub;
  private playersList:Array<any>;
  private lotsList:any;
  private gameParams:any;
  private dataSubscriptions;

  constructor(
    private afdb: AngularFireDatabase,
    private navCtrl: NavController,
    private navParams: NavParams,
    private gameService: GameProvider,
    private lotsService: LotsProvider,
    private playersService: PlayersProvider,
    private alertCtrl: AlertController,
  ) {
    this.borne = this.navParams.get('borne');
    this.fetchData();
  }

  ionViewDidLoad() {
  }
  ionViewDidLeave() {
    if(this.playersSub){
      this.playersSub.unsubscribe();
    }
  }

  fetchData(){
    if(this.borne){
      this.players = this.playersService.get(this.borne);
      this.pageTitle = 'Joueurs : ' + this.borne.replace('_', ' ');
      this.dataSubscriptions = Observable.forkJoin(
        this.lotsService.get(this.borne).first(),
        this.gameService.get(this.borne).first()
      );
      this.dataSubscriptions.subscribe(res => {
        this.lotsList = res[0];
        this.gameParams = res[1];

        this.playersSub = this.players.subscribe(res => {
          if(res){
            this.playersList = res.filter(_player => {
              return _player.$key !== '0';
            }).map((_player) => {
              let winning = _player.winning.split('|');
              let playingDay = moment(this.gameParams.starDate).add(winning[0].replace('d_', '')-1, 'days');
              _player.playingDay = playingDay.format('DD/MM/YY');
              _player.lot = winning[1] == 'false' ? '-' : this.lotsList['lot_'+winning[1]].label_admin ;
              return _player;
            })

            this.playersList.reverse();
          }
        });
      });
    }
  }

  delete(player){
    let confirm = this.alertCtrl.create({
      title: 'Action',
      message: `Effacer ce joueur ?`,
      buttons: [
        {
          text: 'Non'
        },
        {
          text: 'Oui',
          handler: () => {
            this.playersService.delete(player);
          }
        }
      ]
    });
    confirm.present();
  }

  reset(){
    let confirm = this.alertCtrl.create({
      title: 'Action',
      message: `Effacer tous les joueurs ?!!!!`,
      buttons: [
        {
          text: 'Non'
        },
        {
          text: 'Oui',
          handler: () => {
            this.playersService.reset();
          }
        }
      ]
    });
    confirm.present();
  }

  exportCsv(){
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true
    };

    let filename = this.pageTitle;

    let data = this.playersList.map(_player => {
      if(_player.$key !== '0' ){
        delete _player.winning;
        return _player;
      }
    })

    new Angular2Csv(data, filename, options);
  }

}
