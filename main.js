(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apicall.service.ts":
/*!************************************!*\
  !*** ./src/app/apicall.service.ts ***!
  \************************************/
/*! exports provided: ApicallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallService", function() { return ApicallService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApicallService = /** @class */ (function () {
    function ApicallService(_http) {
        this._http = _http;
    }
    ApicallService.prototype.regionapi = function (regionselector) {
        return this._http.get('https://restcountries.eu/rest/v2/region/' + regionselector);
    };
    ApicallService.prototype.countryname = function (nameOfcountry) {
        return this._http.get('https://restcountries.eu/rest/v2/name/' + nameOfcountry);
    };
    ApicallService.prototype.langfilter = function (langdata) {
        return this._http.get('https://restcountries.eu/rest/v2/lang/' + langdata);
    };
    ApicallService.prototype.currencyfilter = function (currency_data) {
        return this._http.get('https://restcountries.eu/rest/v2/currency/' + currency_data);
    };
    ApicallService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApicallService);
    return ApicallService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apicall.service */ "./src/app/apicall.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _region_region_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./region/region.component */ "./src/app/region/region.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'region', component: _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"] },
                    { path: 'regionalcountry', component: _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"] },
                    { path: '', component: _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"] }
                ])
            ],
            providers: [_apicall_service__WEBPACK_IMPORTED_MODULE_3__["ApicallService"], _region_region_component__WEBPACK_IMPORTED_MODULE_6__["RegionComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/region/region.component.css":
/*!*********************************************!*\
  !*** ./src/app/region/region.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/region/region.component.html":
/*!**********************************************!*\
  !*** ./src/app/region/region.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: black\" *ngIf =\"countrydata == undefined && countrynamedata == undefined && languagedetails == undefined && currencydetails == undefined\">\n  <div class=\"row\">\n      <div class=\" col-sm-12 col-lg-4 col-md-4\" >\n  \n      </div>\n\n    <div class=\" col-sm-12 col-lg-4 col-md-4\" >\n        <div style=\"color: white;\" class=\"text-fluid\">Search the name of country via Region</div>\n\n    </div>\n    <div class=\" col-sm-12 col-lg-4 col-md-4\" >\n  \n      </div>\n    \n  </div>\n\n</div>\n\n<div class=\"container\" style=\"background-color: black\" *ngIf = \"countrydata != undefined\">\n    <div class=\"row\">\n  \n      <div class=\" col-sm-12 col-lg-12 col-md-12\" >\n          <h2 style=\"color: white\">Countries Name </h2>\n  \n      </div>\n      \n    </div>\n  \n  </div>\n  <br>\n  <br>\n\n\n\n\n\n\n<div class=\"container\" *ngIf = \"countrydata === undefined\" >\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-4\" *ngFor = \"let regions  of Regional_zone \">\n\n        <div class=\"card\" style=\"width: 100%; \" >\n            <img class=\"card-img-top \" src=\"assets/region.jpg\" alt=\"Card image cap\" class=\"img-fluid\">\n            <div class=\"card-body\">\n              <h3 class=\"card-title\" > </h3>\n              <a (click)=\"countryzone(regions)\"   class=\"btn btn-info\" style=\"height: 20%; width: 40%\"> {{regions}}</a>\n            </div>\n          </div>\n<br>\n<br>\n\n    </div>\n    \n  </div>\n  </div>\n\n<!-- button for single country display on the basis of region -->\n\n<div class=\"container\" *ngIf = \"countrynamedata == undefined && languagedetails == undefined && currencydetails== undefined\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-12 col-sm-12\" *ngFor = \"let obj1 of countrydata\">\n\n        <div class=\"card\" style=\"width: 100%; \" >\n            <img class=\"card-img-top \" src=\"{{obj1.flag}}\" alt=\"Card image cap\" class=\"img-fluid\">\n\n            <div class=\"card-body\">\n            <h4 class=\"card-title\" style=\"color:sienna\" >CountryName: {{obj1.name}} </h4>\n           \n              <br>\n              <h5>Region:- {{obj1.region}}</h5>\n              <br>\n              <h5>Capital:- {{obj1.capital}}</h5>\n\n              <ul class=\"list-group\">\n              <a (click)=\"countrynamedetail(obj1.name)\"   class=\"btn btn-info\">view details</a>\n              <li class=\"list-group-item\"> </li>\n<a (click)=\"languagefilter(obj1.languages[0].iso639_1)\"   class=\"btn btn-danger\">Search by Language </a>\n<li class=\"list-group-item\"></li>\n<a (click)=\"currencyfilter(obj1.currencies[0].code)\"   class=\"btn btn-danger\"> Search by currency </a>\n<li class=\"list-group-item\"></li>\n       \n                </ul>\n                <br>\n\n\n            </div>\n\n          </div>\n          <br>\n\n\n\n\n\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n\n\n\n\n<!-- language filter data display -->\n\n<div class=\"container\" *ngIf = \"languagedetails != undefined\">\n<div class=\"row\">\n  <div class=\"col-lg-4 col-md-12 col-sm-12\" *ngFor= \"let obj3 of languagedetails\">\n      <div class=\"card\" style=\"width: 100%; \" >\n          <div class=\"card-body\">\n              <img class=\"card-img-top \" src=\"{{obj3.flag}}\" alt=\"Card image cap\" class=\"img-fluid\">\n\n            <h4 class=\"card-title\" style=\"color:sienna\" >CountryName: {{obj3.name}} </h4>\n            <br>\n            <h5>Region:  {{obj3.region}}</h5>\n            <br>\n            <h5>Capital:  {{obj3.capital}}</h5>\n\n           \n\n\n          </div>\n\n\n        </div>\n        <br>\n\n  </div>\n\n</div>\n</div>\n\n\n<!-- currencies data display -->\n\n<div class=\"container\" *ngIf = \"currencydetails != undefined\">\n  <div class=\"row\">\n<div class=\"col-lg-4 col-md-12 col-sm-12\" *ngFor = \"let obj4 of currencydetails\">\n    <div class=\"card\" style=\"width: 100%; \" >\n        <div class=\"card-body\">\n            <img class=\"card-img-top \" src=\"{{obj4.flag}}\" alt=\"Card image cap\" class=\"img-fluid\">\n\n          <h4 class=\"card-title\" style=\"color:sienna\" >CountryName: {{obj4.name}} </h4>\n          <br>\n          <h5>Region:  {{obj4.region}}</h5>\n          <br>\n          <h5>Capital:  {{obj4.capital}}</h5>\n\n         \n\n\n        </div>\n\n\n      </div>\n      <br>\n\n\n</div>\n  </div>\n\n</div>\n\n\n\n<!-- single country view -->\n\n<div class=\"container\" *ngIf= \"countrynamedata != undefined\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-lg-12\" *ngFor = \"let obj2 of countrynamedata\" >\n   <div>\n      <img src = \"{{obj2.flag}}\" class=\"img-fluid\">\n      <br>\n      <ul class=\"list-group\">\n          <li class=\"list-group-item\" style=\"height: 10%; width: 100%;\"><h3>Name: {{obj2.name}}</h3></li>\n          <li class=\"list-group-item\" style=\"height: 10%; width: 100%;\"><h4>NativeName: {{obj2.nativeName}}</h4></li>\n          <li class=\"list-group-item\" style=\"height: 10%; width: 100%;\"><h4>Region: {{obj2.region}}</h4></li>\n          <li class=\"list-group-item\" style=\"height: 10%; width: 100%;\"><h4>SubRegion: {{obj2.subregion}}</h4></li>\n          <li class=\"list-group-item\" style=\"height: 10%; width: 100%;\"><h4>Capital: {{obj2.capital}}</h4></li>\n          <li class=\"list-group-item\" style=\"height: 10%; width: 100%;\"><h4>Area: {{obj2.area}}</h4></li>\n          <li class=\"list-group-item\" style=\"height: 10%; width: 100%;\"><h4>Gini: {{obj2.gini}}</h4></li>\n        </ul>\n\n   </div>\n   <br>\n\n \n   \n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n   <!-- button after displaying data -->\n        <div class=\"container\" >\n             <div class=\"row\">\n               <div class=\"col-12\">\n                 <button  class=\"btn btn-primary\" style=\"width: 30%;\" (click)=\"backtohome()\" *ngIf = \"countrydata != undefined\">Home</button>\n\n               </div>\n<br>\n             </div>\n        </div>"

/***/ }),

/***/ "./src/app/region/region.component.ts":
/*!********************************************!*\
  !*** ./src/app/region/region.component.ts ***!
  \********************************************/
/*! exports provided: RegionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionComponent", function() { return RegionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apicall_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apicall.service */ "./src/app/apicall.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegionComponent = /** @class */ (function () {
    function RegionComponent(apiserv, _router) {
        this.apiserv = apiserv;
        this._router = _router;
        this.Regional_zone = ["africa", "Americas", "asia", "europe", "oceania"];
        // public imagearray:any = [{"url":"assets/africa.png"},{"url":"americas.png"},
        // {"url":"assets/asia.jpg"},{"url":"europe.png"},{"url":"assets/oceania.jpg"}]
        this.imagearray = ["assets/africa.png", "assets/americas.png",
            "assets/asia.jpg", "assets/europe.png", "assets/oceania.jpg"];
    }
    RegionComponent.prototype.ngOnInit = function () {
        this._router.navigateByUrl('/');
    };
    RegionComponent.prototype.countryzone = function (reg) {
        var _this = this;
        this.apiserv.regionapi(reg).subscribe(function (data) {
            _this.countrydata = data;
            console.log(_this.countrydata);
        });
    };
    RegionComponent.prototype.backtohome = function () {
        this._router.navigateByUrl('/region');
    };
    RegionComponent.prototype.countrynamedetail = function (name) {
        var _this = this;
        this.apiserv.countryname(name).subscribe(function (data) {
            _this.countrynamedata = data;
            console.log(_this.countrynamedata);
        });
    };
    RegionComponent.prototype.languagefilter = function (languagedata) {
        var _this = this;
        this.apiserv.langfilter(languagedata).subscribe(function (data) {
            _this.languagedetails = data;
            console.log(_this.languagedetails);
        });
    };
    RegionComponent.prototype.currencyfilter = function (currencydata) {
        var _this = this;
        this.apiserv.currencyfilter(currencydata).subscribe(function (data) {
            _this.currencydetails = data;
        });
    };
    RegionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region',
            template: __webpack_require__(/*! ./region.component.html */ "./src/app/region/region.component.html"),
            styles: [__webpack_require__(/*! ./region.component.css */ "./src/app/region/region.component.css")]
        }),
        __metadata("design:paramtypes", [_apicall_service__WEBPACK_IMPORTED_MODULE_1__["ApicallService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegionComponent);
    return RegionComponent;
}());

// countryzone(reg:any)
// {
//   if(this.Regional_zone[0] == reg)
//   {
//     this.apiserv.regionapi(this.Regional_zone[0]).subscribe(
//       data=>{
//         this.countrydata = data;
//         console.log(this.countrydata)
//         return this.countrydata;
//       }
//     )
//     this._router.navigateByUrl('/home')
//   }
//   else if(this.Regional_zone[1]== reg)
//   {
//     this.apiserv.regionapi(this.Regional_zone[1]).subscribe(
//       data=>{
//         this.countrydata = data;
//         console.log(this.countrydata)
//         return this.countrydata;
//       }
//     )
//     this._router.navigateByUrl('/home')
//   }
//   else if(this.Regional_zone[2]== reg)
//   {
//     this.apiserv.regionapi(this.Regional_zone[2]).subscribe(
//       data=>{
//         this.countrydata = data;
//         console.log(this.countrydata)
//         return this.countrydata;
//       }
//     )
//     this._router.navigateByUrl('/home')
//   }
//   else if(this.Regional_zone[3]== reg)
//   {
//     this.apiserv.regionapi(this.Regional_zone[3]).subscribe(
//       data=>{
//         this.countrydata = data;
//         console.log(this.countrydata)
//         return this.countrydata;
//       }
//     )
//     this._router.navigateByUrl('/home')
//   }
//   else if(this.Regional_zone[4]== reg)
//   {
//     this.apiserv.regionapi(this.Regional_zone[4]).subscribe(
//       data=>{
//         this.countrydata = data;
//         console.log(this.countrydata)
//         return this.countrydata;
//       }
//     )
//     this._router.navigateByUrl('/home')
//   }
//   else
//   {
//     this._router.navigateByUrl('')
//   }
//   }
//   }


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ang_adv_assmt\country\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map