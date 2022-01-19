import axios from "axios";

export const getCoin = (coinId) => {
  return axios
    .get(`https://api.coinstats.app/public/v1/coins/${coinId}?currency=USD`)
    .then((response) => {
      const { data } = response;
      return data;
    });
};
