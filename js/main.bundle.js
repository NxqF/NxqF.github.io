webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-homepage></app-homepage>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../../_@angular_platform-browser@5.0.3@@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__homepage_homepage_component__["a" /* HomepageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#avatar{\r\n    margin-top:2rem;\r\n}\r\n#avatar img,#card img{\r\n    width: 20%;\r\n}\r\n.center{\r\n    text-align: center;\r\n}\r\n#name{\r\n    color:white;\r\n    font-weight: bold;\r\n    font-size: 2rem;\r\n}\r\n#subcard{\r\n    color:white;\r\n    font-size: .6rem;\r\n    font-weight: lighter;\r\n}\r\n#location{\r\n    margin-top: .5rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width:60%;\r\n    height:1.4rem;\r\n    background-color:#ff000000;\r\n    border-radius: .1rem;\r\n    box-shadow:-1px 0px 3px white, \r\n    0px -1px 3px white,  \r\n    1px 0px 3px white, \r\n    0px 1px 3px white;\r\n    text-align: center;\r\n    padding: .8rem\r\n}\r\n#location:hover{\r\n    box-shadow:-1px 0px 10px #fff,  \r\n    0px -1px 10px #fff,\r\n    1px 0px 10px #fff,  \r\n    0px 1px 10px #fff;\r\n}\r\n#location span{\r\n    width: 48%;\r\n    display: inline-block;\r\n}\r\n#location a{\r\n    color:white;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n}\r\n#project{\r\n    background-color: #f6f1f2b0;\r\n    margin-top:3rem;\r\n}\r\n#title{\r\n    text-align: center;\r\n    padding:1rem;\r\n}\r\n#title img{\r\n    margin: 5px 2rem;\r\n    width: 25%;\r\n}\r\n\r\n.container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 50% 50%;\r\n        grid-template-columns: 50% 50%;\r\n    /* grid-template-rows: 25% 25% 25% 25%; */\r\n    /* grid-template-rows: 25% 100px auto; */\r\n}\r\n.container>div{\r\n    padding:1rem;\r\n    margin: 1rem;\r\n    border-radius: 1rem;\r\n    color:white;\r\n}\r\n.container>div:hover{\r\n    box-shadow:-1px 0px 10px #909090,   \r\n    0px -1px 10px #909090, \r\n    1px 0px 10px #909090, \r\n    0px 1px 10px #909090;\r\n}\r\n.container img{\r\n    width: 100%\r\n}\r\n.container h1{\r\n    margin-top:1rem;\r\n}\r\n.container p{\r\n    font-weight: lighter;\r\n    margin-top:1rem;\r\n    font-size: 80%;\r\n}\r\n#itema{\r\n    -ms-grid-column: 1;\r\n        grid-column: 1;\r\n    -ms-grid-row-span:3;\r\n    -ms-grid-row:1;\r\n        grid-row:1/ span 3;\r\n    background-image: url(https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/rbg.png);\r\n}\r\n#itemb{\r\n    -ms-grid-column: 2;\r\n        grid-column: 2;\r\n    -ms-grid-row-span:2;\r\n    -ms-grid-row:1;\r\n        grid-row:1 / span 2;\r\n    background-image: url(https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/bbg.png);\r\n}\r\n#itemc{\r\n    -ms-grid-column: 2;\r\n        grid-column: 2;\r\n    -ms-grid-row-span:4;\r\n    -ms-grid-row:3;\r\n        grid-row:3 / span 4;\r\n    background-image: url(https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/bbg.png);\r\n}\r\n#itemd .imgcenter{\r\n    margin-top: 3rem;\r\n}\r\n#itemd{\r\n    -ms-grid-column: 1;\r\n        grid-column: 1;\r\n    -ms-grid-row-span:5;\r\n    -ms-grid-row:4;\r\n        grid-row:4 / span 5;\r\n    background-image: url(https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/pbg.png);\r\n}\r\n@media screen and (min-width: 1080px) {\r\n    .container{\r\n        -ms-grid-columns: 25% 25% 25% 25%;\r\n            grid-template-columns: 25% 25% 25% 25%;\r\n        font-size:50%;\r\n    }\r\n    .container>div{\r\n        padding:1rem;\r\n        margin: .5rem;\r\n        border-radius: .5rem;\r\n        color:white;\r\n    }\r\n    #itema{\r\n        -ms-grid-column: 1;\r\n            grid-column: 1;\r\n        -ms-grid-row-span:3;\r\n        -ms-grid-row:1;\r\n            grid-row:1/ span 3;\r\n    }\r\n    #itemb{\r\n        -ms-grid-column: 2;\r\n            grid-column: 2;\r\n        -ms-grid-row-span:3;\r\n        -ms-grid-row:1;\r\n            grid-row:1 / span 3;\r\n    }\r\n    #itemc{\r\n        -ms-grid-column: 3;\r\n            grid-column: 3;\r\n        -ms-grid-row-span:2;\r\n        -ms-grid-row:1;\r\n            grid-row:1 / span 2;\r\n    }\r\n    #itemd{\r\n        -ms-grid-column: 4;\r\n            grid-column: 4;\r\n        -ms-grid-row-span:2;\r\n        -ms-grid-row:1;\r\n            grid-row:1 / span 2;\r\n    }\r\n    #itemd .imgcenter{\r\n        margin-top: 1rem;\r\n    }\r\n}\r\n@media screen and (min-width: 1440px) and (max-width:11920px){\r\n    footer{\r\n        height: 2rem !important;\r\n    }\r\n    footer img{\r\n        height: 2rem !important;\r\n    }\r\n}\r\n@media screen and (min-width: 1080px) and (max-width:1440px){\r\n    footer{\r\n        height: 3rem !important;\r\n    }\r\n    footer img{\r\n        height: 3rem !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n    .container{\r\n        display: block;\r\n    }\r\n    .imgcenter{\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 50%;\r\n    }\r\n    #itemd .imgcenter{\r\n        margin-top: 1rem;\r\n    }\r\n}\r\nfooter{\r\n    background-color: #2e2e2e;\r\n    height: 5rem;\r\n    width: 100%;\r\n    border-radius:.5rem .5rem 0 0;\r\n    text-align: center;\r\n    /* padding-left:2rem; */\r\n}\r\nfooter p{\r\n    color: white;\r\n}\r\nfooter img{\r\n    height: 5rem;\r\n}\r\nimg.middle {vertical-align:middle}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <!-- <div id=\"topbanner\"></div> -->\n</header>\n\n<article>\n  <section>\n    <div id='avatar' class=\"center\">\n      <img src=\"https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/avatar.png\" alt=\"\">\n    </div>\n    <div id=\"name\" class=\"center\">\n      <p>徐奇锋</p>\n    </div>\n    <div id=\"card\" class=\"center\">\n      <img src=\"https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/card.png\" alt=\"\">\n    </div>\n    <div id=\"subcard\" class=\"center\">\n      <p>keep study,keep coding</p>\n    </div>\n    <div id=\"location\">\n      <span>\n          <a class=\"a\" (click)=\"githubPage(0)\">>>我的github</a>\n        </span>\n      <span>\n            <a class=\"b\" (click)=\"githubPage(1)\">>>此项目地址</a>\n        </span>\n    </div>\n  </section>\n\n  <section id=\"project\">\n    <div id=\"title\">\n      <img src=\"https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/lineleft.png\" alt=\"\">\n      <span>项目介绍</span>\n      <img src=\"https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/lineright.png\" alt=\"\">\n    </div>\n    <div class=\"container\">\n      <div id=\"itema\" (click)=\"githubPage(2)\">\n        <div class=\"imgcenter\">\n          <img src=\"https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/ionic2.png\" alt=\"\">\n        </div>\n        <h1>imall.v2 -- build on IONIC2</h1>\n        <p>imall的改进版，ionic2的UI组件更加丰富，页面切换更加人性化，添加了购买功能及信息查看，上拉数据加载，客服咨询功能，用户登录注册等基本功能。\n        </p>\n        <P>>>github地址</P>\n      </div>\n      <div id=\"itemb\" (click)=\"githubPage(3)\">\n        <div class=\"imgcenter\">\n          <img src=\"https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/ionic1.png\" alt=\"\">\n        </div>\n        <h1>imall -- build on IONIC1</h1>\n        <p>项目页面由ionic1的UI组件搭建，模板仿天猫，静态页面，仅用于测试ionic1框架，ionic1的路由比2 要繁杂，搜索框路由可测试。\n        </p>\n        <P>>>github地址</P>\n      </div>\n      <div id=\"itemd\" (click)=\"githubPage(5)\">\n        <div class=\"imgcenter\">\n          <img src=\"https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/jquery.png\" alt=\"\">\n        </div>\n        <h1>PSCN -- build on JQUERY</h1>\n        <p>个人第一个作品，移动端试水作，使用了jquery库，实现了简单的幻灯片，tabs导航等功能。\n        </p>\n        <P>>>github地址</P>\n      </div>\n      <div id=\"itemc\" (click)=\"githubPage(4)\">\n        <div class=\"imgcenter\">\n          <img src=\"http://nodejs.cn/static/images/logo.svg\" alt=\"\">\n        </div>\n        <h1>数据API -- build on EXPRESS</h1>\n        <p>imall.v2的商城后台，由Node.js进行实现，通过Express框架实现后端的REST接口，并以json的形式进行输出,结合MongoDB做数据存储。\n        </p>\n        <P>>>github地址</P>\n      </div>\n    </div>\n  </section>\n\n</article>\n\n<footer>\n  <p>\n    <img class=\"middle\" border=\"0\" src=\"https://raw.githubusercontent.com/NxqF/test/master/pic/homepage/footer.jpg\" />Email：qf2450792123@gmail.com\n  </p>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
        this.pagelist = [
            'https://github.com/nxqf',
            'https://github.com/NxqF/NxqF.github.io',
            'https://github.com/NxqF/IMall2',
            'https://github.com/NxqF/IMall1',
            'https://github.com/NxqF/data-api',
            'https://github.com/NxqF/pscn'
        ];
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.githubPage = function (page) {
        window.open(this.pagelist[page]);
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@5.0.3@@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@5.0.3@@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map