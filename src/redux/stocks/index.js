// Import libraries
import { handleActions, createAction } from "redux-actions";
import { call, put } from "redux-saga/effects";

// Import api
import api from "../../api";

const defaultState = [];

// Export sagas
export function* getStocksSaga() {
  const result = yield call(api.stocks.getStocksFromServer);

  yield put(getStocksSuccessAction(result));
}

export function* createStockSaga(action) {
  const result = yield call(api.stocks.createStock, action.payload);

  yield put(createStockSuccessAction(result));
}

// Export actions
export const getStocksAction = createAction("GET_STOCKS");
export const getStocksSuccessAction = createAction("GET_STOCKS_SUCCESS", result => result);

export const createStockAction = createAction("CREATE_STOCK", values => values);
export const createStockSuccessAction = createAction("CREATE_STOCK_SUCCESS", newStock => newStock);

// Export selectors
export const getStocksSelector = state => state.stocksReducer;

// Export reducer
export const stocksReducer = handleActions({
  [getStocksSuccessAction]: (state, action) => action.payload.data,
  [createStockSuccessAction]: (state, actions) => [ ...state, actions.payload.data ]
}, defaultState);