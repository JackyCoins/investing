// Import libraries
import { takeEvery, takeLatest } from "redux-saga/effects";

// Import sagas and actions
import {
  getStocksSaga,
  getStocksAction,
  createStockSaga,
  createStockAction
} from "../stocks";

import {
  getClientsSaga,
  getClientsAction,
  createClientSaga,
  createClientAction
} from "../clients";

import {
  getApplicationsSaga,
  getApplicationsAction,
  createApplicationSaga,
  createApplicationAction
} from "../applications";

export default function* rootSaga() {
  // stocks
  yield takeEvery(getStocksAction, getStocksSaga);
  yield takeLatest(createStockAction, createStockSaga);

  // clients
  yield takeEvery(getClientsAction, getClientsSaga);
  yield takeLatest(createClientAction, createClientSaga);

  // applications
  yield takeEvery(getApplicationsAction, getApplicationsSaga);
  yield takeLatest(createApplicationAction, createApplicationSaga);
}
