// Import libraries
import { handleActions } from "redux-actions";

const cities = [
  {
    id: 0,
    title: "Москва"
  },
  {
    id: 1,
    title: "Санкт-Петербург"
  }
];

// Export selectors
export const getCitiesSelector = state => state.citiesReducer;

// Export reducer
export const citiesReducer = handleActions({}, cities);
