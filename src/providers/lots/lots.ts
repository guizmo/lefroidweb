import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class LotsProvider {

  private lots:FirebaseObjectObservable<any>;
  public lotsSub;
  public lotsList:any;

  constructor(
    private afdb: AngularFireDatabase,
  ) {
  }

  get(borneId: string){
    this.lots = this.afdb.object(`/${borneId}/game/lots`);
    return this.lots;
  }

  update(lots: any): void {
    this.lots.update(lots);
  }
  set(lots: any): void {
    this.lots.set(lots);
  }

  unsubscribe(){
    if(this.lotsSub){
      this.lotsSub.unsubscribe();
    }
  }
}
