import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import moment from 'moment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';

import { LotsProvider } from '../../providers/lots/lots';
import { GameProvider } from '../../providers/game/game';
import { PlayersProvider } from '../../providers/players/players';


@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  private stats;
  private statsList;
  private borne;
  private pageTitle: string = 'Stats'
  private statsSub;
  private lotsList:any;
  private playersList:any;
  private lotsListObj:any;
  private gameParams:any;
  private dataSubscriptions;
  private gameDay;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gameService: GameProvider,
    private lotsService: LotsProvider,
    private playersService: PlayersProvider,
    private alertCtrl: AlertController,
  ) {
    this.borne = this.navParams.get('borne');
    this.fetchData();
    console.log(this);
  }
  getGameDay(){
    let startDate = moment(this.gameParams.starDate);
    let today = moment();
    return today.diff(startDate, 'days')+1;
  }

  ionViewDidLeave() {
    if(this.statsSub){
      this.statsSub.unsubscribe();
    }
  }

  fetchData(){
    if(this.borne){
      this.pageTitle = 'Joueurs : ' + this.borne.replace('_', ' ');

      this.stats = this.gameService.getScrores(this.borne);
      this.dataSubscriptions = Observable.forkJoin(
        this.lotsService.get(this.borne).first(),
        this.gameService.get(this.borne).first(),
        this.playersService.get(this.borne).first()
      );
      this.dataSubscriptions.subscribe(res => {
        this.lotsList = res[0];
        this.lotsListObj = Object.keys(res[0]);
        this.gameParams = res[1];
        this.playersList = res[2];

        this.gameDay = this.getGameDay();

        this.statsSub = this.stats.subscribe(score => {
          this.statsList = score.reverse();
          this.createTable();
        })
      });


    }
  }


  createTable(){


    this.statsList.map(_score => {
      let key = _score.$key;
      let playingDay = moment(this.gameParams.starDate).add(key.replace('d_', '')-1, 'days').format('DD/MM/YY');
      _score.playerCount = 0;
      this.playersList.map(_player => {
        let winning = _player.winning.split('|');
        (winning[0] == key && _player.nom != 'Ne pas effacer') ? _score.playerCount++ : '' ;
      });
      _score.day = playingDay;
      return _score
    });

    this.statsList.sort(function (a, b) {
      return moment.utc(moment(b.day, "DD/MM/YY")).diff(moment.utc(moment(a.day, "DD/MM/YY")))
    });

  }

  resetScores(){
    let confirm = this.alertCtrl.create({
      title: 'Action',
      message: `Effacer tous les lots ?!!!!`,
      buttons: [
        {
          text: 'Non'
        },
        {
          text: 'Oui',
          handler: () => {
            this.updateScores();
          }
        }
      ]
    });
    confirm.present();
  }

  updateScores(){
    let objToSet = {total:0};
    this.lotsListObj.forEach(function(elem) {
      objToSet[elem] = null;
    });

    this.statsList.map(_score => {
      if(_score.$key == 'd_1'){
        this.stats.update('d_1', objToSet);
      }else{
        this.stats.remove(_score.$key);
      }
    })


    for (let i = 2; i <= this.gameDay; i++) {
      console.log(i);
      this.stats.update('d_'+i, {total:0});
    }

  }
}
