// Import libraries
import { handleActions, createAction } from "redux-actions";
import { call, put } from "redux-saga/effects";

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

// Export actions
export const getApplicationsAction = createAction("GET_APPLICATIONS");
export const getApplicationsSuccessAction = createAction("GET_APPLICATIONS_SUCCESS", result => result);

export const createApplicationAction = createAction("CREATE_APPLICATION", values => values);
export const createApplicationSuccessAction = createAction("CREATE_APPLICATION_SUCCESS", newApplication => newApplication);

// Export selectors
export const getApplicationsSelector = state => state.applicationsReducer;

// Export reducer
export const applicationsReducer = handleActions({
  [getApplicationsSuccessAction]: (state, action) => action.payload.data,
  [createApplicationSuccessAction]: (state, actions) => [ ...state, actions.payload.data ]
}, defaultState);