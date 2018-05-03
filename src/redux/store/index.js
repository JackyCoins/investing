// Import libraries
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

// Import sagas
import rootSaga from "../sagas/index";

// Import reducers
import { clientsReducer } from "../clients";
import { menuReducer } from "../menu";
import { stocksReducer } from "../stocks";
import { applicationsReducer } from "../applications";

const reducers = combineReducers({
  menuReducer,
  stocksReducer,
  clientsReducer,
  applicationsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
