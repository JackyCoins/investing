webpackHotUpdate(3,{

/***/ "./src/redux/applications/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["g"] = getApplicationsSaga;
/* harmony export (immutable) */ __webpack_exports__["c"] = createApplicationSaga;
/* harmony export (immutable) */ __webpack_exports__["e"] = getAgreementSaga;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getApplicationsAction; });
/* unused harmony export getApplicationsSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createApplicationAction; });
/* unused harmony export createApplicationSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAgreementAction; });
/* unused harmony export getApplicationsSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getApplicationsWithFullDataSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applicationsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__("./node_modules/redux-actions/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reselect__ = __webpack_require__("./node_modules/reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stocks__ = __webpack_require__("./src/redux/stocks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clients__ = __webpack_require__("./src/redux/clients/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api__ = __webpack_require__("./src/api/index.js");


var _handleActions;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getApplicationsSaga),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(createApplicationSaga),
    _marked3 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getAgreementSaga);

// Import libraries





// Import config


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
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_8__api__["a" /* default */].applications.getApplicationsFromServer);

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
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_8__api__["a" /* default */].applications.createApplication, action.payload);

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

function getAgreementSaga(action) {
  var link;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getAgreementSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_8__api__["a" /* default */].applications.createAgreement, action.payload);

        case 2:
          link = document.createElement("a");

          link.setAttribute("href", __WEBPACK_IMPORTED_MODULE_5__config__["backendPaths"].assets.base + "/agreement.docx");
          link.setAttribute("download", "download");
          link.click();

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this);
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

var getAgreementAction = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])("GET_AGREEMENT", function (applicationId) {
  return applicationId;
});

// Export selectors
var getApplicationsSelector = function getApplicationsSelector(state) {
  return state.applicationsReducer;
};

var getApplicationsWithFullDataSelector = function getApplicationsWithFullDataSelector(state) {
  return state.applicationsReducer.map(function (application) {
    return {
      id: application.id,
      client: Object(__WEBPACK_IMPORTED_MODULE_7__clients__["d" /* getClientByIdSelector */])(state, application.clientId),
      stocks: application.stockIds.map(function (stockId) {
        return Object(__WEBPACK_IMPORTED_MODULE_6__stocks__["c" /* getStockById */])(state, stockId);
      })
    };
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
  reactHotLoader.register(getAgreementSaga, "getAgreementSaga", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(getApplicationsAction, "getApplicationsAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(getApplicationsSuccessAction, "getApplicationsSuccessAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(createApplicationAction, "createApplicationAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(createApplicationSuccessAction, "createApplicationSuccessAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
  reactHotLoader.register(getAgreementAction, "getAgreementAction", "/Users/rusanov/WebstormProjects/investing/src/redux/applications/index.js");
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["f"] = getClientsSaga;
/* harmony export (immutable) */ __webpack_exports__["c"] = createClientSaga;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getClientsAction; });
/* unused harmony export getClientsSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createClientAction; });
/* unused harmony export createClientSuccessAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClientsSelector; });
/* unused harmony export getClientsWithCitiesSelector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getClientByIdSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__("./node_modules/redux-actions/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__("./node_modules/reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__ = __webpack_require__("./node_modules/redux-saga/es/effects.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api__ = __webpack_require__("./src/api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cities__ = __webpack_require__("./src/redux/cities/index.js");


var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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


// Import selectors and actions


var clients = [];

// Export sagas
function getClientsSaga() {
  var result;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getClientsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */].clients.getClientsFromServer);

        case 2:
          result = _context.sent;
          _context.next = 5;
          return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["b" /* put */])(getClientsSuccessAction(result));

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
          return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["a" /* call */])(__WEBPACK_IMPORTED_MODULE_4__api__["a" /* default */].clients.createClient, action.payload);

        case 2:
          result = _context2.sent;
          _context2.next = 5;
          return Object(__WEBPACK_IMPORTED_MODULE_3_redux_saga_effects__["b" /* put */])(createClientSuccessAction(result));

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

var getClientsWithCitiesSelector = Object(__WEBPACK_IMPORTED_MODULE_2_reselect__["createSelector"])(getClientsSelector, __WEBPACK_IMPORTED_MODULE_5__cities__["b" /* getCitiesSelector */], function (clients, cities) {
  return clients.map(function (client) {
    var city = cities.find(function (city) {
      return client.city === city.id;
    });

    return _extends({}, client, {
      city: {
        id: client.city,
        title: city ? city.title : ""
      }
    });
  });
});

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
  reactHotLoader.register(getClientsWithCitiesSelector, "getClientsWithCitiesSelector", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(getClientByIdSelector, "getClientByIdSelector", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(clientsReducer, "clientsReducer", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
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
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeEvery */])(__WEBPACK_IMPORTED_MODULE_4__applications__["f" /* getApplicationsAction */], __WEBPACK_IMPORTED_MODULE_4__applications__["g" /* getApplicationsSaga */]);

        case 10:
          _context.next = 12;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["d" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_4__applications__["b" /* createApplicationAction */], __WEBPACK_IMPORTED_MODULE_4__applications__["c" /* createApplicationSaga */]);

        case 12:
          _context.next = 14;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* takeEvery */])(__WEBPACK_IMPORTED_MODULE_4__applications__["d" /* getAgreementAction */], __WEBPACK_IMPORTED_MODULE_4__applications__["e" /* getAgreementSaga */]);

        case 14:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cities__ = __webpack_require__("./src/redux/cities/index.js");
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
  applicationsReducer: __WEBPACK_IMPORTED_MODULE_8__applications__["a" /* applicationsReducer */],
  citiesReducer: __WEBPACK_IMPORTED_MODULE_9__cities__["a" /* citiesReducer */]
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
//# sourceMappingURL=3.becab917a7f41e45cfd4.hot-update.js.map