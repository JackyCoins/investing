// Import libraries
import { handleActions, createAction } from "redux-actions";
import { createSelector } from "reselect";
import { call, put } from "redux-saga/effects";

// Import api
import api from "../../api";

// Import selectors and actions
import { getCitiesSelector } from "../cities";

const clients = [];

// Export sagas
export function* getClientsSaga() {
  const result = yield call(api.clients.getClientsFromServer);

  yield put(getClientsSuccessAction(result));
}

export function* createClientSaga(action) {
  const result = yield call(api.clients.createClient, action.payload);

  yield put(createClientSuccessAction(result));
}

// Export actions
export const getClientsAction = createAction("GET_CLIENTS");
export const getClientsSuccessAction = createAction(
  "GET_CLIENTS_SUCCESS",
  result => result
);

export const createClientAction = createAction(
  "CREATE_CLIENT",
  values => values
);
export const createClientSuccessAction = createAction(
  "CREATE_CLIENT_SUCCESS",
  newStock => newStock
);

// Export selectors
export const getClientsSelector = state => state.clientsReducer;

export const getClientsWithCitiesSelector = createSelector(
  getClientsSelector,
  getCitiesSelector,
  (clients, cities) =>
    clients.map(client => {
      const city = cities.find(city => client.city === city.id);

      return ({
        ...client,
        city: {
          id: client.city,
          title: city ? city.title : ""
        }
      })
    })
);

export const getClientByIdSelector = (state, id) =>
  state.clientsReducer.find(client => client.id === id);

// Export reducer
export const clientsReducer = handleActions(
  {
    [getClientsSuccessAction]: (state, action) => action.payload.data,
    [createClientSuccessAction]: (state, actions) => [
      ...state,
      actions.payload.data
    ]
  },
  clients
);
