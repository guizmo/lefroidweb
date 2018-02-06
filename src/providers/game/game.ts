import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameProvider {

  private game:FirebaseObjectObservable<any>;
  public gameSub;
  public gameParams:any;
  private scores:FirebaseListObservable<any>;

  constructor(
    private afdb: AngularFireDatabase,
  ) {
  }

  get(borneId: string) {
    this.game = this.afdb.object(`/${borneId}/game/parameters`);
    return this.game;
  }

  getScrores(borneId: string){
    return this.scores = this.afdb.list(`/${borneId}/game/scores/`);
  }

  update(params: any): void {
    this.game.update(params);
  }

  unsubscribe() {
    if(this.gameSub){
      this.gameSub.unsubscribe();
    }
  }
}
