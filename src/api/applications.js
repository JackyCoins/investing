// Import libraries
import axios from "axios";

// Import config
import { backendPaths } from "../config";

export const getApplicationsFromServer = () =>
  axios.get(backendPaths.applications.base);

export const createApplication = values =>
  axios.post(backendPaths.applications.base, values);

export const createAgreement = applicationId =>
  axios.post(`${backendPaths.applications.agreement.base}/${applicationId}`);
