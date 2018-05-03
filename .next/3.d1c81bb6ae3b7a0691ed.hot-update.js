webpackHotUpdate(3,{

/***/ "./src/redux/applications/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["e"] = getApplicationsSaga;
/* harmony export (immutable) */ __webpack_exports__["c"] = createApplicationSaga;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getApplicationsAction; });
/* unused harmony export getApplicationsSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApplicationAction; });
/* unused harmony export createApplicationSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getApplicationsSelector; });
/* unused harmony export getApplicationsWithFullDataSelector */
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
  return Object(__WEBPACK_IMPORTED_MODULE_3_reselect__["createSelector"])(getApplicationsSelector(state), function (applications) {});
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

/***/ "./src/redux/clients/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["e"] = getClientsSaga;
/* harmony export (immutable) */ __webpack_exports__["c"] = createClientSaga;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getClientsAction; });
/* unused harmony export getClientsSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createClientAction; });
/* unused harmony export createClientSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getClientsSelector; });
/* unused harmony export getClientByIdSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__("./node_modules/redux-actions/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__("./src/api/index.js");


var _handleActions;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getClientsSaga),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(createClientSaga);

// Import libraries



// Import api


var clients = [];

// Export sagas
function getClientsSaga() {
  var result;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getClientsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */].clients.getClientsFromServer);

        case 2:
          result = _context.sent;
          _context.next = 5;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(getClientsSuccessAction(result));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function createClientSaga(action) {
  var result;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function createClientSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */].clients.createClient, action.payload);

        case 2:
          result = _context2.sent;
          _context2.next = 5;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(createClientSuccessAction(result));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// Export actions
var getClientsAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("GET_CLIENTS");
var getClientsSuccessAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("GET_CLIENTS_SUCCESS", function (result) {
  return result;
});

var createClientAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("CREATE_CLIENT", function (values) {
  return values;
});
var createClientSuccessAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("CREATE_CLIENT_SUCCESS", function (newStock) {
  return newStock;
});

// Export selectors
var getClientsSelector = function getClientsSelector(state) {
  return state.clientsReducer;
};
var getClientByIdSelector = function getClientByIdSelector(state, id) {
  return state.clientsReducer.find(function (client) {
    return client.id === id;
  });
};

// Export reducer
var clientsReducer = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["b" /* handleActions */])((_handleActions = {}, _defineProperty(_handleActions, getClientsSuccessAction, function (state, action) {
  return action.payload.data;
}), _defineProperty(_handleActions, createClientSuccessAction, function (state, actions) {
  return [].concat(_toConsumableArray(state), [actions.payload.data]);
}), _handleActions), clients);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(clients, "clients", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(getClientsSaga, "getClientsSaga", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(createClientSaga, "createClientSaga", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(getClientsAction, "getClientsAction", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(getClientsSuccessAction, "getClientsSuccessAction", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(createClientAction, "createClientAction", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(createClientSuccessAction, "createClientSuccessAction", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(getClientsSelector, "getClientsSelector", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(getClientByIdSelector, "getClientByIdSelector", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(clientsReducer, "clientsReducer", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/redux/stocks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["d"] = getStocksSaga;
/* harmony export (immutable) */ __webpack_exports__["b"] = createStockSaga;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getStocksAction; });
/* unused harmony export getStocksSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createStockAction; });
/* unused harmony export createStockSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getStocksSelector; });
/* unused harmony export getStockById */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stocksReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__("./node_modules/redux-actions/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__("./src/api/index.js");


var _handleActions;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getStocksSaga),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(createStockSaga);

// Import libraries



// Import api


var defaultState = [];

// Export sagas
function getStocksSaga() {
  var result;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getStocksSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */].stocks.getStocksFromServer);

        case 2:
          result = _context.sent;
          _context.next = 5;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(getStocksSuccessAction(result));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function createStockSaga(action) {
  var result;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function createStockSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */].stocks.createStock, action.payload);

        case 2:
          result = _context2.sent;
          _context2.next = 5;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(createStockSuccessAction(result));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// Export actions
var getStocksAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("GET_STOCKS");
var getStocksSuccessAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("GET_STOCKS_SUCCESS", function (result) {
  return result;
});

var createStockAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("CREATE_STOCK", function (values) {
  return values;
});
var createStockSuccessAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("CREATE_STOCK_SUCCESS", function (newStock) {
  return newStock;
});

// Export selectors
var getStocksSelector = function getStocksSelector(state) {
  return state.stocksReducer;
};
var getStockById = function getStockById(state, id) {
  return state.stocksReducer.find(function (stock) {
    return stock.id === id;
  });
};

// Export reducer
var stocksReducer = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["b" /* handleActions */])((_handleActions = {}, _defineProperty(_handleActions, getStocksSuccessAction, function (state, action) {
  return action.payload.data;
}), _defineProperty(_handleActions, createStockSuccessAction, function (state, actions) {
  return [].concat(_toConsumableArray(state), [actions.payload.data]);
}), _handleActions), defaultState);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultState, "defaultState", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(getStocksSaga, "getStocksSaga", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(createStockSaga, "createStockSaga", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(getStocksAction, "getStocksAction", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(getStocksSuccessAction, "getStocksSuccessAction", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(createStockAction, "createStockAction", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(createStockSuccessAction, "createStockSuccessAction", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(getStocksSelector, "getStocksSelector", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(getStockById, "getStockById", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  reactHotLoader.register(stocksReducer, "stocksReducer", "/Users/rusanov/WebstormProjects/investing/src/redux/stocks/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.d1c81bb6ae3b7a0691ed.hot-update.js.map