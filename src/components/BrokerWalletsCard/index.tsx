import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import TooltipIcon from "../../assets/tooltip-icon.svg";

const BrokerWalletsCard = () => {
  const [chartOptions, setChartOptions] = useState<{ options: any; series: any } | null>(null);

  useEffect(() => {
    const generateFakeData = () => {
      const fakeClients = [
        { name: "XP Investimentos", value: 50000 },
        { name: "BTG Pactual", value: 35000 },
        { name: "Rico", value: 20000 },
        { name: "Clear", value: 15000 },
        { name: "Inter", value: 10000 },
      ];

      const categories = fakeClients.map((item) => item.name);
      const seriesData = fakeClients.map((item) => ({
        x: item.name,
        y: [item.value],
      }));

      setChartOptions({
        options: {
          chart: {
            type: "bar",
            height: 350,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
            style: {
              colors: ["#333"],
            },
          },
          yaxis: {
            categories: categories,
          },
        },
        series: [
          {
            data: seriesData,
          },
        ],
      });
    };

    generateFakeData();
  }, []);

  return (
    <div className="mt-3 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 ">
        Carteiras por Corretora
        <Tooltip title="Tooltip" placement="top-start">
          <img
            src={TooltipIcon}
            alt="arrow up"
            className="w-4 inline-block ml-2"
          />
        </Tooltip>
      </h2>
      {chartOptions && (
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={350}
        />
      )}
    </div>
  );
};

export default BrokerWalletsCard;
