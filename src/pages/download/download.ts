import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownloadPage {

  constructor(
    private userAuth: UserProvider
  ) {
  }

  signOut(){
    this.userAuth.signOut();
  }

}
