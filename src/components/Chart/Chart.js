import { useEffect, useState } from "react";
import LineChart from "../LineChart/LineChart";
import coinService from "../../services/coinService";
import chartService from "../../services/chartService";
import Select from "../Select/Select";
import { periodOptions } from "../../data";

const Chart = () => {
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState("bitcoin");
  const [period, setPeriod] = useState("24h");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    coinService.getCoins()
      .then((data) => setCoins(data.coins));
  }, []);

  useEffect(() => {
    chartService.getChart(period, coin)
      .then((data) => setChartData(data.chart));
  }, [coin, period]);

  const handleCoin = (e) => {
    setCoin(e.target.value);
  }

  const handlePeriod = (e) => {
    setPeriod(e.target.value);
  }

  return (
    <>
      <h2 className="text-center mb-4 mt-4">Historical Global Average Price</h2>
      <section className="mb-5">
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          <Select
            data={coins}
            handleChange={handleCoin}
            name="coin"
            title="Coin: "
          />
          <Select
            data={periodOptions}
            handleChange={handlePeriod}
            name="period"
            title="Period: "
          />
        </div>

        <LineChart
          chartData={chartData}
          coin={coin}
        />
      </section>
    </>
  );
};

export default Chart;
