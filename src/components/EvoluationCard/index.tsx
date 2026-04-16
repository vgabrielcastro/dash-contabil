import { CircularProgress, Tooltip } from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import TooltipIcon from "../../assets/tooltip-icon.svg";
import CardShell from "../CardShell";

const EvoluationCard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const mockData = [
      { date: "2024-01-01", value: 200000 },
      { date: "2024-01-15", value: 210000 },
      { date: "2024-02-01", value: 230000 },
      { date: "2024-02-15", value: 250000 },
      { date: "2024-03-01", value: 280000 },
    ];

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
          zoom: { enabled: false },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.45,
            opacityTo: 0.1,
            stops: [0, 90, 100],
          },
        },
        xaxis: {
          categories,
          labels: {
            style: {
              colors: "#475569",
            },
          },
        },
        yaxis: {
          min: 0,
          max: Math.max(...seriesData) + 50000,
          tickAmount: 5,
          labels: {
            formatter: (val) => `R$ ${Math.round(val / 1000).toLocaleString()}k`,
            style: {
              colors: "#475569",
            },
          },
        },
        grid: {
          borderColor: "#e2e8f0",
          strokeDashArray: 4,
        },
        tooltip: {
          theme: "light",
        },
      },
      series: [
        { name: "Evolução de patrimônio", data: seriesData },
      ],
    });
  }, []);

  if (!chartData) {
    return (
      <div className="m-3 rounded-3xl bg-white/95 p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <CircularProgress size={28} />
          <span className="text-sm text-slate-600">Carregando evolução...</span>
        </div>
      </div>
    );
  }

  return (
    <CardShell
      title="Evolução de Patrimônio Sob Custódia"
      subtitle="Visão histórica do desempenho"
      action={
        <Tooltip title="Dados demonstrativos" placement="top-start">
          <img src={TooltipIcon} alt="tooltip" className="w-4" />
        </Tooltip>
      }
      className="min-h-[460px]"
    >
      <div className="mt-2 h-[380px] w-full">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={380}
        />
      </div>
    </CardShell>
  );
};

export default EvoluationCard;
