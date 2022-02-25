import axios from "axios";

const API_URL = "https://api.coinstats.app/public/v1/news";

//Get news
const getNews = async (filter) => {
    const response = await axios.get(API_URL + `/${filter}?skip=0&limit=20`);
    return response.data;
}

const newService = {
    getNews
}

export default newService;