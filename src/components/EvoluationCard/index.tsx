import { CircularProgress, Tooltip } from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchApiData } from "../../api/apiService";
import TooltipIcon from "../../assets/tooltip-icon.svg";

const EvoluationCard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chame a função para buscar os dados da API
        const apiResponse = await fetchApiData();

        // Extraia os dados relevantes para o gráfico
        const equityHistory = apiResponse.data.advisor_summary.equity_history;

        // Mapeie os dados para o formato esperado pelo gráfico
        const seriesData = [];
        const categories = [];
        equityHistory.forEach((item) => {
          // Formate as datas para exibir como "01 Apr"
          const date = new Date(item.date);
          categories.push(format(date, "dd MMM"));
          seriesData.push(item.value);
        });

        // Atualize o estado do chartData com os dados relevantes
        setChartData({
          options: {
            dataLabels: {
              enabled: false,
            },
            chart: {
              id: "evoluation-chart",
              type: "area",
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              categories: categories,
            },
            yaxis: {
              min: 0,
              max: Math.max(...seriesData) + 50000, 
              tickAmount: 6,
              labels: {
                formatter: (val) => {
                  // Formata os números para exibir como "240 mi"
                  return (
                    (val / 1000).toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                    }) + " mi"
                  );
                },
              },
            },
          },
          series: [
            {
              name: "Evolução de patrimônio sob custódia",
              data: seriesData,
            },
          ],
        });
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div className="m-3 rounded-xl pl-6 h-32 flex items-center gap-5 bg-white">
      <CircularProgress />
      Loading...
      </div>;
  }

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Evolução de Patrimônio Sob Custódia
        <Tooltip title="Tooltip" placement="top-start">
          <img
            src={TooltipIcon}
            alt="arrow up"
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
