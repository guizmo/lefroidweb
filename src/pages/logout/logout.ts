import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';



@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(
    public navCtrl: NavController,
    private userAuth: UserProvider,
    public navParams: NavParams
  ) {
  }

  ionViewDidEnter() {
    this.userAuth.signOut();
  }

}
