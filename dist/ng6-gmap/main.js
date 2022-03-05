(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div style=\"text-align:center\">\r\n    <p class=\"h1\">\r\n      Gestart Online\r\n    </p>\r\n  </div>\r\n\r\n\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div style=\"margin-left:25%\" class=\"col-md-9 col-sm-12 col-xs-12\">\r\n      <form class=\"form-inline\" #form=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <!-- input sem o auto complete -->\r\n          <!-- <input type=\"text\" class=\"form-control\" name=\"endereco\" [(ngModel)]=\"endereco\" placeholder=\"Endereço\"\r\n            required> -->\r\n          <!-- caso queira inserir o select para mudar tipo de pesquisa -->\r\n          <!-- <select class=\"form-control\" (change)=\"mudarTipoBusca($event)\">\r\n            <option value=\"geocode\">\r\n              Endereço\r\n            </option>\r\n            <option value=\"establishment\">\r\n              Estabelecimento\r\n            </option>\r\n          </select> -->\r\n          <!-- input com auto complete -->\r\n          <AutocompleteComponent (setAddress)=\"getAddress($event)\" adressType=\"{{tipoBusca}}\"></AutocompleteComponent>\r\n\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"number\" class=\"form-control\" name=\"distancia\" [(ngModel)]=\"distancia\" placeholder=\"Raio (Km)\"\r\n            required>\r\n        </div>\r\n        <!-- Valter pediu pra deixar fixo o campo qtd de pessoas por unidade -->\r\n        <!-- <div class=\"form-group\">\r\n          <input type=\"number\" class=\"form-control\" name=\"qtdPessoa\" [(ngModel)]=\"qtdPessoa\"\r\n            placeholder=\"Pessoa/Familia\" required>\r\n        </div> -->\r\n        <button type=\"button\" (click)=\"prepararEndereco()\" class=\"btn btn-success\" [disabled]=\"form.invalid\">\r\n          Buscar</button>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"text-center\">\r\n        <h3>\r\n          <div #gmap style=\"width:100%;height:400px\"></div>\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <!--  -->\r\n  <mat-expansion-panel  *ngIf=\"qtdUnidade; else elseBlock\">\r\n    <mat-expansion-panel-header style=\"text-align:center\">\r\n      <mat-panel-title   >\r\n            Condominios: {{markers.length}} | Unidades: {{qtdUnidade}} | Publico Alvo: {{qtdPublico}}\r\n      \r\n        </mat-panel-title>\r\n    \r\n    </mat-expansion-panel-header>\r\n    <div>\r\n\r\n\r\n      <table *ngIf=\"qtdUnidade; else elseBlock\" class=\"table table-hover mb-0\" style=\"font-size: 0.875em;\">\r\n        <tr>\r\n          <th>Cod</th>\r\n          <th>Nome</th>\r\n          <th>Distancia</th>\r\n          <th>Unidade</th>\r\n          <th>Publico</th>\r\n  \r\n        </tr>\r\n        <tr *ngFor=\"let cond of locations\">\r\n          <td>{{cond.CODCON}}</td>\r\n          <td>{{cond.NOMCON}}</td>\r\n          <td>{{cond.DISTANCIA | number : '1.2-2'}}</td>\r\n          <td>{{cond.QTDE_UNIDADES}}</td>\r\n          <td>{{cond.QTDE_UNIDADES * qtdPessoa}}</td>\r\n  \r\n  \r\n        </tr>\r\n      </table>\r\n    </div> \r\n   </mat-expansion-panel>\r\n\r\n</div>\r\n");

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button,\r\ninput {\r\n  margin-left: 10px\r\n}\r\n\r\n.mat-expansion-panel-header-title{\r\n  display: block;\r\n}\r\n\r\n.row{\r\n  display: block;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjOztBQUVoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLFxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHhcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucm93e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_google_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/google-service.service */ "./src/app/service/google-service.service.ts");
/* harmony import */ var _service_gestart_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/gestart-services.service */ "./src/app/service/gestart-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AppComponent = /** @class */ (function () {
    function AppComponent(googleMapsService, gestartService) {
        this.googleMapsService = googleMapsService;
        this.gestartService = gestartService;
        this.qtdPessoa = 3.5;
        this.locations = [];
        this.tipoBusca = "geocode";
        this.markers = [];
        this.markerTypes = [
            {
                text: "Parking",
                value: "parking_lot_maps.png",
            },
        ];
        this.selectedMarkerType = "";
        this.isHidden = false;
        this.switchValue = "false";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.pegarLocalizacaoAtual();
    };
    AppComponent.prototype.getAddress = function (place) {
        console.log(place["formatted_address"]);
        this.endereco = place["formatted_address"];
        /* this.address = place["formatted_address"];
        this.phone = this.getPhone(place);
        this.formattedAddress = place["formatted_address"];
        this.zone.run(() => (this.formattedAddress = place["formatted_address"]));*/
    };
    AppComponent.prototype.mudarTipoBusca = function (e) {
        //console.log(e.target.value);
        this.endereco = "";
        this.tipoBusca = e.target.value;
        this.googleMapsService.tipoDeVisualizacao.next(this.tipoBusca);
    };
    AppComponent.prototype.pegarLocalizacaoAtual = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            });
        }
        else {
            console.log("User not allow");
        }
    };
    AppComponent.prototype.prepararEndereco = function () {
        var _this = this;
        this.clearMarkers();
        this.novo_endereco = this.endereco.split(" ").join("+");
        this.googleMapsService
            .converterEndereco(this.novo_endereco)
            .subscribe(function (data) {
            // console.log(data);
            _this.latitude = parseFloat(data["results"][0]["geometry"]["location"]["lat"].toString());
            _this.longitude = parseFloat(data["results"][0]["geometry"]["location"]["lng"].toString());
            _this.condominiosRaio();
        });
    };
    AppComponent.prototype.condominiosRaio = function () {
        var _this = this;
        this.gestartService
            .buscarCondominios(this.latitude, this.longitude, this.distancia)
            .subscribe(function (data) {
            _this.addListaCondominios(data);
            _this.setCenter();
        });
    };
    AppComponent.prototype.addListaCondominios = function (data) {
        this.locations = [];
        this.qtdUnidade = 0;
        for (var i = 0; i < data.length; i++) {
            this.qtdUnidade += parseInt(data[i]["QTDE_UNIDADES"]);
            var location_1 = new google.maps.LatLng(data[i]["LAT"], data[i]["LNG"]);
            console.log(data);
            this.locations.push(data[i]);
            this.addMarker(location_1);
        }
        this.qtdPublico = this.qtdPessoa * this.qtdUnidade;
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(-3.747452, -38.510713),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    AppComponent.prototype.addMarker = function (location) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
        });
        /* var circle = new google.maps.Circle({
           strokeColor: "#1E90FF", //cor da borda
           center: location,
           strokeOpacity: (this.qtdUnidade / 1000),
           fillOpacity: .3,
           strokeWeight: 2,
           map: this.map,
           radius: 400,    // 10 miles in metres Math.sqrt(this.qtdUnidade) * 100
           fillColor: '#FFD700'
         });
         circle.bindTo('center', marker, 'position');*/
        this.markers.push(marker);
    };
    AppComponent.prototype.setCenter = function () {
        this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
        var location = new google.maps.LatLng(this.latitude, this.longitude);
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: "Você!",
            icon: "assets/logo.png",
            animation: google.maps.Animation.BOUNCE,
        });
        /*  var circle = new google.maps.Circle({
            strokeColor: "#1E90FF", //cor da borda
            center: location,
            strokeOpacity: (this.qtdUnidade / 1000),
            fillOpacity: .3,
            strokeWeight: 2,
            map: this.map,
            radius: Math.sqrt(citymap[city].population) * 100,    // 10 miles in metres Math.sqrt(this.qtdUnidade) * 100
            fillColor: '#FFD700',
          });
          circle.bindTo('center', marker, 'position');
          console.log(this.distancia * 0.62137)*/
        //this.addMarker(location);
    };
    AppComponent.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    /* addMaker() {
      for (let i = 0; i < this.locations.length; i++) {
        console.log(this.locations[i]);
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            parseFloat(this.locations[i]["LAT"].toString()),
            parseFloat(this.locations[i]["LNG"].toString())
          ),
          title:
            this.locations[i]["NOMCON"].toString() +
            "|" +
            this.locations[i]["QTDE_UNIDADES"].toString(),
          map: this.map,
          icon: "assets/logo.png",
        });
      }
    }*/
    /* toggleMap() {
       this.isHidden = !this.isHidden;
  
       this.gmapElement.nativeElement.hidden = this.isHidden;
     }*/
    AppComponent.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _service_google_service_service__WEBPACK_IMPORTED_MODULE_1__["GoogleServiceService"] },
        { type: _service_gestart_services_service__WEBPACK_IMPORTED_MODULE_2__["GestartServicesService"] }
    ]; };
    AppComponent.propDecorators = {
        gmapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["gmap", { static: true },] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_google_service_service__WEBPACK_IMPORTED_MODULE_1__["GoogleServiceService"],
            _service_gestart_services_service__WEBPACK_IMPORTED_MODULE_2__["GestartServicesService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _google_places_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-places.component */ "./src/app/google-places.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _google_places_component__WEBPACK_IMPORTED_MODULE_5__["AutocompleteComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"],
            ],
            providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_7__["en_US"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/google-places.component.ts":
/*!********************************************!*\
  !*** ./src/app/google-places.component.ts ***!
  \********************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_google_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/google-service.service */ "./src/app/service/google-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent(googleMapsService) {
        this.googleMapsService = googleMapsService;
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AutocompleteComponent.prototype.ngOnInit = function () { };
    AutocompleteComponent.prototype.ngAfterViewInit = function () {
        // this.getPlaceAutocomplete();
        this.setarTipoPesquisa("establishment");
        this.setarTipoPesquisa("geocode");
        // por enquanto nao preciso dessa função, sendo utilizada apenas caso fosse usar BehaviorSubject
        //this.mudarTipodeBusca();
    };
    AutocompleteComponent.prototype.setarTipoPesquisa = function (tipo) {
        this.adressType = tipo;
        this.getPlaceAutocomplete();
    };
    //usando BehaviorSubject para alterar tipo de pesquisa atraves de um select
    AutocompleteComponent.prototype.mudarTipodeBusca = function () {
        var _this = this;
        this.googleMapsService.tipoDeVisualizacao.subscribe(function (value) {
            _this.adressType = value;
            _this.getPlaceAutocomplete();
        });
    };
    AutocompleteComponent.prototype.getPlaceAutocomplete = function () {
        var _this = this;
        console.log("entrou aqui--" + this.adressType);
        var autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            componentRestrictions: { country: "BR" },
            types: [this.adressType],
        });
        google.maps.event.addListener(autocomplete, "place_changed", function () {
            var place = autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    };
    AutocompleteComponent.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    AutocompleteComponent.ctorParameters = function () { return [
        { type: _service_google_service_service__WEBPACK_IMPORTED_MODULE_1__["GoogleServiceService"] }
    ]; };
    AutocompleteComponent.propDecorators = {
        adressType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        setAddress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        addresstext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["addresstext", { static: true },] }]
    };
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "AutocompleteComponent",
            template: "\n    <input\n      class=\"form-control\"\n      name=\"endereco\"\n      type=\"text\"\n      [(ngModel)]=\"autocompleteInput\"\n      #addresstext\n      style=\"padding: 12px 10px; border: 1px solid #ccc; width: 250px\"\n    />\n  ",
        }),
        __metadata("design:paramtypes", [_service_google_service_service__WEBPACK_IMPORTED_MODULE_1__["GoogleServiceService"]])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/service/gestart-services.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/gestart-services.service.ts ***!
  \*****************************************************/
/*! exports provided: GestartServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestartServicesService", function() { return GestartServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GestartServicesService = /** @class */ (function () {
    function GestartServicesService(http) {
        this.http = http;
        this.API = "http://api.gestartapp.com.br:8080/geo/condominios/";
        this.KEY = "00269441-01A8-42F8-9A93-87A1EDD32C11/";
    }
    GestartServicesService.prototype.buscarCondominios = function (lat, lng, raio) {
        return this.http.get(this.API + this.KEY + lat + "/" + lng + "/" + raio);
    };
    GestartServicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GestartServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GestartServicesService);
    return GestartServicesService;
}());



/***/ }),

/***/ "./src/app/service/google-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/google-service.service.ts ***!
  \***************************************************/
/*! exports provided: GoogleServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleServiceService", function() { return GoogleServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleServiceService = /** @class */ (function () {
    function GoogleServiceService(http) {
        this.http = http;
        this.apiGeoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        this.KEY = "&key=AIzaSyAakgmLOzLaXeB5MxlBrkzJsxnvSwS_XuQ";
        this.tipoDeVisualizacao = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("geocode");
    }
    GoogleServiceService.prototype.converterEndereco = function (endereco) {
        return this.http.get(this.apiGeoCode + endereco + this.KEY);
    };
    GoogleServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GoogleServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GoogleServiceService);
    return GoogleServiceService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! C:\Users\wenderson.silveira\Documents\Getart\GestartMaps\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map