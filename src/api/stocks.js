// Import libraries
import axios from "axios";

// Import config
import { backendPaths } from "../config";

export const getStocksFromServer = () => axios.get(backendPaths.stocks.base);

export const createStock = values => axios.post(backendPaths.stocks.base, values);