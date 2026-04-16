import { Tooltip } from "@mui/material";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import TooltipIcon from "../../assets/tooltip-icon.svg";
import CardShell from "../CardShell";

type ChartSeries = Array<{ data: Array<{ x: string; y: number[] }> }>;

const BrokerWalletsCard = () => {
  const [chartOptions, setChartOptions] = useState<{
    options: ApexOptions;
    series: ChartSeries;
  } | null>(null);

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
              barHeight: "64%",
            },
          },
          dataLabels: {
            enabled: false,
            style: {
              colors: ["#334155"],
            },
          },
          xaxis: {
            categories,
            labels: {
              style: {
                colors: "#475569",
                fontSize: "14px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: "#475569",
                fontSize: "14px",
              },
            },
          },
          grid: {
            strokeDashArray: 4,
            borderColor: "#e2e8f0",
          },
          tooltip: {
            theme: "light",
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
    <CardShell
      title="Carteiras por Corretora"
      subtitle="Distribuição dos principais parceiros"
      action={
        <Tooltip title="Dados simulados" placement="top-start">
          <img src={TooltipIcon} alt="tooltip" className="w-4" />
        </Tooltip>
      }
    >
      {chartOptions && (
        <div className="mt-2">
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="bar"
            height={340}
          />
        </div>
      )}
    </CardShell>
  );
};

export default BrokerWalletsCard;
