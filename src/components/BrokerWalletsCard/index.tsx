import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { fetchApiData } from "../../api/apiService";
import TooltipIcon from "../../assets/tooltip-icon.svg";

const BrokerWalletsCard = () => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiResponse = await fetchApiData();
        const { clients_summary: clientsSummary } = apiResponse.data;
        
        const categories = clientsSummary.map((item) => item.name);
        const seriesData = clientsSummary.map((item) => ({
          x: item.name,
          y: [item.latest_transactions.reduce((acc, curr) => acc + curr.value, 0)],
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
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
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
