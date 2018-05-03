webpackHotUpdate(3,{

/***/ "./src/components/Applications/ListOfApplicationsPage/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__("./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_applications__ = __webpack_require__("./src/redux/applications/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_clients__ = __webpack_require__("./src/redux/clients/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_stocks__ = __webpack_require__("./src/redux/stocks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Layout_MainContent_HeaderWithActions__ = __webpack_require__("./src/components/Layout/MainContent/HeaderWithActions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TableWithApplications__ = __webpack_require__("./src/components/Applications/ListOfApplicationsPage/TableWithApplications/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__FormOfCreateApplication__ = __webpack_require__("./src/components/Applications/ListOfApplicationsPage/FormOfCreateApplication/index.js");
var _jsxFileName = "/Users/rusanov/WebstormProjects/investing/src/components/Applications/ListOfApplicationsPage/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// Import libraries






// Import selectors and actions




// Import components




var ListOfApplicationsPage = function ListOfApplicationsPage(props) {
  return props.activeCreateMode ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Layout_MainContent_HeaderWithActions__["a" /* default */], {
      title: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438",
      actions: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["a" /* Button */],
        { key: "add", type: "primary", onClick: props.hideCreateMode, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u0441\u043F\u0438\u0441\u043A\u0443"
      )],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__FormOfCreateApplication__["a" /* default */], {
      createApplicationAction: props.createApplicationAction,
      clients: props.clients,
      stocks: props.stocks,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    })
  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Layout_MainContent_HeaderWithActions__["a" /* default */], {
      title: "\u0417\u0430\u044F\u0432\u043A\u0438",
      actions: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["a" /* Button */],
        { key: "add", type: "primary", onClick: props.showCreateMode, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
      )],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__TableWithApplications__["a" /* default */], { applications: props.applications, __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    })
  );
};

ListOfApplicationsPage.propTypes = {
  applications: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
  getApplicationsAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  activeCreateMode: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
  showCreateMode: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  hideCreateMode: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  createApplicationAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  getClientsAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  clients: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
  getStocksAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  stocks: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["a" /* compose */])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(function (state) {
  return {
    applications: Object(__WEBPACK_IMPORTED_MODULE_5__redux_applications__["f" /* getApplicationsWithFullDataSelector */])(state),
    clients: Object(__WEBPACK_IMPORTED_MODULE_6__redux_clients__["g" /* getClientsSelector */])(state),
    stocks: Object(__WEBPACK_IMPORTED_MODULE_7__redux_stocks__["f" /* getStocksSelector */])(state)
  };
}, {
  getApplicationsAction: __WEBPACK_IMPORTED_MODULE_5__redux_applications__["d" /* getApplicationsAction */],
  createApplicationAction: __WEBPACK_IMPORTED_MODULE_5__redux_applications__["b" /* createApplicationAction */],
  getClientsAction: __WEBPACK_IMPORTED_MODULE_6__redux_clients__["e" /* getClientsAction */],
  getStocksAction: __WEBPACK_IMPORTED_MODULE_7__redux_stocks__["d" /* getStocksAction */]
}), Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["d" /* withStateHandlers */])({
  activeCreateMode: false
}, {
  showCreateMode: function showCreateMode() {
    return function () {
      return { activeCreateMode: true };
    };
  },
  hideCreateMode: function hideCreateMode() {
    return function () {
      return { activeCreateMode: false };
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["b" /* lifecycle */])({
  componentDidMount: function componentDidMount() {
    this.props.getApplicationsAction();
    this.props.getClientsAction();
    this.props.getStocksAction();
  }
}))(ListOfApplicationsPage);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ListOfApplicationsPage, "ListOfApplicationsPage", "/Users/rusanov/WebstormProjects/investing/src/components/Applications/ListOfApplicationsPage/index.js");
  reactHotLoader.register(_default, "default", "/Users/rusanov/WebstormProjects/investing/src/components/Applications/ListOfApplicationsPage/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/applications/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["e"] = getApplicationsSaga;
/* harmony export (immutable) */ __webpack_exports__["c"] = createApplicationSaga;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getApplicationsAction; });
/* unused harmony export getApplicationsSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApplicationAction; });
/* unused harmony export createApplicationSuccessAction */
/* unused harmony export getApplicationsSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getApplicationsWithFullDataSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applicationsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__("./node_modules/redux-actions/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reselect__ = __webpack_require__("./node_modules/reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stocks__ = __webpack_require__("./src/redux/stocks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clients__ = __webpack_require__("./src/redux/clients/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api__ = __webpack_require__("./src/api/index.js");


var _handleActions;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getApplicationsSaga),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(createApplicationSaga);

// Import libraries




// Import selectors



// Import api


var defaultState = [];

// Export sagas
function getApplicationsSaga() {
  var result;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getApplicationsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_6__api__["a" /* default */].applications.getApplicationsFromServer);

        case 2:
          result = _context.sent;
          _context.next = 5;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(getApplicationsSuccessAction(result));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function createApplicationSaga(action) {
  var result;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function createApplicationSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_6__api__["a" /* default */].applications.createApplication, action.payload);

        case 2:
          result = _context2.sent;
          _context2.next = 5;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(createApplicationSuccessAction(result));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// Export actions
var getApplicationsAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("GET_APPLICATIONS");
var getApplicationsSuccessAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("GET_APPLICATIONS_SUCCESS", function (result) {
  return result;
});

var createApplicationAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("CREATE_APPLICATION", function (values) {
  return values;
});
var createApplicationSuccessAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("CREATE_APPLICATION_SUCCESS", function (newApplication) {
  return newApplication;
});

// Export selectors
var getApplicationsSelector = function getApplicationsSelector(state) {
  return state.applicationsReducer;
};

var getApplicationsWithFullDataSelector = function getApplicationsWithFullDataSelector(state) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_reselect__["createSelector"])(getApplicationsSelector(state), function (applications) {
    return applications.map(function (application) {
      return {
        id: application.id,
        client: Object(__WEBPACK_IMPORTED_MODULE_5__clients__["d" /* getClientByIdSelector */])(state, application.clientId),
        stocks: application.stockIds.map(function (stockId) {
          return Object(__WEBPACK_IMPORTED_MODULE_4__stocks__["c" /* getStockById */])(state, stockId);
        })
      };
    });
  });
};

// Export reducer
var applicationsReducer = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["b" /* handleActions */])((_handleActions = {}, _defineProperty(_handleActions, getApplicationsSuccessAction, function (state, action) {
  return action.payload.data;
}), _defineProperty(_handleActions, createApplicationSuccessAction, function (state, actions) {
  return [].concat(_toConsumableArray(state), [actions.payload.data]);
}), _handleActions), defaultState);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultState, "defaultState", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(getApplicationsSaga, "getApplicationsSaga", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(createApplicationSaga, "createApplicationSaga", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(getApplicationsAction, "getApplicationsAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(getApplicationsSuccessAction, "getApplicationsSuccessAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(createApplicationAction, "createApplicationAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(createApplicationSuccessAction, "createApplicationSuccessAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(getApplicationsSelector, "getApplicationsSelector", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(getApplicationsWithFullDataSelector, "getApplicationsWithFullDataSelector", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(applicationsReducer, "applicationsReducer", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/sagas/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stocks__ = __webpack_require__("./src/redux/stocks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clients__ = __webpack_require__("./src/redux/clients/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__applications__ = __webpack_require__("./src/redux/applications/index.js");


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(rootSaga);

// Import libraries


// Import sagas and actions






function rootSaga() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeEvery */])(__WEBPACK_IMPORTED_MODULE_2__stocks__["d" /* getStocksAction */], __WEBPACK_IMPORTED_MODULE_2__stocks__["e" /* getStocksSaga */]);

        case 2:
          _context.next = 4;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__stocks__["a" /* createStockAction */], __WEBPACK_IMPORTED_MODULE_2__stocks__["b" /* createStockSaga */]);

        case 4:
          _context.next = 6;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeEvery */])(__WEBPACK_IMPORTED_MODULE_3__clients__["e" /* getClientsAction */], __WEBPACK_IMPORTED_MODULE_3__clients__["f" /* getClientsSaga */]);

        case 6:
          _context.next = 8;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_3__clients__["b" /* createClientAction */], __WEBPACK_IMPORTED_MODULE_3__clients__["c" /* createClientSaga */]);

        case 8:
          _context.next = 10;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeEvery */])(__WEBPACK_IMPORTED_MODULE_4__applications__["d" /* getApplicationsAction */], __WEBPACK_IMPORTED_MODULE_4__applications__["e" /* getApplicationsSaga */]);

        case 10:
          _context.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__applications__["b" /* createApplicationAction */], __WEBPACK_IMPORTED_MODULE_4__applications__["c" /* createApplicationSaga */]);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootSaga, "rootSaga", "/Users/rusanov/WebstormProjects/investing/src/redux/sagas/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__("./node_modules/redux-saga/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger__ = __webpack_require__("./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sagas_index__ = __webpack_require__("./src/redux/sagas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clients__ = __webpack_require__("./src/redux/clients/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu__ = __webpack_require__("./src/redux/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stocks__ = __webpack_require__("./src/redux/stocks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__applications__ = __webpack_require__("./src/redux/applications/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// Import libraries





// Import sagas


// Import reducers





var reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  menuReducer: __WEBPACK_IMPORTED_MODULE_6__menu__["c" /* menuReducer */],
  stocksReducer: __WEBPACK_IMPORTED_MODULE_7__stocks__["g" /* stocksReducer */],
  clientsReducer: __WEBPACK_IMPORTED_MODULE_5__clients__["a" /* clientsReducer */],
  applicationsReducer: __WEBPACK_IMPORTED_MODULE_8__applications__["a" /* applicationsReducer */]
});

var sagaMiddleware = Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* default */])();

var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(reducers, Object(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_logger___default.a, sagaMiddleware)));

sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_4__sagas_index__["a" /* default */]);

var _default = store;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(reducers, "reducers", "/Users/rusanov/WebstormProjects/investing/src/redux/store/index.js");
  reactHotLoader.register(sagaMiddleware, "sagaMiddleware", "/Users/rusanov/WebstormProjects/investing/src/redux/store/index.js");
  reactHotLoader.register(store, "store", "/Users/rusanov/WebstormProjects/investing/src/redux/store/index.js");
  reactHotLoader.register(_default, "default", "/Users/rusanov/WebstormProjects/investing/src/redux/store/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.8f765c3d3daa4988d497.hot-update.js.map