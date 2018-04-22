webpackHotUpdate(3,{

/***/ "./components/Layout/MainSidebar/Logo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/rusanov/WebstormProjects/investing/components/Layout/MainSidebar/Logo/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// Import libraries


// Import components


var Logo = function Logo() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "section",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Icon */], { type: "dashboard", __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C"
  );
};

var _default = Logo;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Logo, "Logo", "/Users/rusanov/WebstormProjects/investing/components/Layout/MainSidebar/Logo/index.js");
  reactHotLoader.register(_default, "default", "/Users/rusanov/WebstormProjects/investing/components/Layout/MainSidebar/Logo/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout/MainSidebar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Logo__ = __webpack_require__("./components/Layout/MainSidebar/Logo/index.js");
var _jsxFileName = "/Users/rusanov/WebstormProjects/investing/components/Layout/MainSidebar/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// Import libraries


// Import components



var MainSidebar = function MainSidebar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_antd__["c" /* Layout */].Sider,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Logo__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Menu */],
      { theme: "dark", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Menu */].Item,
        { key: "projects", __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Icon */], { type: "appstore-o", __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }),
        "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Menu */].Item,
        { key: "applications", __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Icon */], { type: "tag-o", __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }),
        "\u0417\u0430\u044F\u0432\u043A\u0438"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Menu */].Item,
        { key: "clients", __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["b" /* Icon */], { type: "team", __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }),
        "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["d" /* Menu */].Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })
    )
  );
};

var _default = MainSidebar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MainSidebar, "MainSidebar", "/Users/rusanov/WebstormProjects/investing/components/Layout/MainSidebar/index.js");
  reactHotLoader.register(_default, "default", "/Users/rusanov/WebstormProjects/investing/components/Layout/MainSidebar/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.b46e73bc68019a46496a.hot-update.js.map