import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export default function IndexPage() {
  const [fuelPrices, setFuelPrices] = useState([]);
  const [transportationPrices, setTransportationPrices] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const fuelPriceResponse = await axios.get('https://api.example.com/fuel-prices');
        const transportationPriceResponse = await axios.get('https://api.example.com/transportation-prices');

        setFuelPrices(fuelPriceResponse.data);
        setTransportationPrices(transportationPriceResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (fuelPrices.length > 0 && transportationPrices.length > 0) {
      const chartLabels = fuelPrices.map((item) => item.date);

      const fuelPriceData = fuelPrices.map((item) => item.price);
      const transportationPriceData = transportationPrices.map((item) => item.price);

      const chartData = {
        labels: chartLabels,
        datasets: [
          {
            label: 'Fuel Price',
            data: fuelPriceData,
            fill: false,
            borderColor: 'red',
            tension: 0.1,
          },
          {
            label: 'Transportation Price',
            data: transportationPriceData,
            fill: false,
            borderColor: 'blue',
            tension: 0.1,
          },
          {
            label: 'Ratio',
            data: fuelPriceData.map((item, index) => {
              return index < transportationPriceData.length
                ? (transportationPriceData[index].price / item.price).toFixed(2)
                : null;
            }),
            fill: false,
            borderColor: 'green',
            tension: 0.1,
          },
        ],
      };

      setChartData(chartData);
    }
  }, [fuelPrices, transportationPrices]);

  return (
    <div>
      <h1>Fuel and Transportation Prices</h1>
      {chartData.labels && <Line data={chartData} />}
    </div>
  );
}
