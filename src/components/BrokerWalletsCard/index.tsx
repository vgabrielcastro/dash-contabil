import { Tooltip } from "@mui/material";
import type { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import TooltipIcon from "../../assets/tooltip-icon.svg";
import CardShell from "../CardShell";

type ChartSeries = Array<{ data: Array<{ x: string; y: number[] }> }>;

const fakeClients = [
  { name: "XP Investimentos", value: 50000 },
  { name: "BTG Pactual", value: 35000 },
  { name: "Rico", value: 20000 },
  { name: "Clear", value: 15000 },
  { name: "Inter", value: 10000 },
];

function buildChart(compact: boolean): { options: ApexOptions; series: ChartSeries; height: number } {
  const height = compact ? 300 : 360;
  const categories = fakeClients.map((item) =>
    compact && item.name.length > 13 ? `${item.name.slice(0, 12)}…` : item.name,
  );
  const seriesData = fakeClients.map((item) => ({
    x: item.name,
    y: [item.value],
  }));

  const labelSize = compact ? "11px" : "14px";
  const axisLabelSize = compact ? "10px" : "14px";

  return {
    height,
    options: {
      chart: {
        type: "bar",
        height,
        toolbar: { show: false },
        animations: { enabled: true, speed: 280 },
        offsetX: compact ? -4 : 0,
        offsetY: compact ? -4 : 0,
        parentHeightOffset: 0,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: compact ? "58%" : "64%",
          borderRadius: compact ? 3 : 4,
        },
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories,
        labels: {
          style: {
            colors: "#475569",
            fontSize: labelSize,
            fontWeight: 500,
          },
          maxHeight: compact ? 48 : 56,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#475569",
            fontSize: axisLabelSize,
          },
        },
      },
      grid: {
        strokeDashArray: 4,
        borderColor: "#e2e8f0",
        padding: {
          top: compact ? 0 : 4,
          right: compact ? 4 : 12,
          bottom: compact ? 4 : 8,
          left: compact ? 0 : 4,
        },
      },
      tooltip: { theme: "light" },
    },
    series: [{ data: seriesData }],
  };
}

const BrokerWalletsCard = () => {
  const [chart, setChart] = useState<ReturnType<typeof buildChart> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width:639px)");
    const sync = () => setChart(buildChart(mq.matches));
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <CardShell
      title="Carteiras por Corretora"
      subtitle="Distribuição dos principais parceiros"
      action={
        <Tooltip title="Dados simulados" placement="top-start">
          <img src={TooltipIcon} alt="Informação" className="w-4 opacity-70" />
        </Tooltip>
      }
      className="min-h-0 sm:min-h-[420px]"
    >
      {chart ? (
        <div className="mt-1 w-full min-w-0 overflow-x-hidden sm:mt-2">
          <div className="w-full max-w-full" style={{ height: chart.height }}>
            <Chart
              options={chart.options}
              series={chart.series}
              type="bar"
              height={chart.height}
            />
          </div>
        </div>
      ) : null}
    </CardShell>
  );
};

export default BrokerWalletsCard;
