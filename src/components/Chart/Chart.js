import { useEffect, useState } from "react";
import { getAllCoins } from "../../services/getAllCoins";
import { getCoinChart } from "../../services/getCoinChart";
import LineChart from "../LineChart/LineChart";

const Chart = () => {
  const [coins, setCoins] = useState([]);

  const [coin, setCoin] = useState("bitcoin");
  const [period, setPeriod] = useState("24h");

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getAllCoins().then((data) => {
      setCoins(data.coins);
    });
  }, []);

  useEffect(() => {
    getCoinChart(period, coin).then((data) => {
      setChartData(data.chart);
    });
  }, [coin, period]);

  return (
    <>
      <h2 className="text-center mb-4 mt-4">Historical Global Average Price</h2>
      <section className="mb-5">
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
         
          <div className="d-flex align-items-center justify-content-center gap-2">
            <label htmlFor="coin">Coin:</label>
            <select
              name="coin"
              className="form-select w-25"
              style={{ minWidth: "250px" }}
              onChange={(e) => {
                setCoin(e.target.value);
              }}
            >
              {coins &&
                coins.map((coin) => (
                  <option key={coin.id} value={coin.id}>
                    {`${coin.name} (${coin.symbol})`}
                  </option>
                ))}
            </select>
          </div>

          <div className="d-flex align-items-center justify-content-center gap-2">
            <label htmlFor="period">Period:</label>
            <select
              name="period"
              className="form-select w-25"
              style={{ minWidth: "250px" }}
              onChange={(e) => {
                setPeriod(e.target.value);
              }}
            >
              <option value="24h">Last 24 Hours</option>
              <option value="1w">Last Week</option>
              <option value="1m">Last Month</option>
              <option value="3m">Last 3 Months</option>
              <option value="6m">Last 6 Months</option>
              <option value="1y">Last Year</option>
            </select>
          </div>
        </div>

        <LineChart chartData={chartData} coin={coin} />
      </section>
    </>
  );
};

export default Chart;
