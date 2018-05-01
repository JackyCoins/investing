// Import libraries
import axios from "axios";

// Import config
import { backendPaths } from "../config";

export const getClientsFromServer = () => axios.get(backendPaths.clients.base);

export const createClient = values => axios.post(backendPaths.clients.base, values);