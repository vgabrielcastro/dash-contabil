import { Tooltip } from "@mui/material";
import Chart from "react-apexcharts";
import TooltipIcon from "../../assets/tooltip-icon.svg";

const PatrimonyBrokerCard = () => {
  const chartOptions = {
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
        tickAmount: 6,
        labels: {
          formatter: function (val) {
            return val;
          },
        },
        axisTicks: {
          show: true,
          color: "#777",
        },
        axisBorder: {
          show: true,
          color: "#777",
        },
        min: 0,
        max: 50,
        tickPlacement: "between",
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
    <div className="mt-3 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 ">
        Patrimônio por Corretora
        <Tooltip title="Tooltip" placement="top-start">
          <img
            src={TooltipIcon}
            alt="arrow up"
            className="w-4 inline-block ml-2"
          />
        </Tooltip>
      </h2>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default PatrimonyBrokerCard;
