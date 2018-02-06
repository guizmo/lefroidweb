import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, LoadingController } from 'ionic-angular';

import { ListPage } from '../pages/list/list';
import { AngularFireAuth } from 'angularfire2/auth';

import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  shownGroup;
  group;
  rootPage: any = 'HomePage';
  splitPane:boolean = true;
  pageActive:string = 'accueil';
  modal;
  isAuthenticated;
  role;
  loading: any;
  pages: Array<{title: string, component?: any, alias?:string, parent?:any, params?:any, children?:any}> = [
    {
      title: 'Accueil',
      component: 'HomePage',
      alias: 'accueil'
    },{
      title: 'Borne  #1',
      params: {borne:"borne_1"},
      parent: 'borne_1',
      children: [
        {
          title: 'Joueurs',
          component: 'PlayersPage',
          child: true,
          alias: 'players-1'
        },
        {
           title: 'Stats',
           component: 'StatsPage',
           child: true,
           alias: 'stats-1'
         },
         {
           title: 'Paramètres',
           component: 'BornePage',
           child: true,
           alias: 'borne-params-1'
         },
         {
           title: 'Lots',
           component: 'LotsPage',
           child: true,
           alias: 'lots-params-1'
         }
      ]
    },{
      title: 'Borne  #2',
      params: {borne:"borne_2"},
      parent: 'borne_2',
      children: [
        {
          title: 'Joueurs',
          component: 'PlayersPage',
          child: true,
          alias: 'players-2'
        },
        {
           title: 'Stats',
           component: 'StatsPage',
           child: true,
           alias: 'stats-1'
         },
         {
           title: 'Paramètres',
           component: 'BornePage',
           child: true,
           alias: 'borne-params-2'
         },
         {
           title: 'Lots',
           component: 'LotsPage',
           child: true,
           alias: 'lots-params-2'
         }
      ]
    }
  ];
  constructor(
    public platform: Platform,
    private afAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private userAuth: UserProvider,
    public loadingCtrl: LoadingController,
  ) {
    this.initializeApp();

    this.afAuth.authState.subscribe(user => {
      this.loading.dismiss();
      if (!user) {
        this.loginModal();
      }else{
        this.role = this.userAuth.role;
        this.isAuthenticated = this.userAuth.isAuthenticated;
        if(this.role == 'BORNE'){
          this.splitPane = false;
          this.nav.setRoot('DownloadPage');
        }else{
          if(this.nav.getActive().id != 'home'){
            this.nav.setRoot(this.rootPage);
          }
        }
      }
    });

  }

  initializeApp() {
    this.initMenu();
    this.loading = this.loadingCtrl.create({ cssClass: 'site_loading'});
    this.loading.present();
    //this.platform.ready().then(() => { });
  }

  loginModal() {
    this.modal = this.modalCtrl.create('LoginPage', {}, { cssClass: 'login-modal' });
    this.modal.present();
    this.loginModalOnDismiss();
  }

  loginModalOnDismiss(){
    this.modal.onDidDismiss(data => {
      console.log('data', data);
    });
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }
  isGroupShown(group) {
    return this.shownGroup === group;
  }

  initMenu(){
    this.pages = this.pages.map(res => {
      if(res.parent){
        let parent = res;
        res.children.map(res => {
          res.params = parent.params;
        })
      }
      return res;
    })
  }

  signOut(){
    this.nav.setRoot('LogoutPage')
  }

  openPage(page) {
    this.pageActive = page.alias;
    this.nav.setRoot(page.component, page.params);

  }


}
