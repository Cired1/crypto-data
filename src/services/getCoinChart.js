import axios from "axios";

export const getCoinChart = (period, coinId) => {
  return axios
    .get(
      `https://api.coinstats.app/public/v1/charts?period=${period}&coinId=${coinId}`
    )
    .then((response) => {
      const { data } = response;
      return data;
    });
};
