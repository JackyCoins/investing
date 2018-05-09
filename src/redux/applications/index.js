// Import libraries
import { handleActions, createAction } from "redux-actions";
import { call, put } from "redux-saga/effects";
import { createSelector } from "reselect";
import FileSaver from "file-saver";

// Import config
import { backendPaths } from "../../config";

// Import selectors
import { getStockById } from "../stocks";
import { getClientByIdSelector } from "../clients";

// Import api
import api from "../../api";

const defaultState = [];

// Export sagas
export function* getApplicationsSaga() {
  const result = yield call(api.applications.getApplicationsFromServer);

  yield put(getApplicationsSuccessAction(result));
}

export function* createApplicationSaga(action) {
  const result = yield call(api.applications.createApplication, action.payload);

  yield put(createApplicationSuccessAction(result));
}

export function* getAgreementSaga(action) {
  yield call(api.applications.createAgreement, action.payload);

  const link = document.createElement("a");
  link.setAttribute("href", `${backendPaths.assets.base}/agreement.docx`);
  link.setAttribute("download", "download");
  link.click();
}

// Export actions
export const getApplicationsAction = createAction("GET_APPLICATIONS");
export const getApplicationsSuccessAction = createAction(
  "GET_APPLICATIONS_SUCCESS",
  result => result
);

export const createApplicationAction = createAction(
  "CREATE_APPLICATION",
  values => values
);
export const createApplicationSuccessAction = createAction(
  "CREATE_APPLICATION_SUCCESS",
  newApplication => newApplication
);

export const getAgreementAction = createAction(
  "GET_AGREEMENT",
  applicationId => applicationId
);

// Export selectors
export const getApplicationsSelector = state => state.applicationsReducer;

export const getApplicationsWithFullDataSelector = state =>
  state.applicationsReducer.map(application => ({
    id: application.id,
    client: getClientByIdSelector(state, application.clientId),
    stocks: application.stockIds.map(stockId => getStockById(state, stockId))
  }));

// Export reducer
export const applicationsReducer = handleActions(
  {
    [getApplicationsSuccessAction]: (state, action) => action.payload.data,
    [createApplicationSuccessAction]: (state, actions) => [
      ...state,
      actions.payload.data
    ]
  },
  defaultState
);
