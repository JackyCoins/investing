webpackHotUpdate(3,{

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
/* unused harmony export getClientById */
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
var getClientById = function getClientById(state) {
  var foundedClient = state.clientsReducer.find();
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
  reactHotLoader.register(getClientById, "getClientById", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  reactHotLoader.register(clientsReducer, "clientsReducer", "/Users/rusanov/WebstormProjects/investing/src/redux/clients/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.47cb800f44ae710fa85d.hot-update.js.map