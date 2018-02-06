import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PlayersProvider {

  private players:FirebaseListObservable<any>;
  private playersObj:FirebaseObjectObservable<any>;
  private borneId;
  private playersObjSub;
  public playersSub;
  public playersList:any;
  private mainPlayer:any = {
    players: {
      '0':{
        "email" : "guillaumebartolini@gmail.com",
        "nom" : "Ne pas effacer",
        "tel" : 922020,
        "winning" : "d_1|false"
      }
    }
  }

  constructor(
    private afdb: AngularFireDatabase,
  ) {
    console.log(this);
  }

  get(borneId: string){
    this.borneId = borneId;
    this.players = this.afdb.list(`/${borneId}/players/`);
    return this.players;
  }

  unsubscribe(){
    if(this.playersSub){
      this.playersSub.unsubscribe();
    }
    if(this.playersObjSub){
      this.playersObjSub.unsubscribe();
    }
  }

  delete(player: any): void {
    this.players.remove(player.$key);
  }

  reset(): void{
    this.playersObj = this.afdb.object(`/${this.borneId}/players`);
    this.playersObj.set(this.mainPlayer.players);
  }
}
