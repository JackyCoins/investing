// Import libraries
import { takeEvery, takeLatest } from 'redux-saga/effects'

// Import sagas and actions
import { getStocksSaga, getStocksAction, createStockSaga, createStockAction } from "../stocks";

export default function* rootSaga() {
  yield takeEvery(getStocksAction, getStocksSaga);
  yield takeLatest(createStockAction, createStockSaga);
}