// Import libraries
import { handleActions } from "redux-actions";

const clients = [
  {
    id: 0,
    firstName: "Никита",
    lastName: "Русанов"
  },
  {
    id: 1,
    firstName: "Олег",
    lastName: "Иванов"
  }
];

// Export selectors
export const getClientsSelector = state => state.clientsReducer;

// Export reducer
export const clientsReducer = handleActions({

}, clients);