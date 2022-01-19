import axios from "axios";

export const getAllCoins = () => {
  return axios
    .get("https://api.coinstats.app/public/v1/coins?currency=USD")
    .then((response) => {
      const { data } = response;
      return data;
    });
};
