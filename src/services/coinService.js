import axios from "axios";

const API_URL = "https://api.coinstats.app/public/v1/coins";

//Get all coins
const getCoins = async () => {
    const response = await axios.get(API_URL + "?currency=USD");
    return response.data;
}

//Get coin
const getCoin = async (id) => {
    const response = await axios.get(API_URL + `/${id}?currency=USD`);
    return response.data;
}

const coinService = {
    getCoins,
    getCoin
}

export default coinService;