import { CircularProgress, Tooltip } from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import TooltipIcon from "../../assets/tooltip-icon.svg";

const EvoluationCard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Dados fictícios para testes
    const mockData = [
      { date: "2024-01-01", value: 200000 },
      { date: "2024-01-15", value: 210000 },
      { date: "2024-02-01", value: 230000 },
      { date: "2024-02-15", value: 250000 },
      { date: "2024-03-01", value: 280000 },
    ];

    // Transformando os dados para o gráfico
    const categories = mockData.map((item) =>
      format(new Date(item.date), "dd MMM")
    );
    const seriesData = mockData.map((item) => item.value);

    setChartData({
      options: {
        dataLabels: { enabled: false },
        chart: {
          id: "evoluation-chart",
          type: "area",
          toolbar: { show: false },
        },
        xaxis: { categories },
        yaxis: {
          min: 0,
          max: Math.max(...seriesData) + 50000,
          tickAmount: 6,
          labels: {
            formatter: (val) => `${(val / 1000).toLocaleString()} mi`,
          },
        },
      },
      series: [
        { name: "Evolução de patrimônio sob custódia", data: seriesData },
      ],
    });
  }, []);

  if (!chartData) {
    return (
      <div className="m-3 rounded-xl pl-6 h-32 flex items-center gap-5 bg-white">
        <CircularProgress />
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Evolução de Patrimônio Sob Custódia
        <Tooltip title="Tooltip" placement="top-start">
          <img
            src={TooltipIcon}
            alt="tooltip"
            className="w-4 inline-block ml-2"
          />
        </Tooltip>
      </h2>
      <div className="w-full">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default EvoluationCard;
