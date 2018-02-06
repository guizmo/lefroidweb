webpackJsonp([4],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotsPageModule", function() { return LotsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lots__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LotsPageModule = (function () {
    function LotsPageModule() {
    }
    return LotsPageModule;
}());
LotsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lots__["a" /* LotsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lots__["a" /* LotsPage */]),
        ],
    })
], LotsPageModule);

//# sourceMappingURL=lots.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LotsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lots_lots__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_game_game__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LotsPage = (function () {
    function LotsPage(navCtrl, lotsService, gameService, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.lotsService = lotsService;
        this.gameService = gameService;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.pageTitle = 'Lots ';
        this.borne = this.navParams.get('borne');
    }
    LotsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LotsPage', this);
        /*this.lotsForm = this.formBuilder.group({
          lots: this.formBuilder.array([  ])
        });*/
        if (this.borne) {
            this.init();
            this.pageTitle = 'Lots : ' + this.borne.replace('_', ' ');
        }
    };
    LotsPage.prototype.ionViewDidLeave = function () {
        if (this.scoresSub) {
            this.scoresSub.unsubscribe();
        }
        if (this.lotsServiceSub) {
            this.lotsServiceSub.unsubscribe();
        }
    };
    LotsPage.prototype.init = function () {
        var _this = this;
        this.lotsServiceSub = this.lotsService.get(this.borne).subscribe(function (res) {
            if (res) {
                _this.arrayOfKeys = Object.keys(res);
                _this.lotsList = res;
                /*for (let key in this.lotsList) {
                  this.initLot(this.lotsList[key]);
                }*/
                _this.scoresSub = _this.gameService.getScrores(_this.borne).map(function (res) {
                    var scores = {};
                    for (var key in _this.lotsList) {
                        scores[key] = 0;
                    }
                    res.forEach(function (day) {
                        for (var key in _this.lotsList) {
                            if (day[key]) {
                                scores[key] = scores[key] + day[key];
                            }
                        }
                    });
                    return scores;
                }).subscribe(function (res) { return _this.scores = res; });
            }
        });
    };
    LotsPage.prototype.saveLots = function () {
        this.lotsService.set(this.lotsList);
    };
    LotsPage.prototype.removeLot = function (key) {
        delete this.lotsList[key];
        var index = 1;
        var _lotsList = {};
        for (var key_1 in this.lotsList) {
            var keyIndex = index++;
            var newKey = 'lot_' + keyIndex;
            this.lotsList[key_1].id = keyIndex;
            _lotsList[newKey] = this.lotsList[key_1];
        }
        console.log(_lotsList);
        this.lotsList = _lotsList;
        this.arrayOfKeys = Object.keys(this.lotsList);
    };
    LotsPage.prototype.addLot = function () {
        var index = this.arrayOfKeys.length + 1;
        var key = 'lot_' + index;
        this.lotsList[key] = {
            id: index,
            label_admin: 'label admin',
            label: 'label',
            limitPerDay: 30,
            quantity: 0,
        };
        this.arrayOfKeys = Object.keys(this.lotsList);
        console.log(this.lotsList);
    };
    return LotsPage;
}());
LotsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lots',template:/*ion-inline-start:"/Users/guillaumebartolini/apps/lefroidweb/src/pages/lots/lots.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{pageTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid class="table-grid">\n    <ion-row  class="table-head">\n      <ion-col col-1 class="table-col align-items"  align-self-center>ID</ion-col>\n      <ion-col col-2 class="table-col align-items"  align-self-center>Admin label</ion-col>\n      <ion-col class="table-col align-items"  align-self-center>Label *</ion-col>\n      <ion-col col-2 class="table-col align-items"  align-self-center>Quantité total</ion-col>\n      <ion-col col-2 class="table-col align-items"  align-self-center>Quantité Gagné</ion-col>\n      <ion-col col-1 class="table-col align-items"  align-self-center>&nbsp;</ion-col>\n    </ion-row>\n    <!-- <ion-row *ngFor="let key of arrayOfKeys; let i = index;" class="table-tr" >\n      <ion-col class="table-col align-items" ><span>{{lotsList[key].id}}</span></ion-col>\n      <ion-col class="table-col align-items"><span>{{lotsList[key].label_admin}}</span></ion-col>\n      <ion-col class="table-col align-items" ><span>{{lotsList[key].label}}</span></ion-col>\n      <ion-col class="table-col align-items" ><span>{{lotsList[key].limitPerDay}}</span></ion-col>\n      <ion-col class="table-col align-items" ><span>{{lotsList[key].quantity}}</span></ion-col>\n    </ion-row> -->\n\n    <ion-row *ngFor="let key of arrayOfKeys; let i = index;" class="table-tr" >\n      <ion-col col-1 class="table-col align-items">\n        <span>{{lotsList[key].id}}</span>\n      </ion-col>\n      <ion-col col-2 class="table-col align-items" >\n        <ion-input type="text" placeholder="{{lotsList[key].label_admin}}" [(ngModel)]="lotsList[key].label_admin" ></ion-input>\n      </ion-col>\n      <ion-col class="table-col align-items">\n        <ion-input type="text" placeholder="{{lotsList[key].label}}" [(ngModel)]="lotsList[key].label" ></ion-input>\n      </ion-col>\n      <ion-col col-2 class="table-col align-items">\n        <ion-input type="text" placeholder="{{lotsList[key].quantity}}" [(ngModel)]="lotsList[key].quantity" ></ion-input>\n      </ion-col>\n      <ion-col col-2 class="table-col align-items">\n        <span *ngIf="scores">{{scores[key]}}</span>\n      </ion-col>\n      <ion-col col-1 class="table-col align-items">\n        <button ion-button block (click)="removeLot(key)" color="light" icon-only>\n          <ion-icon name="trash" color="danger"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row class="table-tr">\n      <ion-col>\n        <button ion-button block (click)="saveLots()" color="secondary">\n          Enregistrer\n        </button>\n      </ion-col>\n      <ion-col class="table-col align-items" col-1>\n        <button ion-button block (click)="addLot()" icon-only color="light">\n          <ion-icon name="add-circle" color="secondary"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <p>* Le "label" est utilisé pour composer le SMS. la premiere parti est dans les paramètres du jeu (ex: JEU ORANGINA. Tu as gagné 1 clé USB. Récupère tout de suite ton lot à la caisse)</p>\n  <!-- <form *ngIf="lotsForm" [formGroup]="lotsForm">\n    <ion-grid class="table-grid">\n      <ion-row  class="table-head">\n        <ion-col class="table-col align-items"  align-self-center>ID</ion-col>\n        <ion-col class="table-col align-items"  align-self-center>Admin label</ion-col>\n        <ion-col class="table-col align-items"  align-self-center>Label*</ion-col>\n        <ion-col class="table-col align-items"  align-self-center>Quantité</ion-col>\n      </ion-row>\n\n        <div formArrayName="lots" *ngFor="let lot of lotsForm.get(\'lots\').controls; let i = index;"  >\n          <ion-row [formGroupName]="i" class="table-tr" >\n          <ion-col class="table-col align-items" >\n            <ion-input formControlName="id" placeholder="id"></ion-input>\n          </ion-col>\n          <ion-col class="table-col align-items">\n            <ion-input formControlName="label" placeholder="label"></ion-input>\n          </ion-col>\n          <ion-col class="table-col align-items" >\n            <ion-input formControlName="label_admin" placeholder="label_admin"></ion-input>\n          </ion-col>\n          <ion-col class="table-col align-items" >\n            <ion-input formControlName="limitPerDay" placeholder="limitPerDay"></ion-input>\n          </ion-col>\n          <ion-col class="table-col align-items" >\n            <ion-input formControlName="quantity" placeholder="quantity"></ion-input>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n\n\n  </form> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/guillaumebartolini/apps/lefroidweb/src/pages/lots/lots.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_lots_lots__["a" /* LotsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_game_game__["a" /* GameProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], LotsPage);

//# sourceMappingURL=lots.js.map

/***/ })

});
//# sourceMappingURL=4.js.map