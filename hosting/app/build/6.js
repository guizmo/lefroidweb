webpackJsonp([6],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadPageModule", function() { return DownloadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download__ = __webpack_require__(524);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DownloadPageModule = (function () {
    function DownloadPageModule() {
    }
    return DownloadPageModule;
}());
DownloadPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__download__["a" /* DownloadPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__download__["a" /* DownloadPage */]),
        ],
    })
], DownloadPageModule);

//# sourceMappingURL=download.module.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DownloadPage = (function () {
    function DownloadPage(userAuth) {
        this.userAuth = userAuth;
    }
    DownloadPage.prototype.signOut = function () {
        this.userAuth.signOut();
    };
    return DownloadPage;
}());
DownloadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-download',template:/*ion-inline-start:"/Users/guillaumebartolini/apps/lefroidweb/src/pages/download/download.html"*/'<div ion-fixed text-center>\n  <ion-grid>\n    <ion-row align-items-center>\n      <ion-col>\n        <a ion-button round color="light"\n        class="appLink"\n        href="itms-services://?action=download-manifest&url=https://lefroidplay.firebaseapp.com/LeFroidPlay-2017-09-18/manifest.plist">Télécharger l\'application v1.2.2\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-footer no-border text-center>\n    <button ion-button round icon-start color="danger" (click)="signOut()">\n      <ion-icon name="log-out"></ion-icon>\n      Se déconnecter\n    </button>\n  </ion-footer>\n</div>\n'/*ion-inline-end:"/Users/guillaumebartolini/apps/lefroidweb/src/pages/download/download.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
], DownloadPage);

//# sourceMappingURL=download.js.map

/***/ })

});
//# sourceMappingURL=6.js.map