import axios from "axios";

const baseURL = "https://api.exchangeratesapi.io/";

export const getLatestExchangeRate = (base = "USD") => {
  return axios.get(`${baseURL}latest`, { params: { base } });
};
