import { Tooltip } from "@mui/material";
import Chart from "react-apexcharts";
import TooltipIcon from "../../assets/tooltip-icon.svg";
import CardShell from "../CardShell";

const PatrimonyBrokerCard = () => {
  const chartOptions = {
    options: {
      chart: {
        type: "bar" as const,
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "68%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        tickAmount: 6,
        labels: {
          formatter: function (val: number) {
            return String(val);
          },
          style: {
            colors: "#475569",
          },
        },
        axisTicks: {
          show: true,
          color: "#cbd5e1",
        },
        axisBorder: {
          show: true,
          color: "#cbd5e1",
        },
        min: 0,
        max: 50,
        tickPlacement: "between",
      },
      grid: {
        borderColor: "#e2e8f0",
        strokeDashArray: 4,
      },
    },
    series: [
      {
        name: "Quantidade",
        data: [
          {
            x: "C.A",
            y: 44,
          },
          {
            x: "C.B",
            y: 44,
          },
          {
            x: "C.C",
            y: 10,
          },
        ],
      },
    ],
  };

  return (
    <CardShell
      title="Patrimônio por Corretora"
      subtitle="Contagem por corretora"
      action={
        <Tooltip title="Dados simulados" placement="top-start">
          <img src={TooltipIcon} alt="tooltip" className="w-4" />
        </Tooltip>
      }
      className="min-h-[420px]"
    >
      <div className="mt-2 h-[360px] w-full">
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={360}
        />
      </div>
    </CardShell>
  );
};

export default PatrimonyBrokerCard;
