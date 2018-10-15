/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/router */ \"./src/scripts/utils/router.js\");\n/* harmony import */ var _controllers_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/home */ \"./src/scripts/controllers/home.js\");\n/* harmony import */ var _controllers_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/main */ \"./src/scripts/controllers/main.js\");\n/* harmony import */ var _controllers_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/location */ \"./src/scripts/controllers/location.js\");\n/* harmony import */ var _controllers_classify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/classify */ \"./src/scripts/controllers/classify.js\");\n/* harmony import */ var _controllers_member__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/member */ \"./src/scripts/controllers/member.js\");\n/* harmony import */ var _controllers_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/cart */ \"./src/scripts/controllers/cart.js\");\n/* harmony import */ var _controllers_mine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/mine */ \"./src/scripts/controllers/mine.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_controllers_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\nconst router = new _utils_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nrouter.init();  \r\nrouter.route(\"#main\",_controllers_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render);\r\nrouter.route(\"#classify\",_controllers_classify__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render);\r\nrouter.route(\"#member\",_controllers_member__WEBPACK_IMPORTED_MODULE_5__[\"default\"].render);\r\nrouter.route(\"#cart\",_controllers_cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"].render);\r\nrouter.route(\"#mine\",_controllers_mine__WEBPACK_IMPORTED_MODULE_7__[\"default\"].render);\r\n\r\n_controllers_location__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render();\r\n\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/controllers/cart.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/cart.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_cart_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/cart.html */ \"./src/scripts/views/cart.html\");\n/* harmony import */ var _views_cart_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_cart_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cart */ \"./src/scripts/models/cart.js\");\n/* harmony import */ var _models_cart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_cart__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst render = ()=>{\r\n    $(\".main\").html(_views_cart_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n    allSelect();\r\n    singleSelect();\r\n    operateNum();\r\n}\r\n\r\n//商品渲染?\r\n\r\n\r\n// 全选\r\nconst allSelect = ()=>{\r\n    $(\".all-Select\").on(\"tap\",function(){\r\n        if($(this).attr(\"select\") == \"true\"){//全都不选中\r\n            $(this).removeClass(\"active\").attr(\"select\",false);\r\n            $(\".single-Select\").removeClass(\"active\").attr(\"select\",false);\r\n            $(\".total-price\").text(\"0.00\");\r\n            $(\".has-selected button\").removeClass(\"ok-select\");\r\n\r\n        }else{//全部选中\r\n            $(this).addClass(\"active\").attr(\"select\",true);\r\n            $(\".single-Select\").addClass(\"active\").attr(\"select\",true);\r\n            var totalPrice = 0;;\r\n            $(\".single-Select\").each(function(i){\r\n                var price = Number($(this).next().children().eq(1).text().slice(1));\r\n                var numVal = Number($(this).next().next().children().eq(1).text());\r\n                totalPrice += price*numVal;\r\n            })\r\n            totalPrice = totalPrice.toFixed(2);//保留2位小数\r\n            $(\".total-price\").text(\"￥\"+totalPrice);\r\n            $(\".has-selected button\").addClass(\"ok-select\");\r\n        }\r\n    })\r\n}\r\n\r\n//反选\r\nconst singleSelect = ()=>{\r\n    $(\".single-Select\").on(\"tap\",function(){\r\n        if($(this).attr(\"select\") == \"true\"){\r\n            $(this).removeClass(\"active\").attr(\"select\",false);\r\n            $(\".all-Select\").removeClass(\"active\").attr(\"select\",false);\r\n            //取消选中时，改变总价格\r\n            var price = Number($(this).next().children().eq(1).text().slice(1));\r\n            var numVal = Number($(this).next().next().children().eq(1).text());\r\n            var totalPrice = Number($(\".total-price\").text().slice(1));\r\n            totalPrice -= price*numVal;\r\n            totalPrice = totalPrice.toFixed(2);\r\n            $(\".total-price\").text(\"￥\"+totalPrice);\r\n            //设置选好了的样式\r\n            let flag = true;\r\n            $(\".single-Select\").each(function(i){\r\n                if($(this).attr(\"select\") == \"true\"){\r\n                    flag = false;\r\n                }\r\n            })\r\n            if(flag){\r\n                $(\".has-selected button\").removeClass(\"ok-select\");\r\n            }\r\n        }else{\r\n            $(this).addClass(\"active\").attr(\"select\",true);\r\n            let flag = true;\r\n            //通过反选来控制全选按钮\r\n            $(\".single-Select\").each(function(i){\r\n                if($(this).attr(\"select\") != \"true\"){\r\n                    flag = false;\r\n                }\r\n            })\r\n            if(flag){\r\n                $(\".all-Select\").addClass(\"active\").attr(\"select\",true);\r\n            }\r\n            //选中状态下,改变总价格\r\n            var price = Number($(this).next().children().eq(1).text().slice(1));\r\n            var numVal = Number($(this).next().next().children().eq(1).text());\r\n            var totalPrice = Number($(\".total-price\").text().slice(1));\r\n            totalPrice += price*numVal;\r\n            totalPrice = totalPrice.toFixed(2);\r\n            $(\".total-price\").text(\"￥\"+totalPrice);\r\n            $(\".has-selected button\").addClass(\"ok-select\");\r\n        }\r\n    })\r\n}\r\n\r\n// 商品加减\r\nconst operateNum = ()=>{\r\n    $(\".sub\").on(\"tap\",function(){\r\n        var numEl = $(this).next();\r\n        var numVal = Number($(this).next().text());\r\n        if(numVal<=1){\r\n            // 当前数量为1提示是否要进行删除?\r\n            // var a = layer.open({\r\n            //     title: '添加提示',\r\n            //     content: \"成功添加商品\"\r\n            // });\r\n            // console.log(a);\r\n            // if(localStorage.length<=1){\r\n            //     $(\".pro-list\").css(\"display\",\"none\");\r\n            //     $(\".has-selected\").css(\"display\",\"none\");\r\n            //     $(\".no-product\").css(\"display\",\"flex\");\r\n            // }\r\n        }else{\r\n            numVal--;\r\n            numEl.text(numVal);\r\n            //选中状态下数量加减还要对总价进行相应改变\r\n            if($(this).parent().prev().prev().attr(\"select\") == \"true\"){\r\n                var price = Number($(this).parent().prev().children().eq(1).text().slice(1));\r\n                var totalPrice = Number($(\".total-price\").text().slice(1));\r\n                totalPrice -= price;\r\n                totalPrice = totalPrice.toFixed(2);\r\n                $(\".total-price\").text(\"￥\"+totalPrice);\r\n            }\r\n            //对应的商品数量在localstorage里还进行减操作?\r\n            // var id = $(this).next().attr(\"data-id\");\r\n            // localStorage[id] = --Number(localStorage[id]);\r\n        }\r\n        \r\n    })\r\n    $(\".add\").on(\"tap\",function(){\r\n        var numEl = $(this).prev();\r\n        var numVal = Number($(this).prev().text());\r\n        numVal++;\r\n        numEl.text(numVal);\r\n        //选中状态下数量加减还要对总价进行相应改变\r\n        if($(this).parent().prev().prev().attr(\"select\") == \"true\"){\r\n            var price = Number($(this).parent().prev().children().eq(1).text().slice(1));\r\n            var totalPrice = Number($(\".total-price\").text().slice(1));\r\n            totalPrice += price;\r\n            totalPrice = totalPrice.toFixed(2);\r\n            $(\".total-price\").text(\"￥\"+totalPrice);\r\n        }\r\n        //对应的商品数量在localstorage里还进行加操作?\r\n        // var id = $(this).next().attr(\"data-id\");\r\n        // localStorage[id] = ++Number(localStorage[id]);\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/cart.js?");

/***/ }),

/***/ "./src/scripts/controllers/classify.js":
/*!*********************************************!*\
  !*** ./src/scripts/controllers/classify.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_classify_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/classify.html */ \"./src/scripts/views/classify.html\");\n/* harmony import */ var _views_classify_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_classify_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst render = ()=>{\r\n    $(\".main\").html(_views_classify_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/classify.js?");

/***/ }),

/***/ "./src/scripts/controllers/home.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/home.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.html */ \"./src/scripts/views/home.html\");\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_home_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst render = () =>{\r\n    document.getElementById(\"root\").innerHTML = _views_home_html__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n    changeTab();\r\n}\r\n\r\n// //点击切换\r\nconst changeTab = ()=>{\r\n   \r\n    $(\".nav>li\").on(\"tap\",function(){\r\n        let hashs = [\"#main\",\"#classify\",\"#member\",\"#cart\",\"#mine\"];\r\n        // 点击到不同的按钮时，将哈希值进行相应的赋值\r\n        location.hash = hashs[$(this).index()];\r\n        $(this).addClass('active').siblings().removeClass(\"active\");\r\n    })\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\r\n\n\n//# sourceURL=webpack:///./src/scripts/controllers/home.js?");

/***/ }),

/***/ "./src/scripts/controllers/location.js":
/*!*********************************************!*\
  !*** ./src/scripts/controllers/location.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\nconst render = ()=>{\r\n    // $(\".back-main\").on(\"tap\",function(){\r\n    //     console.log(1);\r\n    //     location.hash = \"#main\";\r\n    // })\r\n    $(\".back-main\").on(\"tap\",function(){\r\n        console.log(1);\r\n    })\r\n    var a =  $(\".back-main\");\r\n    console.log(a);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/location.js?");

/***/ }),

/***/ "./src/scripts/controllers/main.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/main.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_main_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/main.html */ \"./src/scripts/views/main.html\");\n/* harmony import */ var _views_main_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_main_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/main */ \"./src/scripts/models/main.js\");\n/* harmony import */ var _views_main_menu_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/main-menu.html */ \"./src/scripts/views/main-menu.html\");\n/* harmony import */ var _views_main_menu_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_main_menu_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_main_market_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/main-market.html */ \"./src/scripts/views/main-market.html\");\n/* harmony import */ var _views_main_market_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_main_market_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _views_location_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/location.html */ \"./src/scripts/views/location.html\");\n/* harmony import */ var _views_location_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_location_html__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst render =  ()=>{\r\n    $(\".main\").html(_views_main_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n    banner();\r\n    change_title();\r\n    menu();\r\n    // promotion();\r\n    theme();\r\n    market();\r\n}\r\n\r\n//超市优选\r\nconst market = async ()=>{\r\n    //9+10\r\n    var result = (await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[9].dataList;\r\n    $(\".supermarket>img\").attr(\"src\",result[0].imageUrl);\r\n    var data = \"\";\r\n    for(var i=10; i<=12; i++){\r\n        data = [...data,...(await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[i].dataList];\r\n        let template = Handlebars.compile(_views_main_market_html__WEBPACK_IMPORTED_MODULE_3___default.a);\r\n        let html = template({data});\r\n        $(\".market-list\").html(html);\r\n    }\r\n    \r\n}\r\n\r\n//主题乐园\r\nconst theme = async ()=>{\r\n    var data1 =  (await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[6].dataList;\r\n    var data2 =  (await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[7].dataList;\r\n    $(\".theme>img\").attr(\"src\",data1[0].imageUrl);\r\n    // console.log($(\".theme-img img\"))\r\n    $(\".theme-img>a>img\").attr(\"src\",data2[0].imageUrl).parent().attr(\"href\",data2[0].resource);\r\n    $(\".theme-img>div>a>img\").each(function(i){\r\n        $(this).attr(\"src\",data2[i+1].imageUrl).parent().attr(\"href\",data2[i+1].resource);\r\n    })\r\n}\r\n\r\n// 大促\r\n// const promotion = async ()=>{\r\n//     var data = (await mainModel.totalData()).data.pageModules[6].dataList;\r\n//     $(\".promotion img\").each(function(i){\r\n//         $(this).attr(\"src\",data[i].imageUrl).parent().attr(\"href\",data[i].resource);\r\n//     })\r\n// }\r\n\r\n//功能菜单区\r\nconst menu = async ()=>{\r\n    var data = \"\";\r\n    for(var i=2; i<=3; i++){\r\n        data = [...data,...(await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[i].dataList]\r\n        let template = Handlebars.compile(_views_main_menu_html__WEBPACK_IMPORTED_MODULE_2___default.a);\r\n        let html = template({data});\r\n        $(\".menu\").html(html);\r\n    }\r\n}\r\n\r\n//轮播图渲染\r\nconst banner = async ()=>{\r\n    var result = await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].banner_title();\r\n    $(\".banner-title img:first\").attr(\"src\",result.data[0].business[0].label);\r\n    $(\".banner-title img:last\").attr(\"src\",result.data[0].business[1].label);\r\n    $(\".banner-title span:first\").text(result.data[0].business[0].name);\r\n    $(\".banner-title span:last\").text(result.data[0].business[1].name);\r\n    //图片及对应的超链接设置\r\n    var data = (await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[0].dataList;\r\n    $(\".swiper-wrapper img\").each(function(i){\r\n        $(this).attr(\"src\",data[i].imageUrl).parent().attr(\"href\",data[i].resource);\r\n    })\r\n    // 定义swiper\r\n    var mySwiper = new Swiper ('.swiper-container', {\r\n        direction: 'horizontal',\r\n        loop: true,\r\n        autoplay: true,\r\n        autoplay:{\r\n            disableOnInteraction: false\r\n        },\r\n        // 如果需要分页器\r\n        pagination: {\r\n        el: '.swiper-pagination',\r\n        clickable :true,\r\n        },\r\n        navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev'\r\n        },\r\n    })\r\n}\r\n\r\n//切换轮播图上的标题\r\nconst change_title = ()=>{\r\n    $(\".banner-title div\").on(\"tap\",function(){\r\n        $(this).addClass(\"active\").siblings().removeClass(\"active\");\r\n    })\r\n    $(\".location\").on(\"tap\",function(){\r\n        $(\".home-container\").css(\"display\",\"none\");\r\n        $(\".locate\").html(_views_location_html__WEBPACK_IMPORTED_MODULE_4___default.a).css(\"display\",\"flex\");\r\n        location.hash = \"#location\";\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/main.js?");

/***/ }),

/***/ "./src/scripts/controllers/member.js":
/*!*******************************************!*\
  !*** ./src/scripts/controllers/member.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_member_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/member.html */ \"./src/scripts/views/member.html\");\n/* harmony import */ var _views_member_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_member_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst render = ()=>{\r\n    $(\".main\").html(_views_member_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/member.js?");

/***/ }),

/***/ "./src/scripts/controllers/mine.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/mine.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_mine_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/mine.html */ \"./src/scripts/views/mine.html\");\n/* harmony import */ var _views_mine_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_mine_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst render = ()=>{\r\n    $(\".main\").html(_views_mine_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/mine.js?");

/***/ }),

/***/ "./src/scripts/models/cart.js":
/*!************************************!*\
  !*** ./src/scripts/models/cart.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/scripts/models/cart.js?");

/***/ }),

/***/ "./src/scripts/models/main.js":
/*!************************************!*\
  !*** ./src/scripts/models/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst banner_title = ()=>{\r\n    return $.ajax({\r\n        type:\"get\",\r\n        url:\"/business?param=%7B%22longitude%22%3A%22116.23359%22%2C%22latitude%22%3A%2240.22055%22%7D&token=79FA24EB835804A901C7C22766EF54921E600234D3A88A988649F9C58F8827827E6D6F96946D61A5AC6A4EACA9F4847EB8732D40897F5DA39C7881119283B2C0404F3A2964BECBBAD0472F3DC41F6726B00137562922888947C794A2F2D117EAADB7F802527615B88EB992E710BDF384A37D2FACA9D8E272448C3DCFA22F8B79&source=2&tempid=C82C19E4891000025DF9C4D0109A18AF&pubParam=%7B%7D&_=153935098095\",\r\n        success:(result)=>{\r\n            return result;\r\n        }\r\n    });\r\n}\r\n\r\n// 首页总数据数据获取\r\nconst totalData = ()=>{\r\n    return $.ajax({\r\n        type:\"get\",\r\n        url:\"/businessIndex?param=%7B%22index%22%3A0%2C%22currentPage%22%3A1%2C%22reqUrl%22%3A%22https%3A%2F%2Fcmsapi.dmall.com%2Fapp%2Fweb%2Fjson%2F1%2F10437%22%2C%22pairs%22%3A%221-0-10437%22%2C%22code%22%3A%221%22%2C%22networkType%22%3A2%7D&token=79FA24EB835804A901C7C22766EF54921E600234D3A88A988649F9C58F8827827E6D6F96946D61A5AC6A4EACA9F4847EB8732D40897F5DA39C7881119283B2C0404F3A2964BECBBAD0472F3DC41F6726B00137562922888947C794A2F2D117EAADB7F802527615B88EB992E710BDF384A37D2FACA9D8E272448C3DCFA22F8B79&source=2&tempid=C82C19E4891000025DF9C4D0109A18AF&pubParam=%7B%7D\",\r\n        success:(result)=>{\r\n            return result;\r\n        }\r\n    });\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    banner_title,\r\n    totalData\r\n});\n\n//# sourceURL=webpack:///./src/scripts/models/main.js?");

/***/ }),

/***/ "./src/scripts/utils/router.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/router.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Router(){\r\n    //定义一个对象存储路由值和对应的回调函数\r\n    this.routes = {};\r\n    this.currentHash = \"\";\r\n}\r\n\r\n//默认的回调函数\r\nvar noop = function(){};\r\n\r\n//路由注册\r\nRouter.prototype.route = function(hash,cb){\r\n    this.currentHash = hash;\r\n    this.routes[this.currentHash] = cb || noop;\r\n}\r\n\r\n//路由刷新\r\nRouter.prototype.refresh = function(){\r\n    if(location.hash != \"##\"){\r\n        let hash = location.hash || \"#main\";\r\n        this.currentHash = hash;\r\n        this.routes[this.currentHash]();\r\n        this.switchTabbar();\r\n        $(\".home-container\").css(\"display\",\"flex\");\r\n        $(\".locate\").css(\"display\",\"none\");\r\n    }\r\n    \r\n}\r\n\r\n//switchTabbar\r\nRouter.prototype.switchTabbar = function(){\r\n    let hashs = [\"#main\",\"#classify\",\"#member\",\"#cart\",\"#mine\"];\r\n    let index = hashs.indexOf(this.currentHash);\r\n    $(\".nav>li\").eq(index).addClass(\"active\").siblings().removeClass(\"active\");\r\n}\r\n\r\n//路由切换监听\r\nRouter.prototype.init = function(){\r\n    window.addEventListener(\"load\",this.refresh.bind(this));\r\n    window.addEventListener(\"hashchange\",this.refresh.bind(this));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./src/scripts/utils/router.js?");

/***/ }),

/***/ "./src/scripts/views/cart.html":
/*!*************************************!*\
  !*** ./src/scripts/views/cart.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"cart-body\\\">    <!-- 地址栏 -->    <div class=\\\"address\\\">        <p></p>        <div>            <div>                <p>多点君需要你的详细地址哟</p>                <p>送至：昌平(地铁站)</p>            </div>            <i class=\\\"iconfont\\\">&#xe644;</i>        </div>    </div>    <!-- 足迹 -->    <div class=\\\"footmark\\\">       <i class=\\\"iconfont\\\">&#xe75f;</i>       <span>足迹</span>    </div>    <!-- 没有商品时 -->    <div class=\\\"no-product\\\">        <div>            <img src=\\\"https://img.dmallcdn.com//dshop/201805/324b1ec1-0ada-410e-8970-23cc28812c9b\\\" alt=\\\"\\\">            <p>购物车还木有商品?</p>            <button>我要买买买</button>        </div>    </div>    <!-- 商品 -->    <div class=\\\"pro-list\\\">        <div class=\\\"store\\\">            <span class=\\\"all-Select\\\"><i class=\\\"iconfont\\\">&#xe671;</i></span>            <img src=\\\"https://img.dmallcdn.com/bizItem/201610/5491eb6a-8a7b-4621-89ad-f22e904b6e7f\\\" alt=\\\"\\\">            <p>多点超市(昌平西平关店)</p>            <i class=\\\"iconfont\\\">&#xe644;</i>        </div>       <div class=\\\"product\\\">            <span class=\\\"single-Select\\\"><i class=\\\"iconfont\\\">&#xe671;</i></span>            <div>                <p class=\\\"des\\\">洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱</p>                <b class=\\\"price\\\">￥23.90</b>            </div>            <div>                <button class=\\\"sub\\\">-</button>                <span class=\\\"operate-num\\\">3</span>                <button class=\\\"add\\\">+</button>            </div>       </div>       <div class=\\\"product\\\">            <span class=\\\"single-Select\\\"><i class=\\\"iconfont\\\">&#xe671;</i></span>            <div>                <p class=\\\"des\\\">洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱洋葱</p>                <b class=\\\"price\\\">￥23.90</b>            </div>            <div>                <button class=\\\"sub\\\">-</button>                <span class=\\\"operate-num\\\">1</span>                <button class=\\\"add\\\">+</button>            </div>       </div>    </div>    <!-- 已经选好了 -->    <div class=\\\"has-selected\\\">        <div>            <p>合计：￥<b class=\\\"total-price\\\">0.00</b>(不含运费)</p>            <span>促销已抵扣金额：￥0.00</span>        </div>        <button>选好了</button>    </div></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/cart.html?");

/***/ }),

/***/ "./src/scripts/views/classify.html":
/*!*****************************************!*\
  !*** ./src/scripts/views/classify.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    这是分类页面</div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/classify.html?");

/***/ }),

/***/ "./src/scripts/views/home.html":
/*!*************************************!*\
  !*** ./src/scripts/views/home.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"locate\\\"></div><div class=\\\"home-container\\\">    <main class=\\\"main\\\"></main>    <ul class=\\\"nav\\\">        <li class=\\\"active\\\">            <i class=\\\"iconfont\\\">&#xe607;</i>            <p>配送到家</p>        </li>        <li>            <i class=\\\"iconfont\\\">&#xe628;</i>            <p>分类</p>        </li>               <li>            <i class=\\\"iconfont\\\">&#xe606;</i>            <p>会员</p>        </li>        <li>            <i class=\\\"iconfont\\\">&#xe615;</i>            <p>购物车</p>        </li>        <li>            <i class=\\\"iconfont\\\">&#xe600;</i>            <p>我的</p>        </li>    </ul></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/home.html?");

/***/ }),

/***/ "./src/scripts/views/location.html":
/*!*****************************************!*\
  !*** ./src/scripts/views/location.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"locate\\\">   <div class=\\\"select-city\\\">       <span class=\\\"back-main\\\"><i class=\\\"iconfont\\\">&lt;</i></span>       <select class=\\\"select\\\">            <option value=\\\"\\\">请选择</option>            <option value=\\\"北京\\\">北京市</option>            <option value=\\\"上海\\\">上海市</option>            <option value=\\\"成都\\\">成都市</option>       </select>               </div>    <div class=\\\"detail-info\\\">       <input type=\\\"text\\\" placeholder=\\\"小区、街道、大厦\\\">       <button>取消</button>   </div>   <div class=\\\"locate-address\\\">       <i class=\\\"iconfont\\\">**</i>       <span>定位到当前地址</span>   </div>   <div class=\\\"address-info\\\">       <i></i>        <span>你还没有收获地址哦</span>   </div>   <div class=\\\"add-address\\\">       <div>           <i class=\\\"iconfont\\\"></i>           新增收货地址       </div>   </div></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/location.html?");

/***/ }),

/***/ "./src/scripts/views/main-market.html":
/*!********************************************!*\
  !*** ./src/scripts/views/main-market.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each data}}    <a href=\\\"{{resource}}\\\"><img src=\\\"{{imageUrl}}\\\" alt=\\\"\\\"></a>{{/each}}\"\n\n//# sourceURL=webpack:///./src/scripts/views/main-market.html?");

/***/ }),

/***/ "./src/scripts/views/main-menu.html":
/*!******************************************!*\
  !*** ./src/scripts/views/main-menu.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each data}}<a href=\\\"{{resource}}\\\">    <img src=\\\"{{imageUrl}}\\\" alt=\\\"\\\">    <span>{{remark}}</span></a>{{/each}}\"\n\n//# sourceURL=webpack:///./src/scripts/views/main-menu.html?");

/***/ }),

/***/ "./src/scripts/views/main.html":
/*!*************************************!*\
  !*** ./src/scripts/views/main.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>   <!-- 顶部状态栏 -->    <div class=\\\"topbar\\\">        <div class=\\\"location\\\">            <i class=\\\"iconfont\\\">&#xe601;</i>            <span>送至：昌平(地铁站)</span>            <i class=\\\"iconfont\\\">&#xe60b;</i>        </div>        <div class=\\\"search\\\">            <i class=\\\"iconfont\\\">&#xe62a;</i>            <span>                <img src=\\\"https://img.dmallcdn.com/store/201804/eda85a36-48fa-4b07-9618-04698d2fe8cb\\\" alt=\\\"\\\">            </span>        </div>    </div>    <!-- 轮播图 -->    <div class=\\\"banner\\\">        <div class=\\\"banner-title\\\">            <div class=\\\"active\\\">                <span></span>                <img src=\\\"\\\" alt=\\\"\\\">            </div>            <div>                <span> </span>                   <img src=\\\"\\\" alt=\\\"\\\">            </div>        </div>        <div class=\\\"swiper-container\\\">            <div class=\\\"swiper-wrapper\\\">                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <!-- <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a> -->            </div>            <!-- 如果需要分页器 -->            <div class=\\\"swiper-pagination\\\"></div>        </div>    </div>    <!-- 功能菜单区 -->    <section class=\\\"menu\\\">    </section>    <!-- 广告图 -->    <div class=\\\"advertising\\\">        <!-- <a href=\\\"https://a.dmall.com/act/tJmjoHlC8AT.html?erpStoreId=10437&dmfrom=wx&from=wx&shareKey=1539405277544\\\">            <img src=\\\"https://img.dmallcdn.com/mIndex/201810/0f13a40b-da5f-4840-8c1a-6476cfff342f_750H\\\" alt=\\\"\\\">        </a> -->        <a href=\\\"\\\">            <img src=\\\"https://img.dmallcdn.com/mIndex/201807/47a84856-ac4e-4d05-8263-8ac8dd4a25e2_480x480H\\\" alt=\\\"\\\">        </a>        <a href=\\\"\\\">            <img src=\\\"https://img.dmallcdn.com/mIndex/201808/b421a19e-ebcc-4707-9759-a5d1e1ce6415_480x480H\\\" alt=\\\"\\\">        </a>    </div>    <!-- 促销 -->    <!-- <div class=\\\"promotion\\\">        <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>        <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>        <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>    </div> -->    <!-- 主题乐园 -->    <div class=\\\"theme\\\">        <img src=\\\"\\\" alt=\\\"\\\">        <div class=\\\"theme-img\\\">            <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>            <div>                <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>                <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>            </div>        </div>    </div>    <!-- 超市优选 -->    <div class=\\\"supermarket\\\">        <img src=\\\"\\\" alt=\\\"\\\">        <div class=\\\"market-list\\\"></div>    </div>    </div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/main.html?");

/***/ }),

/***/ "./src/scripts/views/member.html":
/*!***************************************!*\
  !*** ./src/scripts/views/member.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    这是会员页面</div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/member.html?");

/***/ }),

/***/ "./src/scripts/views/mine.html":
/*!*************************************!*\
  !*** ./src/scripts/views/mine.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    这是我的页面</div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/mine.html?");

/***/ })

/******/ });