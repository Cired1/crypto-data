import axios from "axios";

export const getNews = (filter) => {
  return axios
    .get(`https://api.coinstats.app/public/v1/news/${filter}?skip=0&limit=20`)
    .then((response) => {
      const { data } = response;
      return data;
    });
};
