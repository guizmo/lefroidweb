import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { LotsProvider } from '../../providers/lots/lots';
import { GameProvider } from '../../providers/game/game';


@IonicPage()
@Component({
  selector: 'page-lots',
  templateUrl: 'lots.html',
})
export class LotsPage {
  private borne;
  private pageTitle: string = 'Lots ';
  private lotsForm: FormGroup;
  //private lots:any;
  private lotsList:any;
  private lotsServiceSub;
  private arrayOfKeys;
  private scoresSub;
  private scores;

  constructor(
    public navCtrl: NavController,
    private lotsService: LotsProvider,
    private gameService: GameProvider,
    public formBuilder: FormBuilder,
    public navParams: NavParams
  ) {
    this.borne = this.navParams.get('borne');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LotsPage', this);
    /*this.lotsForm = this.formBuilder.group({
      lots: this.formBuilder.array([  ])
    });*/
    if(this.borne){
      this.init();
      this.pageTitle = 'Lots : '  + this.borne.replace('_', ' ');
    }

  }

  ionViewDidLeave(){
    if(this.scoresSub){
      this.scoresSub.unsubscribe();
    }
    if(this.lotsServiceSub){
      this.lotsServiceSub.unsubscribe();
    }
  }

  init(){
    this.lotsServiceSub = this.lotsService.get(this.borne).subscribe(res => {
      if(res){
        this.arrayOfKeys = Object.keys(res);
        this.lotsList = res;

        /*for (let key in this.lotsList) {
          this.initLot(this.lotsList[key]);
        }*/


        this.scoresSub = this.gameService.getScrores(this.borne).map(res => {
          let scores = {};
          for (let key in this.lotsList) {
            scores[key] = 0;
          }
          res.forEach(day => {
            for (let key in this.lotsList) {
              if(day[key]){
                scores[key] = scores[key]+day[key];
              }
            }
          });
          return scores;
        }).subscribe(res => this.scores = res );

      }
    });
  }

  saveLots(){
    this.lotsService.set(this.lotsList);
  }

  removeLot(key){
    delete this.lotsList[key];
    let index = 1;
    let _lotsList = {};
    for (let key in this.lotsList) {
      let keyIndex = index++;
      let newKey = 'lot_'+keyIndex;
      this.lotsList[key].id = keyIndex;
      _lotsList[newKey] = this.lotsList[key];
    }
    console.log(_lotsList);
    this.lotsList = _lotsList;
    this.arrayOfKeys = Object.keys(this.lotsList);
  }
  addLot(): void {
    let index = this.arrayOfKeys.length+1;
    let key = 'lot_'+index;
    this.lotsList[key] = {
      id: index,
      label_admin: 'label admin',
      label: 'label',
      limitPerDay: 30,
      quantity: 0,
    }
    this.arrayOfKeys = Object.keys(this.lotsList);
    console.log(this.lotsList);
  }

//https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2
  /*
  createLot(lot = null): FormGroup {
    return this.formBuilder.group({
      id: (lot) ? lot.id : '',
      label: (lot) ? lot.label : '',
      label_admin: (lot) ? lot.label_admin : '',
      limitPerDay: (lot) ? lot.limitPerDay : '',
      quantity: (lot) ? lot.quantity : ''
    });
  }

  initLot(lot): void {
    this.lots = this.lotsForm.get('lots') as FormArray;
    this.lots.push(this.createLot(lot));
  }

  addLot(): void {
    //this.lots = this.lotsForm.get('lots') as FormArray;
    this.lots.push(this.createLot());
  }
  */
}
