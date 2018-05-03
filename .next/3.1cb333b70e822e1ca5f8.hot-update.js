webpackHotUpdate(3,{

/***/ "./src/components/Applications/ListOfApplicationsPage/TableWithApplications/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Common_Text_ColorTextBySymbol__ = __webpack_require__("./src/components/Common/Text/ColorTextBySymbol/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Common_Text_PriceText__ = __webpack_require__("./src/components/Common/Text/PriceText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Common_ElementWrapper__ = __webpack_require__("./src/components/Common/ElementWrapper/index.js");
var _jsxFileName = "/Users/rusanov/WebstormProjects/investing/src/components/Applications/ListOfApplicationsPage/TableWithApplications/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// Import libraries




// Import components




var avatarColumnStyle = {
  marginRight: ".5em",
  display: "inline-block"
};

var columns = [{
  title: "Клиент",
  dataIndex: "client",
  key: "client",
  render: function render(client) {
    return client ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      },
      client.firstname + " " + client.lastname
    ) : null;
  }
}, {
  title: "Акции",
  dataIndex: "stocks",
  key: "stocks",
  render: function render(stocks) {
    return stocks.map(function (stock) {
      return stock ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        stock.title
      ) : null;
    });
  }
}];

var TableWithApplications = function TableWithApplications(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5__Common_ElementWrapper__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["h" /* Table */], {
      rowKey: function rowKey(record) {
        return record.id;
      },
      dataSource: props.applications,
      columns: columns,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    })
  );
};

TableWithApplications.propTypes = {
  applications: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired
};

var _default = TableWithApplications;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(avatarColumnStyle, "avatarColumnStyle", "/Users/rusanov/WebstormProjects/investing/src/components/Applications/ListOfApplicationsPage/TableWithApplications/index.js");
  reactHotLoader.register(columns, "columns", "/Users/rusanov/WebstormProjects/investing/src/components/Applications/ListOfApplicationsPage/TableWithApplications/index.js");
  reactHotLoader.register(TableWithApplications, "TableWithApplications", "/Users/rusanov/WebstormProjects/investing/src/components/Applications/ListOfApplicationsPage/TableWithApplications/index.js");
  reactHotLoader.register(_default, "default", "/Users/rusanov/WebstormProjects/investing/src/components/Applications/ListOfApplicationsPage/TableWithApplications/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.1cb333b70e822e1ca5f8.hot-update.js.map