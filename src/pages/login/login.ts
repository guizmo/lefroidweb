import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';

import { UserProvider } from '../../providers/user/user';
import { EmailValidator } from '../../validators/email';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public isAuthenticated:boolean = false;
  public loginForm;
  private bornesLogin = 'bornes@lefroidplay.com';
  public role;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private viewCtrl: ViewController,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private userAuth: UserProvider
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewCanLeave(): boolean{
    return this.isAuthenticated;
  }


  dismiss() {
    //let data = { role: this.role };
    this.viewCtrl.dismiss();
  }

  loginUser(): void {
    let email = this.loginForm.value.email;
    let valid = this.loginForm.valid;
    let password = this.loginForm.value.password;
    if(email == 'borne' && password == 'borne'){
      email = this.bornesLogin;
      password = 'bornes';
      valid = true;
    }
    console.log('email ', email, password);

    if (!valid) {
      console.log(this.loginForm.value);
    } else {
      this.userAuth.signIn(email, password).then(authData => {
        this.loading.dismiss().then(() => {
          this.isAuthenticated = true;
          this.role = this.userAuth.role;
          this.dismiss();
        });
      }, error => {
        this.loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }


}
