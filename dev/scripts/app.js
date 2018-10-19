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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/router */ \"./src/scripts/utils/router.js\");\n/* harmony import */ var _controllers_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/home */ \"./src/scripts/controllers/home.js\");\n/* harmony import */ var _controllers_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/main */ \"./src/scripts/controllers/main.js\");\n/* harmony import */ var _controllers_classify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/classify */ \"./src/scripts/controllers/classify.js\");\n/* harmony import */ var _controllers_member__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/member */ \"./src/scripts/controllers/member.js\");\n/* harmony import */ var _controllers_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/cart */ \"./src/scripts/controllers/cart.js\");\n/* harmony import */ var _controllers_mine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/mine */ \"./src/scripts/controllers/mine.js\");\n/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/search */ \"./src/scripts/controllers/search.js\");\n/* harmony import */ var _controllers_searchCon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controllers/searchCon */ \"./src/scripts/controllers/searchCon.js\");\n/* harmony import */ var _controllers_location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/location */ \"./src/scripts/controllers/location.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_controllers_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\nconst router = new _utils_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nrouter.init();  \r\nrouter.route(\"#main\",_controllers_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"].render);\r\nrouter.route(\"#classify\",_controllers_classify__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render);\r\nrouter.route(\"#member\",_controllers_member__WEBPACK_IMPORTED_MODULE_4__[\"default\"].render);\r\nrouter.route(\"#cart\",_controllers_cart__WEBPACK_IMPORTED_MODULE_5__[\"default\"].render);\r\nrouter.route(\"#mine\",_controllers_mine__WEBPACK_IMPORTED_MODULE_6__[\"default\"].render);\r\nrouter.route(\"#search\",_controllers_search__WEBPACK_IMPORTED_MODULE_7__[\"default\"].render);\r\nrouter.route(\"#searchCon\",_controllers_searchCon__WEBPACK_IMPORTED_MODULE_8__[\"default\"].render);\r\n_controllers_location__WEBPACK_IMPORTED_MODULE_9__[\"default\"].render();\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/controllers/cart.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/cart.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_cart_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/cart.html */ \"./src/scripts/views/cart.html\");\n/* harmony import */ var _views_cart_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_cart_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cart */ \"./src/scripts/models/cart.js\");\n\r\n\r\n\r\nconst render = async() => {\r\n    $(\".main\").html(_views_cart_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n    await renderList();\r\n    allSelect();\r\n    singleSelect();\r\n    operateNum();\r\n    buyNow();\r\n}\r\n\r\n//商品渲染\r\nconst renderList = async() => {\r\n    var data = await _models_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render();\r\n    var str = \"\";\r\n    var str1 = $(\".pro-list\").html();\r\n    for (var i = 0; i < data.length; i++) {\r\n        for (var key in localStorage) {\r\n            var arr = key.split(\"\");\r\n            var key1 = arr[arr.length-1];\r\n            if (data[i].id == key1) {\r\n                str += `<div class=\"product\">\r\n                        <span class=\"single-Select\"><i class=\"iconfont\">&#xe671;</i></span>\r\n                        <div>\r\n                            <p class=\"des\">${data[i].name}</p>\r\n                            <b class=\"price\">${\"￥\"+data[i].addPrice/100}</b>\r\n                        </div>\r\n                        <div>\r\n                            <button class=\"sub\">-</button>\r\n                            <span class=\"operate-num\" data-id=\"${key}\">${localStorage[key]}</span>\r\n                            <button class=\"add\">+</button>\r\n                        </div>\r\n                    </div>`\r\n            }\r\n        }\r\n    }\r\n    $(\".pro-list\").html(str1 + str);\r\n    //如果首次进入购物车没数据，则应该隐藏掉\r\n    if ($(\".product\").length <= 0 || localStorage.length < 1) {\r\n        $(\".pro-list\").css(\"display\", \"none\");\r\n        $(\".has-selected\").css(\"display\", \"none\");\r\n        $(\".no-product\").css(\"display\", \"flex\");\r\n    }\r\n}\r\n\r\n// 全选\r\nconst allSelect = () => {\r\n    $(\".all-Select\").on(\"tap\", function() {\r\n        if ($(this).attr(\"select\") == \"true\") { //全都不选中\r\n            $(this).removeClass(\"active\").attr(\"select\", false);\r\n            $(\".single-Select\").removeClass(\"active\").attr(\"select\", false);\r\n            $(\".total-price\").text(\"0.00\");\r\n            $(\".has-selected button\").removeClass(\"ok-select\");\r\n\r\n        } else { //全部选中\r\n            $(this).addClass(\"active\").attr(\"select\", true);\r\n            $(\".single-Select\").addClass(\"active\").attr(\"select\", true);\r\n            var totalPrice = 0;;\r\n            $(\".single-Select\").each(function(i) {\r\n                var price = Number($(this).next().children().eq(1).text().slice(1));\r\n                var numVal = Number($(this).next().next().children().eq(1).text());\r\n                totalPrice += price * numVal;\r\n            })\r\n            totalPrice = totalPrice.toFixed(2); //保留2位小数\r\n            $(\".total-price\").text(\"￥\" + totalPrice);\r\n            $(\".has-selected button\").addClass(\"ok-select\");\r\n        }\r\n    })\r\n}\r\n\r\n//反选\r\nconst singleSelect = () => {\r\n    $(\".single-Select\").on(\"tap\", function() {\r\n        if ($(this).attr(\"select\") == \"true\") {\r\n            $(this).removeClass(\"active\").attr(\"select\", false);\r\n            $(\".all-Select\").removeClass(\"active\").attr(\"select\", false);\r\n            //取消选中时，改变总价格\r\n            var price = Number($(this).next().children().eq(1).text().slice(1));\r\n            var numVal = Number($(this).next().next().children().eq(1).text());\r\n            var totalPrice = Number($(\".total-price\").text().slice(1));\r\n            totalPrice -= price * numVal;\r\n            totalPrice = totalPrice.toFixed(2);\r\n            $(\".total-price\").text(\"￥\" + totalPrice);\r\n            //设置选好了的样式\r\n            let flag = true;\r\n            $(\".single-Select\").each(function(i) {\r\n                if ($(this).attr(\"select\") == \"true\") {\r\n                    flag = false;\r\n                }\r\n            })\r\n            if (flag) {\r\n                $(\".has-selected button\").removeClass(\"ok-select\");\r\n            }\r\n        } else {\r\n            $(this).addClass(\"active\").attr(\"select\", true);\r\n            let flag = true;\r\n            //通过反选来控制全选按钮\r\n            $(\".single-Select\").each(function(i) {\r\n                if ($(this).attr(\"select\") != \"true\") {\r\n                    flag = false;\r\n                }\r\n            })\r\n            if (flag) {\r\n                $(\".all-Select\").addClass(\"active\").attr(\"select\", true);\r\n            }\r\n            //选中状态下,改变总价格\r\n            var price = Number($(this).next().children().eq(1).text().slice(1));\r\n            var numVal = Number($(this).next().next().children().eq(1).text());\r\n            var totalPrice = Number($(\".total-price\").text().slice(1));\r\n            totalPrice += price * numVal;\r\n            totalPrice = totalPrice.toFixed(2);\r\n            $(\".total-price\").text(\"￥\" + totalPrice);\r\n            $(\".has-selected button\").addClass(\"ok-select\");\r\n        }\r\n    })\r\n}\r\n\r\n// 商品加减\r\nconst operateNum = () => {\r\n    $(\".sub\").on(\"tap\", function() {\r\n        var numEl = $(this).next();\r\n        var numVal = Number($(this).next().text());\r\n        var _this = $(this);\r\n        var id = $(this).next().attr(\"data-id\");\r\n        if (numVal <= 1) {\r\n            layer.open({\r\n                content: \"是否删除该商品?\",\r\n                btn: ['删除', '取消'], //按钮\r\n                btn1: function() {\r\n                    layer.msg('删除成功', {\r\n                        time: \"500\"\r\n                    });\r\n                    localStorage.removeItem(id);\r\n                    _this.parent().parent().remove();\r\n                    // 如果选中状态下删除还有进行总价加减\r\n                    if (_this.parent().prev().prev().attr(\"select\") == \"true\") {\r\n                        var price = Number(_this.parent().prev().children().eq(1).text().slice(1));\r\n                        var totalPrice = Number($(\".total-price\").text().slice(1));\r\n                        totalPrice -= price;\r\n                        totalPrice = totalPrice.toFixed(2);\r\n                        $(\".total-price\").text(\"￥\" + totalPrice);\r\n                    }\r\n                    if ($(\".product\").length <= 0 || localStorage.length < 1) {\r\n                        $(\".pro-list\").css(\"display\", \"none\");\r\n                        $(\".has-selected\").css(\"display\", \"none\");\r\n                        $(\".no-product\").css(\"display\", \"flex\");\r\n                    }\r\n                }\r\n            });\r\n\r\n        } else {\r\n            numVal--;\r\n            numEl.text(numVal);\r\n            //选中状态下数量加减还要对总价进行相应改变\r\n            if ($(this).parent().prev().prev().attr(\"select\") == \"true\") {\r\n                var price = Number($(this).parent().prev().children().eq(1).text().slice(1));\r\n                var totalPrice = Number($(\".total-price\").text().slice(1));\r\n                totalPrice -= price;\r\n                totalPrice = totalPrice.toFixed(2);\r\n                $(\".total-price\").text(\"￥\" + totalPrice);\r\n            }\r\n            //对应的商品数量在localstorage里还进行减操作\r\n            // 在数量元素上存入商品的ID\r\n            var id = $(this).next().attr(\"data-id\");\r\n            var l_num = Number(localStorage[id]);\r\n            l_num--;\r\n            localStorage[id] = l_num;\r\n        }\r\n\r\n    })\r\n    $(\".add\").on(\"tap\", function() {\r\n        var numEl = $(this).prev();\r\n        var numVal = Number($(this).prev().text());\r\n        numVal++;\r\n        numEl.text(numVal);\r\n        //选中状态下数量加减还要对总价进行相应改变\r\n        if ($(this).parent().prev().prev().attr(\"select\") == \"true\") {\r\n            var price = Number($(this).parent().prev().children().eq(1).text().slice(1));\r\n            var totalPrice = Number($(\".total-price\").text().slice(1));\r\n            totalPrice += price;\r\n            totalPrice = totalPrice.toFixed(2);\r\n            $(\".total-price\").text(\"￥\" + totalPrice);\r\n        }\r\n        //对应的商品数量在localstorage里还进行加操作?\r\n        var id = $(this).prev().attr(\"data-id\");\r\n        var l_num = Number(localStorage[id]);\r\n        l_num++;\r\n        localStorage[id] = l_num;\r\n    })\r\n}\r\n\r\nconst buyNow = () => {\r\n    $(\".nowBuy\").on(\"tap\", function() {\r\n        location.hash = \"#main\";\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/cart.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/home.html */ \"./src/scripts/views/home.html\");\n/* harmony import */ var _views_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_home_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst render = () =>{\r\n    document.getElementById(\"root\").innerHTML = _views_home_html__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n    changeTab();\r\n}\r\n\r\n// //点击切换\r\nconst changeTab = ()=>{\r\n   \r\n    $(\".nav>li\").on(\"tap\",function(){\r\n        let hashs = [\"#main\",\"#classify\",\"#member\",\"#cart\",\"#mine\"];\r\n        // 点击到不同的按钮时，将哈希值进行相应的赋值\r\n            location.hash = hashs[$(this).index()];\r\n            $(this).addClass('active').siblings().removeClass(\"active\");\r\n       \r\n    })\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\r\n\n\n//# sourceURL=webpack:///./src/scripts/controllers/home.js?");

/***/ }),

/***/ "./src/scripts/controllers/location.js":
/*!*********************************************!*\
  !*** ./src/scripts/controllers/location.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/location */ \"./src/scripts/models/location.js\");\n/* harmony import */ var _views_location_city_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/location-city.html */ \"./src/scripts/views/location-city.html\");\n/* harmony import */ var _views_location_city_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_location_city_html__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst render = async ()=>{\r\n    $(\".back-main\").on(\"tap\",function(){\r\n        location.hash = \"#main\";\r\n    })\r\n    var data = (await _models_location__WEBPACK_IMPORTED_MODULE_0__[\"default\"].address()).data.cityList;\r\n    let template = Handlebars.compile(_views_location_city_html__WEBPACK_IMPORTED_MODULE_1___default.a);\r\n    let html = template({data});\r\n    $(\".select\").html(html);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/location.js?");

/***/ }),

/***/ "./src/scripts/controllers/main.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/main.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_main_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/main.html */ \"./src/scripts/views/main.html\");\n/* harmony import */ var _views_main_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_main_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/main */ \"./src/scripts/models/main.js\");\n/* harmony import */ var _views_main_menu_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/main-menu.html */ \"./src/scripts/views/main-menu.html\");\n/* harmony import */ var _views_main_menu_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_main_menu_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _views_main_market_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/main-market.html */ \"./src/scripts/views/main-market.html\");\n/* harmony import */ var _views_main_market_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_main_market_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _views_location_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/location.html */ \"./src/scripts/views/location.html\");\n/* harmony import */ var _views_location_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_location_html__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _controllers_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllers/search */ \"./src/scripts/controllers/search.js\");\n/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/router */ \"./src/scripts/utils/router.js\");\n/* harmony import */ var _controllers_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/location */ \"./src/scripts/controllers/location.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar router = new _utils_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\r\n// import searchTpl from '';\r\nconst render =  ()=>{\r\n    $(\".main\").html(_views_main_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n    banner();\r\n    change_title();\r\n    menu();\r\n    // promotion();\r\n    theme();\r\n    market();\r\n    search();\r\n}\r\n// 点击搜索跳转到搜索页面\r\n\r\nconst search = ()=>{\r\n    const searchCon = $(\".search_cli\");\r\n    const nav = $(\".nav\");\r\n   searchCon.on(\"tap\",function(){\r\n       location.hash = \"#search\";\r\n   _controllers_search__WEBPACK_IMPORTED_MODULE_5__[\"default\"].render();\r\n// router.route(\"#search\",searchController.render);\r\n\r\n   })\r\n}\r\n\r\n\r\n\r\n//超市优选\r\nconst market = async ()=>{\r\n   \r\n    //9+10\r\n    var result = (await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[9].dataList;\r\n   \r\n    $(\".supermarket>img\").attr(\"src\",result[0].imageUrl);\r\n    var data = \"\";\r\n    for(var i=10; i<=12; i++){\r\n        data = [...data,...(await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[i].dataList];\r\n        let template = Handlebars.compile(_views_main_market_html__WEBPACK_IMPORTED_MODULE_3___default.a);\r\n        let html = template({data});\r\n        $(\".market-list\").html(html);\r\n    }\r\n    \r\n}\r\n\r\n//主题乐园\r\nconst theme = async ()=>{\r\n    var data1 =  (await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[6].dataList;\r\n    var data2 =  (await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[7].dataList;\r\n    $(\".theme>img\").attr(\"src\",data1[0].imageUrl);\r\n    $(\".theme-img>a>img\").attr(\"src\",data2[0].imageUrl).parent().attr(\"href\",data2[0].resource);\r\n    $(\".theme-img>div>a>img\").each(function(i){\r\n        $(this).attr(\"src\",data2[i+1].imageUrl).parent().attr(\"href\",data2[i+1].resource);\r\n    })\r\n}\r\n\r\n// 大促\r\n// const promotion = async ()=>{\r\n//     var data = (await mainModel.totalData()).data.pageModules[6].dataList;\r\n//     $(\".promotion img\").each(function(i){\r\n//         $(this).attr(\"src\",data[i].imageUrl).parent().attr(\"href\",data[i].resource);\r\n//     })\r\n// }\r\n\r\n//功能菜单区\r\nconst menu = async ()=>{\r\n    var data = \"\";\r\n    for(var i=2; i<=3; i++){\r\n        data = [...data,...(await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[i].dataList]\r\n        let template = Handlebars.compile(_views_main_menu_html__WEBPACK_IMPORTED_MODULE_2___default.a);\r\n        let html = template({data});\r\n        $(\".menu\").html(html);\r\n    }\r\n}\r\n\r\n//轮播图渲染\r\nconst banner = async ()=>{\r\n    var result = await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].banner_title();\r\n    $(\".banner-title img:first\").attr(\"src\",result.data[0].business[0].label);\r\n    $(\".banner-title img:last\").attr(\"src\",result.data[0].business[1].label);\r\n    $(\".banner-title span:first\").text(result.data[0].business[0].name);\r\n    $(\".banner-title span:last\").text(result.data[0].business[1].name);\r\n    //图片及对应的超链接设置\r\n    var data = (await _models_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].totalData()).data.pageModules[0].dataList;\r\n    $(\".swiper-wrapper img\").each(function(i){\r\n        $(this).attr(\"src\",data[i].imageUrl).parent().attr(\"href\",data[i].resource);\r\n    })\r\n    // 定义swiper\r\n    var mySwiper = new Swiper ('.swiper-container', {\r\n        direction: 'horizontal',\r\n        loop: true,\r\n        autoplay: true,\r\n        autoplay:{\r\n            disableOnInteraction: false\r\n        },\r\n        // 如果需要分页器\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n            clickable :true,\r\n        }\r\n        //左右按钮\r\n        // navigation: {\r\n        // nextEl: '.swiper-button-next',\r\n        // prevEl: '.swiper-button-prev'\r\n        // },\r\n    })\r\n}\r\n\r\n//切换轮播图上的标题\r\nconst change_title = ()=>{\r\n    $(\".banner-title div\").on(\"tap\",function(){\r\n        $(this).addClass(\"active\").siblings().removeClass(\"active\");\r\n    })\r\n    //点击进入定位页面\r\n    $(\".location\").on(\"tap\",function(){\r\n        $(\".home-container\").css(\"display\",\"none\");\r\n        $(\".locate\").html(_views_location_html__WEBPACK_IMPORTED_MODULE_4___default.a).css(\"display\",\"flex\");\r\n        _controllers_location__WEBPACK_IMPORTED_MODULE_7__[\"default\"].render();\r\n        location.hash = \"#location\";\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/main.js?");

/***/ }),

/***/ "./src/scripts/controllers/member.js":
/*!*******************************************!*\
  !*** ./src/scripts/controllers/member.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_member_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/member.html */ \"./src/scripts/views/member.html\");\n/* harmony import */ var _views_member_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_member_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_membe_share_menu_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/membe_share_menu.html */ \"./src/scripts/views/membe_share_menu.html\");\n/* harmony import */ var _views_membe_share_menu_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_membe_share_menu_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_membe_share_imgList_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/membe_share_imgList.html */ \"./src/scripts/views/membe_share_imgList.html\");\n/* harmony import */ var _views_membe_share_imgList_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_membe_share_imgList_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_member_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/member.js */ \"./src/scripts/models/member.js\");\n\r\n\r\n\r\n\r\n\r\nconst render = () => {\r\n    $(\".main\").html(_views_member_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n    memberShare();\r\n    imgList();\r\n}\r\nconst imgList = async() => {\r\n    var result = await _models_member_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderDate();\r\n    var imgList = result.data.renderData;\r\n    var imgObj = JSON.parse(imgList).moduleList;\r\n\r\n    var list = \"\";\r\n\r\n    for (var i = 0; i < imgObj.length; i++) {\r\n        list = [...list, imgObj[i].data];\r\n    }\r\n    console.log(list);\r\n    let template = Handlebars.compile(_views_membe_share_imgList_html__WEBPACK_IMPORTED_MODULE_2___default.a);\r\n    let html = template({ list });\r\n    console.log(html)\r\n    $(\".img_area\").html(html)\r\n\r\n}\r\n\r\nconst memberShare = async() => {\r\n    //获取数据\r\n    var result = await _models_member_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].welfares_list();\r\n    var result_list = result.data.welfares;\r\n\r\n    let template = Handlebars.compile(_views_membe_share_menu_html__WEBPACK_IMPORTED_MODULE_1___default.a);\r\n    result_list.length = 5;\r\n    let html = template({ list: result_list });\r\n    $(\".share\").html(html);\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/member.js?");

/***/ }),

/***/ "./src/scripts/controllers/mine.js":
/*!*****************************************!*\
  !*** ./src/scripts/controllers/mine.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_mine_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/mine.html */ \"./src/scripts/views/mine.html\");\n/* harmony import */ var _views_mine_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_mine_html__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst render = () => {\r\n        $(\".main\").html(_views_mine_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n    }\r\n    //先渲染整体 在渲染局部\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/mine.js?");

/***/ }),

/***/ "./src/scripts/controllers/search.js":
/*!*******************************************!*\
  !*** ./src/scripts/controllers/search.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_search_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/search.html */ \"./src/scripts/views/search.html\");\n/* harmony import */ var _views_search_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_search_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_searchCon_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/searchCon.html */ \"./src/scripts/views/searchCon.html\");\n/* harmony import */ var _views_searchCon_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_searchCon_html__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst render =  ()=>{\r\n    $(\".main\").html(_views_search_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n    const nav = $(\".nav\");\r\n    nav.css(\"display\",\"none\");\r\n    addProduct();\r\n    history_s();\r\n    ret();\r\n}\r\n\r\n// 判断keycode = enter跳转到searchCon内容\r\n\r\n$(document).on(\"keypress\",(e)=>{\r\n    var keyCode = e.which;\r\n    var input = $(\".search_t>input\");\r\n   if(keyCode == 13){\r\n       var value = input.val();\r\n        if(value != \"\"){\r\n            location.hash = \"#searchCon\";\r\n            $(\".main .search_c\").html(\"\");\r\n            $(\".main .search_b\").html(\"\");\r\n            localStorage.setItem(value,value);\r\n        }\r\n       \r\n   }\r\n})\r\n\r\n// 历史搜索添加内容\r\n\r\nconst addProduct = ()=>{\r\n    var search_list =   $(\".search_list\");\r\n  var str = \"\";\r\n    for(var i = 0;i<localStorage.length;i++){\r\n        var key = localStorage.key(i);\r\n        str +=`<li>${localStorage[key]}</li>`;\r\n    }\r\n    search_list.html(str);\r\n}\r\n\r\n//  点击历史搜索和热门搜索内容的时候\r\n\r\nconst history_s = ()=>{\r\n    var search_list =   $(\".search_list\");\r\n    var hot_list = $(\".hot_list\");\r\n\r\n    var li_hos = search_list.find(\"li\");\r\n    var li_hot = hot_list.find(\"li\");\r\n    var input = $(\".search_t>input\");\r\n    li_hos.on(\"tap\",function(){\r\n        $(\".main\").html(_views_searchCon_html__WEBPACK_IMPORTED_MODULE_1___default.a);\r\n        // $(\".main .search_b\").html(\"\");\r\n        // input.val($(this).text())\r\n        // input.val(li_hos.eq($(this).index().val()));\r\n        location.hash = \"#searchCon\";\r\n    })\r\n    li_hot.on(\"tap\",function(){\r\n        // $(\".main .search_c\").html(\"\");\r\n        // $(\".main .search_b\").html(\"\");\r\n        $(\".main\").html(_views_searchCon_html__WEBPACK_IMPORTED_MODULE_1___default.a);\r\n        // input.val($(this).text())\r\n        // input.val(li_hos.eq($(this).index().val()));\r\n        location.hash = \"#searchCon\";\r\n    })\r\n}\r\n\r\n// 点击返回键返回\r\nconst ret = ()=>{\r\n    $(\".ret\").on(\"tap\",()=>{\r\n        location.hash = \"#main\";\r\n        const nav = $(\".nav\");\r\n        nav.css(\"display\",\"block\");\r\n    })\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/search.js?");

/***/ }),

/***/ "./src/scripts/controllers/searchCon.js":
/*!**********************************************!*\
  !*** ./src/scripts/controllers/searchCon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_searchCon_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/searchCon.html */ \"./src/scripts/views/searchCon.html\");\n/* harmony import */ var _views_searchCon_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_searchCon_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/search */ \"./src/scripts/models/search.js\");\n/* harmony import */ var _views_search_list_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/search-list.html */ \"./src/scripts/views/search-list.html\");\n/* harmony import */ var _views_search_list_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_search_list_html__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\nconst render = ()=>{\r\n    $(\".main\").html(_views_searchCon_html__WEBPACK_IMPORTED_MODULE_0___default.a);\r\n    const nav = $(\".nav\");\r\n    nav.css(\"display\",\"none\");\r\n    list();\r\n    ret();\r\n}\r\n\r\nconst list = async () => {\r\n   \r\n    let listSource  = (await _models_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list()).list;\r\n    console.log(listSource)\r\n   renderList(listSource);\r\n  }\r\n\r\n\r\n\r\n\r\n const renderList = async (list) => {\r\n\r\n    let template = Handlebars.compile(_views_search_list_html__WEBPACK_IMPORTED_MODULE_2___default.a)\r\n    let html = template({ list })\r\n    $('#search_list').html(html)\r\n  }\r\n  \r\n// 点击返回键  返回\r\n\r\nconst ret = ()=>{\r\n    $('.ret').on(\"tap\",()=>{\r\n      location.hash = \"#search\";\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/controllers/searchCon.js?");

/***/ }),

/***/ "./src/scripts/models/cart.js":
/*!************************************!*\
  !*** ./src/scripts/models/cart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst render = ()=>{\r\n    return $.ajax({\r\n        url:\"/api/list\",\r\n        success:(data)=>{\r\n            return data;\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    render\r\n});\n\n//# sourceURL=webpack:///./src/scripts/models/cart.js?");

/***/ }),

/***/ "./src/scripts/models/location.js":
/*!****************************************!*\
  !*** ./src/scripts/models/location.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst address = ()=>{\r\n    return $.ajax({\r\n        type:\"get\",\r\n        url:\"/address/cityList?param=%7B%22successUrl%22%3A%22-1%22%2C%22mine%22%3A%22false%22%7D&token=79FA24EB835804A901C7C22766EF54921E600234D3A88A988649F9C58F8827827E6D6F96946D61A5AC6A4EACA9F4847EB8732D40897F5DA39C7881119283B2C0404F3A2964BECBBAD0472F3DC41F6726B00137562922888947C794A2F2D117EAADB7F802527615B88EB992E710BDF384A37D2FACA9D8E272448C3DCFA22F8B79&source=2&tempid=C82C19E4891000025DF9C4D0109A18AF&pubParam=%7B%7D&_=1539608959351\",\r\n        success:(result)=>{\r\n            return result;\r\n        }\r\n    })\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    address\r\n});\n\n//# sourceURL=webpack:///./src/scripts/models/location.js?");

/***/ }),

/***/ "./src/scripts/models/main.js":
/*!************************************!*\
  !*** ./src/scripts/models/main.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst banner_title = () => {\r\n    return $.ajax({\r\n        type: \"get\",\r\n        url: \"/business?param=%7B%22longitude%22%3A%22116.23359%22%2C%22latitude%22%3A%2240.22055%22%7D&token=79FA24EB835804A901C7C22766EF54921E600234D3A88A988649F9C58F8827827E6D6F96946D61A5AC6A4EACA9F4847EB8732D40897F5DA39C7881119283B2C0404F3A2964BECBBAD0472F3DC41F6726B00137562922888947C794A2F2D117EAADB7F802527615B88EB992E710BDF384A37D2FACA9D8E272448C3DCFA22F8B79&source=2&tempid=C82C19E4891000025DF9C4D0109A18AF&pubParam=%7B%7D&_=153935098095\",\r\n        success: (result) => {\r\n            return result;\r\n        }\r\n    });\r\n}\r\n\r\n// 首页总数据数据获取\r\nconst totalData = () => {\r\n    return $.ajax({\r\n        type: \"get\",\r\n        url: \"/businessIndex?param=%7B%22index%22%3A0%2C%22currentPage%22%3A1%2C%22reqUrl%22%3A%22https%3A%2F%2Fcmsapi.dmall.com%2Fapp%2Fweb%2Fjson%2F1%2F10437%22%2C%22pairs%22%3A%221-0-10437%22%2C%22code%22%3A%221%22%2C%22networkType%22%3A2%7D&token=79FA24EB835804A901C7C22766EF54921E600234D3A88A988649F9C58F8827827E6D6F96946D61A5AC6A4EACA9F4847EB8732D40897F5DA39C7881119283B2C0404F3A2964BECBBAD0472F3DC41F6726B00137562922888947C794A2F2D117EAADB7F802527615B88EB992E710BDF384A37D2FACA9D8E272448C3DCFA22F8B79&source=2&tempid=C82C19E4891000025DF9C4D0109A18AF&pubParam=%7B%7D\",\r\n        success: (result) => {\r\n            return result;\r\n        }\r\n    });\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    banner_title,\r\n    totalData\r\n});\n\n//# sourceURL=webpack:///./src/scripts/models/main.js?");

/***/ }),

/***/ "./src/scripts/models/member.js":
/*!**************************************!*\
  !*** ./src/scripts/models/member.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//中间 分享有礼横条的数据\r\nconst welfares_list = () => {\r\n        return $.ajax({\r\n            type: \"get\",\r\n            url: \"/user/memberTab?token=83EB7F557CCF2635BB848552649E4DC9BF53CAC004E68C19B05722A1C4AA92F8177688A76B545E42B879004E4542F08F595A6DE9E36F8970AEEAE1FE4D2BDF92EEEB8AE7D81884C5F4FC70882CCD6ED5E241327666682DE04BD75E3AA1C60DDCDA0B1386915EAC1D525428531C293778A73BF32390D526B249F6E702FDC128D7&source=2&tempid=C82C1A2BD75000028C44114FC3801807&_=1539499165097\",\r\n            success: (result) => {\r\n                return result;\r\n            }\r\n        });\r\n    }\r\n    //图片列表数据\r\nconst renderDate = () => {\r\n    return $.ajax({\r\n        type: \"get\",\r\n        url: \"/i/pageData?dshopStoreId=11491&actId=816&pageId=2330&token=83EB7F557CCF2635BB848552649E4DC9BF53CAC004E68C19B05722A1C4AA92F8177688A76B545E42B879004E4542F08F595A6DE9E36F8970AEEAE1FE4D2BDF92EEEB8AE7D81884C5F4FC70882CCD6ED5E241327666682DE04BD75E3AA1C60DDCDA0B1386915EAC1D525428531C293778A73BF32390D526B249F6E702FDC128D7&source=2&tempid=C82C1A2BD75000028C44114FC3801807&_=1539497626339\",\r\n        success: (result) => {\r\n            return result;\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    welfares_list,\r\n    renderDate\r\n});\n\n//# sourceURL=webpack:///./src/scripts/models/member.js?");

/***/ }),

/***/ "./src/scripts/models/search.js":
/*!**************************************!*\
  !*** ./src/scripts/models/search.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst list = () => {\r\n    return $.ajax({\r\n      url: '/api/search',\r\n      success: (result) => {\r\n        return result\r\n      }\r\n    })\r\n  }\r\n  \r\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    list\r\n    \r\n  });\n\n//# sourceURL=webpack:///./src/scripts/models/search.js?");

/***/ }),

/***/ "./src/scripts/utils/router.js":
/*!*************************************!*\
  !*** ./src/scripts/utils/router.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Router(){\r\n    //定义一个对象存储路由值和对应的回调函数\r\n    this.routes = {};\r\n    this.currentHash = \"\";\r\n}\r\n\r\n//默认的回调函数\r\nvar noop = function(){};\r\n\r\n//路由注册\r\nRouter.prototype.route = function(hash,cb){\r\n    this.currentHash = hash;\r\n    this.routes[this.currentHash] = cb || noop;\r\n}\r\n\r\n//路由刷新\r\nRouter.prototype.refresh = function(){\r\n    if(location.hash != \"##\" || location.hash != \"#search\" || location.hash != \"#searchCon\" &&location.hash != \"#location\"){\r\n   \r\n        let hash = location.hash || \"#main\";\r\n        this.currentHash = hash;\r\n        this.routes[this.currentHash]();\r\n        this.switchTabbar();\r\n        $(\".home-container\").css(\"display\",\"flex\");\r\n        $(\".locate\").css(\"display\",\"none\");\r\n    }\r\n}\r\n\r\n//switchTabbar\r\nRouter.prototype.switchTabbar = function(){\r\n    let hashs = [\"#main\",\"#classify\",\"#member\",\"#cart\",\"#mine\"];\r\n    let index = hashs.indexOf(this.currentHash);\r\n    $(\".nav>li\").eq(index).addClass(\"active\").siblings().removeClass(\"active\");\r\n}\r\n\r\n//路由切换监听\r\nRouter.prototype.init = function(){\r\n    window.addEventListener(\"load\",this.refresh.bind(this));\r\n    window.addEventListener(\"hashchange\",this.refresh.bind(this));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack:///./src/scripts/utils/router.js?");

/***/ }),

/***/ "./src/scripts/views/cart.html":
/*!*************************************!*\
  !*** ./src/scripts/views/cart.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"cart-body\\\">    <!-- 地址栏 -->    <div class=\\\"address\\\">        <p></p>        <div>            <div>                <p>多点君需要你的详细地址哟</p>                <p>送至：昌平(地铁站)</p>            </div>            <i class=\\\"iconfont\\\">&#xe644;</i>        </div>    </div>    <!-- 足迹 -->    <div class=\\\"footmark\\\">       <i class=\\\"iconfont\\\">&#xe75f;</i>       <span>足迹</span>    </div>    <!-- 没有商品时 -->    <div class=\\\"no-product\\\">        <div>            <img src=\\\"https://img.dmallcdn.com//dshop/201805/324b1ec1-0ada-410e-8970-23cc28812c9b\\\" alt=\\\"\\\">            <p>购物车还木有商品?</p>            <button class=\\\"nowBuy\\\">我要买买买</button>        </div>    </div>    <!-- 商品 -->    <div class=\\\"pro-list\\\">        <div class=\\\"store\\\">            <span class=\\\"all-Select\\\"><i class=\\\"iconfont\\\">&#xe671;</i></span>            <img src=\\\"https://img.dmallcdn.com/bizItem/201610/5491eb6a-8a7b-4621-89ad-f22e904b6e7f\\\" alt=\\\"\\\">            <p>多点超市(昌平西平关店)</p>            <i class=\\\"iconfont\\\">&#xe644;</i>        </div>           </div>    <!-- 已经选好了 -->    <div class=\\\"has-selected\\\">        <div>            <p>合计：￥<b class=\\\"total-price\\\">0.00</b>(不含运费)</p>            <span>促销已抵扣金额：￥0.00</span>        </div>        <button>选好了</button>    </div></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/cart.html?");

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

eval("module.exports = \"<div class=\\\"locate\\\"></div><div class=\\\"home-container\\\">    <main class=\\\"main\\\"></main>    <ul class=\\\"nav nav_home\\\">        <li class=\\\"active\\\">            <i class=\\\"iconfont\\\">&#xe607;</i>            <p>配送到家</p>        </li>        <li>            <i class=\\\"iconfont\\\">&#xe628;</i>            <p>分类</p>        </li>               <li>            <i class=\\\"iconfont\\\">&#xe606;</i>            <p>会员</p>        </li>        <li>            <i class=\\\"iconfont\\\">&#xe615;</i>            <p>购物车</p>        </li>        <li>            <i class=\\\"iconfont\\\">&#xe600;</i>            <p>我的</p>        </li>    </ul></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/home.html?");

/***/ }),

/***/ "./src/scripts/views/location-city.html":
/*!**********************************************!*\
  !*** ./src/scripts/views/location-city.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each data}}    <option value=\\\"北京\\\">{{cityName}}</option>{{/each}}\"\n\n//# sourceURL=webpack:///./src/scripts/views/location-city.html?");

/***/ }),

/***/ "./src/scripts/views/location.html":
/*!*****************************************!*\
  !*** ./src/scripts/views/location.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"locate\\\">   <div class=\\\"select-city\\\">       <span class=\\\"back-main\\\"><i class=\\\"iconfont\\\">&#xe911;</i></span>       <select class=\\\"select\\\">            <option value=\\\"\\\">请选择</option>       </select>               </div>    <div class=\\\"detail-info\\\">       <span><i class=\\\"iconfont\\\">&#xe62a;</i></span>       <input type=\\\"text\\\" placeholder=\\\"小区、街道、大厦\\\">   </div>   <div class=\\\"locate-address\\\">       <i class=\\\"iconfont\\\">&#xe636;</i>       <span>定位到当前地址</span>   </div>   <div class=\\\"address-info\\\">       <i class=\\\"iconfont\\\">&#xe60d;</i>        <span>你还没有收获地址哦</span>   </div>   <div class=\\\"add-address\\\">       <div>           <i>+</i>           <span>新增收货地址</span>        </div>   </div></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/location.html?");

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

eval("module.exports = \"<div>   <!-- 顶部状态栏 -->    <div class=\\\"topbar\\\">        <div class=\\\"location\\\">            <i class=\\\"iconfont\\\">&#xe601;</i>            <span>送至：昌平(地铁站)</span>            <i class=\\\"iconfont\\\">&#xe60b;</i>        </div>        <div class=\\\"search\\\">            <i class=\\\"iconfont search_cli\\\">&#xe62a;</i>            <span>                <img src=\\\"https://img.dmallcdn.com/store/201804/eda85a36-48fa-4b07-9618-04698d2fe8cb\\\" alt=\\\"\\\">            </span>        </div>    </div>    <!-- 轮播图 -->    <div class=\\\"banner\\\">        <div class=\\\"banner-title\\\">            <div class=\\\"active\\\">                <span></span>                <img src=\\\"\\\" alt=\\\"\\\">            </div>            <div>                <span> </span>                   <img src=\\\"\\\" alt=\\\"\\\">            </div>        </div>        <div class=\\\"swiper-container\\\">            <div class=\\\"swiper-wrapper\\\">                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>                <a href=\\\"\\\" class=\\\"swiper-slide\\\"><img  alt=\\\"\\\"></a>            </div>            <!-- 如果需要分页器 -->            <div class=\\\"swiper-pagination\\\"></div>        </div>    </div>    <!-- 功能菜单区 -->    <section class=\\\"menu\\\">    </section>    <!-- 广告图 -->    <div class=\\\"advertising\\\">        <!-- <a href=\\\"https://a.dmall.com/act/tJmjoHlC8AT.html?erpStoreId=10437&dmfrom=wx&from=wx&shareKey=1539405277544\\\">            <img src=\\\"https://img.dmallcdn.com/mIndex/201810/0f13a40b-da5f-4840-8c1a-6476cfff342f_750H\\\" alt=\\\"\\\">        </a> -->        <a href=\\\"\\\">            <img src=\\\"https://img.dmallcdn.com/mIndex/201807/47a84856-ac4e-4d05-8263-8ac8dd4a25e2_480x480H\\\" alt=\\\"\\\">        </a>        <a href=\\\"\\\">            <img src=\\\"https://img.dmallcdn.com/mIndex/201808/b421a19e-ebcc-4707-9759-a5d1e1ce6415_480x480H\\\" alt=\\\"\\\">        </a>    </div>    <!-- 促销 -->    <!-- <div class=\\\"promotion\\\">        <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>        <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>        <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>    </div> -->    <!-- 主题乐园 -->    <div class=\\\"theme\\\">        <img src=\\\"\\\" alt=\\\"\\\">        <div class=\\\"theme-img\\\">            <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>            <div>                <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>                <a href=\\\"\\\"><img src=\\\"\\\" alt=\\\"\\\"></a>            </div>        </div>    </div>    <!-- 超市优选 -->    <div class=\\\"supermarket\\\">        <img src=\\\"\\\" alt=\\\"\\\">        <div class=\\\"market-list\\\"></div>    </div>    </div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/main.html?");

/***/ }),

/***/ "./src/scripts/views/membe_share_imgList.html":
/*!****************************************************!*\
  !*** ./src/scripts/views/membe_share_imgList.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each list}}<img src=\\\"{{imgSrc}}\\\" alt=\\\"\\\" /> {{/each}}\"\n\n//# sourceURL=webpack:///./src/scripts/views/membe_share_imgList.html?");

/***/ }),

/***/ "./src/scripts/views/membe_share_menu.html":
/*!*************************************************!*\
  !*** ./src/scripts/views/membe_share_menu.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each list}}<a href=\\\"{{activityUrl}}\\\">    <img src=\\\"{{logo}}\\\" alt=\\\"\\\">    <span>{{name}}</span></a>{{/each}}\"\n\n//# sourceURL=webpack:///./src/scripts/views/membe_share_menu.html?");

/***/ }),

/***/ "./src/scripts/views/member.html":
/*!***************************************!*\
  !*** ./src/scripts/views/member.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    <div class=\\\"top\\\">        <p>Hello,普通会员</p>        <div class=\\\"member_icon\\\">            <a href=\\\"##\\\">                <i class=\\\"iconfont\\\">&#xe606;</i>                <span>会员中心</span>            </a>            <a href=\\\"##\\\">                <i class=\\\"iconfont\\\">&#xe654;</i>                <span>会员专属码</span>            </a>        </div>        <div class=\\\"menu_list\\\">            <a href=\\\"\\\">                <i>￥0.00</i>                <em>余额</em>            </a>            <a href=\\\"\\\"> <i>0</i>                <em>积分</em></a>            <a href=\\\"\\\"> <i>0</i>                <em>成长值</em></a>            <a href=\\\"\\\"> <i>0</i>                <em>优惠券</em></a>        </div>    </div>    <div class=\\\"share\\\">    </div>    <div class=\\\"empty\\\"></div>    <div class=\\\"img_area\\\">    </div></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/member.html?");

/***/ }),

/***/ "./src/scripts/views/mine.html":
/*!*************************************!*\
  !*** ./src/scripts/views/mine.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"top_cont\\\">    <div class=\\\"qiandao\\\">        <p>去签到</p>    </div>    <div class=\\\"left_cont\\\">        <img src=\\\"//img.dmallcdn.com/common/b8cb181b-5e07-4e6a-97f1-6ef1789c2cb1\\\" alt=\\\"\\\">        <div>            <p>你好</p>            <div>                <p>普通会员</p>            </div>        </div>    </div>    <div class=\\\"right_cont\\\">        <div>            <p>会员优惠码</p>            <p>仅限App使用</p>        </div>        <i class=\\\"iconfont\\\">&#xe654;</i>    </div></div><div class=\\\"order\\\">    <p>我的订单</p>    <p>全部订单</p></div><div class=\\\"pay_menu\\\">    <div>        <i class=\\\"iconfont\\\">&#xe936;</i>        <em>待支付</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe90f;</i>        <em>待发货</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe882;</i>        <em>已发货</em>    </div></div><div class=\\\"empty\\\"></div><h2>我的资产</h2><div class=\\\"money_menu\\\">    <div>        <i>￥0.00</i>        <em>余额</em>    </div>    <div>        <i>0</i>        <em>积分</em>    </div>    <div>        <i>￥0.00</i>        <em>卡包</em>    </div>    <div>        <i>0</i>        <em>优惠券</em>    </div></div><div class=\\\"empty\\\"></div><h2>我的服务</h2><div class=\\\"vip_menu\\\">    <div>        <i class=\\\"iconfont\\\">&#xe606;</i>        <em>会员中心</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe601;</i>        <em>收货地址</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe91e;</i>        <em>帮助中心</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe90f;</i>        <em>客服电话</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe75f;</i>        <em>体验APP</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe897;</i>        <em>发票中心</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe936;</i>        <em>绑卡</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe885;</i>        <em>自由购</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe89e;</i>        <em>设置</em>    </div>    <div>        <i class=\\\"iconfont\\\">&#xe889;</i>        <em>购物袋</em>    </div></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/mine.html?");

/***/ }),

/***/ "./src/scripts/views/search-list.html":
/*!********************************************!*\
  !*** ./src/scripts/views/search-list.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each list}}<li><img src=\\\"{{img}}\\\" alt=\\\"\\\"><p>精选价</p><p>{{title}}</p><p class=\\\"addProduct\\\"><span>{{price}}</span><span class=\\\"add_pro\\\">+</span></p></li>{{/each}}\"\n\n//# sourceURL=webpack:///./src/scripts/views/search-list.html?");

/***/ }),

/***/ "./src/scripts/views/search.html":
/*!***************************************!*\
  !*** ./src/scripts/views/search.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>        <div class=\\\"search_t\\\">            <i class=\\\"iconfont  ret\\\">&#xe911;</i><input type=\\\"text\\\" placeholder=\\\"搜索想要的商品\\\">            <i class=\\\"iconfont search_i\\\">&#xe62a;</i>        </div>        <div class=\\\"search_c\\\">            <p>热门搜索</p>            <ul class=\\\"hot_list\\\">               <li>卫生纸</li>               <li>纸巾</li>               <li>榨菜</li>               <li>方便面</li>               <li>抽纸</li>            </ul>        </div>        <div class=\\\"search_b\\\">            <p>历史搜索</p>            <ul class=\\\"search_list\\\">                           </ul>        </div>    </div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/search.html?");

/***/ }),

/***/ "./src/scripts/views/searchCon.html":
/*!******************************************!*\
  !*** ./src/scripts/views/searchCon.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>    <div class=\\\"search_t\\\">        <i class=\\\"iconfont ret\\\">&#xe911;</i><input type=\\\"text\\\" placeholder=\\\"搜索想要的商品\\\">        <i class=\\\"iconfont search_i\\\">&#xe62a;</i>    </div>    <div class=\\\"search_con\\\">        <p><span>销量</span><span>价格</span></p>        <ul id=\\\"search_list\\\">                    </ul>    </div></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/searchCon.html?");

/***/ })

/******/ });