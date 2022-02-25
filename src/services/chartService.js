import axios from "axios";

const API_URL = "https://api.coinstats.app/public/v1/charts";

//Get chart
const getChart = async (period, id) => {
    const response = await axios.get(API_URL + `?period=${period}&coinId=${id}`);
    return response.data;
}

const chartService = {
    getChart
}

export default chartService;