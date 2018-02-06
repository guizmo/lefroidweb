import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { Angular2Csv } from 'angular2-csv/Angular2-csv'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserProvider } from '../providers/user/user';
import { GameProvider } from '../providers/game/game';
import { LotsProvider } from '../providers/lots/lots';
import { PlayersProvider } from '../providers/players/players';


export const firebaseConfig = {
  apiKey: "AIzaSyBCrxz-gbO1Gfn1tSRR9-_z7gGVBGncaRA",
  authDomain: "lefroidplay.firebaseapp.com",
  databaseURL: "https://lefroidplay.firebaseio.com",
  projectId: "lefroidplay",
  storageBucket: "lefroidplay.appspot.com",
  messagingSenderId: "904235419076"
};


@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameProvider,
    LotsProvider,
    PlayersProvider
  ]
})
export class AppModule {}
