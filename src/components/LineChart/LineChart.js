import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ chartData, coin }) => {
  return (
    <div className="d-flex justify-content-center">
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "USD",
              position: "left",
            },
          },
        }}
        data={{
          labels: chartData.map((period, index) => index),
          datasets: [
            {
              label: coin
                .charAt(0)
                .toUpperCase()
                .concat(coin.substring(1, coin.lenght)),
              data: chartData.map((data) => data[1]),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
