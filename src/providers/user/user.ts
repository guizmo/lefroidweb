import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()
export class UserProvider {

  private bornesLogin = 'bornes@lefroidplay.com';
  public role;
  public isAuthenticated:boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.role = (user.email == this.bornesLogin) ? 'BORNE' : 'ADMIN' ;
      }
    });
  }

  signIn(email: string, password: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    this.afAuth.auth.signOut();
  }

}
