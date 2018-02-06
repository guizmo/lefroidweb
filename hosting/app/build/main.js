webpackJsonp([9],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProvider = (function () {
    function UserProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.bornesLogin = 'bornes@lefroidplay.com';
        this.isAuthenticated = false;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.isAuthenticated = true;
                _this.role = (user.email == _this.bornesLogin) ? 'BORNE' : 'ADMIN';
            }
        });
    }
    UserProvider.prototype.signIn = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    UserProvider.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/borne/borne.module": [
		390,
		8
	],
	"../pages/bornes/bornes.module": [
		391,
		7
	],
	"../pages/download/download.module": [
		392,
		6
	],
	"../pages/home/home.module": [
		393,
		2
	],
	"../pages/login/login.module": [
		394,
		3
	],
	"../pages/logout/logout.module": [
		395,
		5
	],
	"../pages/lots/lots.module": [
		396,
		4
	],
	"../pages/players/players.module": [
		397,
		0
	],
	"../pages/stats/stats.module": [
		398,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameProvider = (function () {
    function GameProvider(afdb) {
        this.afdb = afdb;
    }
    GameProvider.prototype.get = function (borneId) {
        this.game = this.afdb.object("/" + borneId + "/game/parameters");
        return this.game;
    };
    GameProvider.prototype.getScrores = function (borneId) {
        return this.scores = this.afdb.list("/" + borneId + "/game/scores/");
    };
    GameProvider.prototype.update = function (params) {
        this.game.update(params);
    };
    GameProvider.prototype.unsubscribe = function () {
        if (this.gameSub) {
            this.gameSub.unsubscribe();
        }
    };
    return GameProvider;
}());
GameProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], GameProvider);

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LotsProvider = (function () {
    function LotsProvider(afdb) {
        this.afdb = afdb;
    }
    LotsProvider.prototype.get = function (borneId) {
        this.lots = this.afdb.object("/" + borneId + "/game/lots");
        return this.lots;
    };
    LotsProvider.prototype.update = function (lots) {
        this.lots.update(lots);
    };
    LotsProvider.prototype.set = function (lots) {
        this.lots.set(lots);
    };
    LotsProvider.prototype.unsubscribe = function () {
        if (this.lotsSub) {
            this.lotsSub.unsubscribe();
        }
    };
    return LotsProvider;
}());
LotsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], LotsProvider);

//# sourceMappingURL=lots.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayersProvider = (function () {
    function PlayersProvider(afdb) {
        this.afdb = afdb;
        this.mainPlayer = {
            players: {
                '0': {
                    "email": "guillaumebartolini@gmail.com",
                    "nom": "Ne pas effacer",
                    "tel": 922020,
                    "winning": "d_1|false"
                }
            }
        };
        console.log(this);
    }
    PlayersProvider.prototype.get = function (borneId) {
        this.borneId = borneId;
        this.players = this.afdb.list("/" + borneId + "/players/");
        return this.players;
    };
    PlayersProvider.prototype.unsubscribe = function () {
        if (this.playersSub) {
            this.playersSub.unsubscribe();
        }
        if (this.playersObjSub) {
            this.playersObjSub.unsubscribe();
        }
    };
    PlayersProvider.prototype.delete = function (player) {
        this.players.remove(player.$key);
    };
    PlayersProvider.prototype.reset = function () {
        this.playersObj = this.afdb.object("/" + this.borneId + "/players");
        this.playersObj.set(this.mainPlayer.players);
    };
    return PlayersProvider;
}());
PlayersProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], PlayersProvider);

//# sourceMappingURL=players.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(287);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_game_game__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_lots_lots__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_players_players__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var firebaseConfig = {
    apiKey: "AIzaSyBCrxz-gbO1Gfn1tSRR9-_z7gGVBGncaRA",
    authDomain: "lefroidplay.firebaseapp.com",
    databaseURL: "https://lefroidplay.firebaseio.com",
    projectId: "lefroidplay",
    storageBucket: "lefroidplay.appspot.com",
    messagingSenderId: "904235419076"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/borne/borne.module#BornePageModule', name: 'BornePage', segment: 'borne', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bornes/bornes.module#BornesPageModule', name: 'BornesPage', segment: 'bornes', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/download/download.module#DownloadPageModule', name: 'DownloadPage', segment: 'download', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lots/lots.module#LotsPageModule', name: 'LotsPage', segment: 'lots', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/players/players.module#PlayersPageModule', name: 'PlayersPage', segment: 'players', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stats/stats.module#StatsPageModule', name: 'StatsPage', segment: 'stats', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_game_game__["a" /* GameProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_lots_lots__["a" /* LotsProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_players_players__["a" /* PlayersProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, afAuth, modalCtrl, userAuth, loadingCtrl) {
        var _this = this;
        this.platform = platform;
        this.afAuth = afAuth;
        this.modalCtrl = modalCtrl;
        this.userAuth = userAuth;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = 'HomePage';
        this.splitPane = true;
        this.pageActive = 'accueil';
        this.pages = [
            {
                title: 'Accueil',
                component: 'HomePage',
                alias: 'accueil'
            }, {
                title: 'Borne  #1',
                params: { borne: "borne_1" },
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
            }, {
                title: 'Borne  #2',
                params: { borne: "borne_2" },
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
        this.initializeApp();
        this.afAuth.authState.subscribe(function (user) {
            _this.loading.dismiss();
            if (!user) {
                _this.loginModal();
            }
            else {
                _this.role = _this.userAuth.role;
                _this.isAuthenticated = _this.userAuth.isAuthenticated;
                if (_this.role == 'BORNE') {
                    _this.splitPane = false;
                    _this.nav.setRoot('DownloadPage');
                }
                else {
                    if (_this.nav.getActive().id != 'home') {
                        _this.nav.setRoot(_this.rootPage);
                    }
                }
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        this.initMenu();
        this.loading = this.loadingCtrl.create({ cssClass: 'site_loading' });
        this.loading.present();
        //this.platform.ready().then(() => { });
    };
    MyApp.prototype.loginModal = function () {
        this.modal = this.modalCtrl.create('LoginPage', {}, { cssClass: 'login-modal' });
        this.modal.present();
        this.loginModalOnDismiss();
    };
    MyApp.prototype.loginModalOnDismiss = function () {
        this.modal.onDidDismiss(function (data) {
            console.log('data', data);
        });
    };
    MyApp.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    MyApp.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    MyApp.prototype.initMenu = function () {
        this.pages = this.pages.map(function (res) {
            if (res.parent) {
                var parent_1 = res;
                res.children.map(function (res) {
                    res.params = parent_1.params;
                });
            }
            return res;
        });
    };
    MyApp.prototype.signOut = function () {
        this.nav.setRoot('LogoutPage');
    };
    MyApp.prototype.openPage = function (page) {
        this.pageActive = page.alias;
        this.nav.setRoot(page.component, page.params);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/guillaumebartolini/apps/lefroidweb/src/app/app.html"*/'<ion-split-pane [enabled]="splitPane">\n  <ion-menu [content]="content" persistent="true">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>LeFroidPlay</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content no-bounce no-scroll>\n      <ion-list>\n        <ng-container *ngFor="let p of pages">\n          <button *ngIf="!p.parent" menuClose ion-item (click)="openPage(p)" [class.active]="pageActive == p.alias">\n            {{p.title}}\n          </button>\n          <ion-item-group *ngIf="p.parent" >\n            <ion-item-divider\n              (click)="toggleGroup(p.parent)"\n              [class.active]="isGroupShown(p.parent)">\n              {{p.title}}\n            </ion-item-divider>\n            <button *ngFor="let c of p.children" menuClose ion-item (click)="openPage(c)" [class.show]="isGroupShown(p.parent)" [class.active]="pageActive == c.alias">\n              {{c.title}}\n            </button>\n          </ion-item-group>\n        </ng-container>\n\n      </ion-list>\n      <button ion-item  secondary (click)="signOut()">Se déconnecter</button>\n    </ion-content>\n\n    <ion-footer text-center no-border>\n      <a ion-button icon-start round href="itms-services://?action=download-manifest&url=https://lefroidplay.firebaseapp.com/LeFroidPlay-2017-09-18/manifest.plist">\n        <ion-icon name="download"></ion-icon>\n        Télécharger L\'appli\n      </a>\n    </ion-footer>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/Users/guillaumebartolini/apps/lefroidweb/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/guillaumebartolini/apps/lefroidweb/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/guillaumebartolini/apps/lefroidweb/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ })

},[269]);
//# sourceMappingURL=main.js.map