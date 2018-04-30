// Import libraries
import { handleActions, createAction } from "redux-actions";
import { call, put } from "redux-saga/effects";

// Import api
import api from "../../api";

const defaultState = [
  {
    id: 5,
    title: "Microsoft Corporation",
    logo: "microsoft.png",
    lucrativenessPerSixMonths: 12.96,
    earnings: 0.32,
    price: {
      currency: "USD",
      value: 96.14
    }
  }
];

// Export sagas
export function* getStocksSaga() {
  const result = yield call(api.stocks.getStocksFromServer);
  console.log(result);

  yield put(getStocksSuccessAction(result));
}

// Export actions
export const getStocksAction = createAction("GET_STOCKS");
export const getStocksSuccessAction = createAction("GET_STOCKS_SUCCESS", result => result);

// Export selectors
export const getStocksSelector = state => state.stocksReducer;

// Export reducer
export const stocksReducer = handleActions({
  [getStocksSuccessAction]: (state, action) => action.payload.data
}, defaultState);