// Import libraries
import { takeEvery, all } from 'redux-saga/effects'

// Import sagas and actions
import { getStocksSaga, getStocksAction } from "../stocks";

export default function* rootSaga() {
  yield takeEvery(getStocksAction, getStocksSaga);
}