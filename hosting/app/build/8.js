webpackJsonp([8],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BornePageModule", function() { return BornePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__borne__ = __webpack_require__(522);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BornePageModule = (function () {
    function BornePageModule() {
    }
    return BornePageModule;
}());
BornePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__borne__["a" /* BornePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__borne__["a" /* BornePage */]),
        ],
    })
], BornePageModule);

//# sourceMappingURL=borne.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BornePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_game__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BornePage = (function () {
    function BornePage(navCtrl, navParams, gameService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameService = gameService;
        this.formBuilder = formBuilder;
        this.pageTitle = 'Paramétrages';
        this.parametersForm = this.formBuilder.group({
            days: '', endDate: '', endTime: '', estimate: '', message: '', messageLost: '', pondRation: '', starDate: '', starTime: '', messagesTypesWon: '', messagesTypesLost: '',
        });
        this.borne = this.navParams.get('borne');
        if (this.borne) {
            this.init();
            this.pageTitle = 'Paramétrages : ' + this.borne.replace('_', ' ');
        }
        console.log(this);
    }
    BornePage.prototype.ionViewDidLoad = function () {
    };
    BornePage.prototype.parametersFormSubmit = function () {
        if (!this.parametersForm.valid) {
            console.log('Not valid');
        }
        else {
            var values = {
                days: this.parametersForm.value.days,
                endDate: this.parametersForm.value.endDate,
                endTime: this.parametersForm.value.endTime,
                estimate: this.parametersForm.value.estimate,
                message: this.parametersForm.value.message,
                messageLost: this.parametersForm.value.messageLost,
                pondRation: this.parametersForm.value.pondRation,
                starDate: this.parametersForm.value.starDate,
                starTime: this.parametersForm.value.starTime,
                messagesTypes: {
                    lost: this.parametersForm.value.messagesTypesLost,
                    won: this.parametersForm.value.messagesTypesWon
                }
            };
            this.gameService.update(values);
        }
    };
    BornePage.prototype.init = function () {
        var _this = this;
        this.gameServiceSub = this.gameService.get(this.borne).subscribe(function (res) {
            if (res) {
                console.log('res.days', res.days);
                _this.parametersForm.patchValue({
                    days: res.days,
                    endDate: res.endDate,
                    endTime: res.endTime,
                    estimate: res.estimate,
                    message: res.message,
                    messageLost: res.messageLost,
                    pondRation: res.pondRation,
                    starDate: res.starDate,
                    starTime: res.starTime,
                    messagesTypesLost: res.messagesTypes.lost,
                    messagesTypesWon: res.messagesTypes.won
                });
            }
        });
    };
    return BornePage;
}());
BornePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-borne',template:/*ion-inline-start:"/Users/guillaumebartolini/apps/lefroidweb/src/pages/borne/borne.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{pageTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="parametersForm" (submit)="parametersFormSubmit()" novalidate>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Longueure du jeu (Jours)</ion-label>\n          <ion-input #days formControlName="days" type="number" placeholder="14" [class.invalid]="!parametersForm.controls.days.valid && parametersForm.controls.days.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Estimation participants</ion-label>\n          <ion-input #estimate formControlName="estimate" type="number" placeholder="1500" [class.invalid]="!parametersForm.controls.estimate.valid && parametersForm.controls.estimate.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Ratio de pondération *</ion-label>\n          <ion-input #pondRation formControlName="pondRation" type="number" placeholder="1.5" [class.invalid]="!parametersForm.controls.pondRation.valid && parametersForm.controls.pondRation.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Date début</ion-label>\n          <ion-input #starDate formControlName="starDate" type="text" placeholder="2017-10-01" [class.invalid]="!parametersForm.controls.starDate.valid && parametersForm.controls.starDate.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Date fin</ion-label>\n          <ion-input #endDate formControlName="endDate" type="text" placeholder="2017-10-20" [class.invalid]="!parametersForm.controls.endDate.valid && parametersForm.controls.endDate.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Heure début</ion-label>\n          <ion-input #starTime formControlName="starTime" type="number" placeholder="8" [class.invalid]="!parametersForm.controls.starTime.valid && parametersForm.controls.starTime.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Heure fin</ion-label>\n          <ion-input #endTime formControlName="endTime" type="number" placeholder="20" [class.invalid]="!parametersForm.controls.endTime.valid && parametersForm.controls.endTime.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Message gagné(SMS)</ion-label>\n          <ion-input #message formControlName="message" type="text" placeholder="Bravo c\'est gagné" [class.invalid]="!parametersForm.controls.message.valid && parametersForm.controls.message.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Message perdu (SMS)</ion-label>\n          <ion-input #messageLost formControlName="messageLost" type="text" placeholder="Dommage !" [class.invalid]="!parametersForm.controls.messageLost.valid && parametersForm.controls.messageLost.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Message gagné (appli)</ion-label>\n            <ion-input #messagesTypesWon formControlName="messagesTypesWon" type="text" placeholder="Bravo c\'est gagné" [class.invalid]="!parametersForm.controls.messagesTypesWon.valid && parametersForm.controls.messagesTypesWon.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Message perdu (appli)</ion-label>\n          <ion-input #messagesTypesLost formControlName="messagesTypesLost" type="text" placeholder="Dommage !" [class.invalid]="!parametersForm.controls.messagesTypesLost.valid && parametersForm.controls.messagesTypesLost.dirty"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button block type="submit">\n          Enregistrer\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n  <p>* le jeu se déroule de 8 a 20h soit 12h de jeu. A 10h il reste 10h de jeu donc si le ration est "1.5" 10h/1.5=6.66 (arrondit au supèrieur) . Donc 1 chance sur 7).\n  A 15h il reste 5h de jeu (5h/1,5=3.33) soit 1 chance sur 4 de gagner. Ce système peemet d\'augmenter les chances de gagner au fur a mesure que le jeu progresse. Le systeme est bloqué a un minimum de 1/2 chances de gagner.</p>\n</ion-content>\n'/*ion-inline-end:"/Users/guillaumebartolini/apps/lefroidweb/src/pages/borne/borne.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_game_game__["a" /* GameProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], BornePage);

//# sourceMappingURL=borne.js.map

/***/ })

});
//# sourceMappingURL=8.js.map