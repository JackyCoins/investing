// Import libraries
import { handleActions, createAction } from "redux-actions";

const defaultState = [
  {
    id: 0,
    title: "Tesla Motors",
    logo: "tesla.png",
    lucrativenessPerSixMonths: -27.035,
    earnings: 6.31,
    price: {
      currency: "USD",
      value: 293
    }
  },
  {
    id: 1,
    title: "Yandex",
    logo: "yandex.png",
    lucrativenessPerSixMonths: 76.00,
    earnings: -4.00,
    price: {
      currency: "RUB",
      value: 2.026
    }
  },
  {
    id: 2,
    title: "Apple",
    logo: "apple.png",
    lucrativenessPerSixMonths: -5.86,
    earnings: 0.87,
    price: {
      currency: "USD",
      value: 163.19
    }
  },
  {
    id: 3,
    title: "Intel Corporation",
    logo: "intel.png",
    lucrativenessPerSixMonths: 7.50,
    earnings: 0.26,
    price: {
      currency: "USD",
      value: 52.99
    }
  },
  {
    id: 4,
    title: "Facebook",
    logo: "facebook.png",
    lucrativenessPerSixMonths: -5.67,
    earnings: 0.81,
    price: {
      currency: "USD",
      value: 174.40
    }
  },
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

// Export selectors
export const getStocks = state => state.stocksReducer;

// Export reducer
export const stocksReducer = handleActions({

}, defaultState);