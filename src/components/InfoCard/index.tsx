import { useEffect, useState } from "react";
import Badges from "../Badges";
import InfoSkeleton from "./InfoSkeleton";

interface AdvisorSummary {
  client_count: number;
  total_equity: number;
  average_equity: number;
}

const InfoCard = () => {
  const [advisorSummary, setAdvisorSummary] = useState<AdvisorSummary | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {
          advisor_summary: {
            client_count: 120,
            total_equity: 1500000,
            average_equity: 12500,
          },
        };

        setAdvisorSummary(data.advisor_summary);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching API data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatCurrency = (value: number | null) => {
    if (value != null) {
      return `R$ ${value.toLocaleString("pt-BR")}`;
    }
    return "...";
  };

  if (isLoading) {
    return (
      <div className="mb-12">
        <InfoSkeleton />;
      </div>
    );
  }

  return (
    <div className="flex w-full h-28 gap-12">
      {advisorSummary && (
        <>
          <div className="flex-1 bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Clientes</h2>
            <div className="flex justify-between items-center">
              <p className="mr-2">{advisorSummary.client_count}</p>
              <Badges text="+10%" color="secondary" />
            </div>
          </div>
          <div className="flex-1 bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Patrimônio Sob Custódia
            </h2>
            <div className="flex justify-between items-center">
              <p className="mr-2">
                {formatCurrency(advisorSummary.total_equity)}
              </p>
              <Badges text="-5%" color="secondary" />
            </div>
          </div>
          <div className="flex-1 bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Patrimônio Médio</h2>
            <div className="flex justify-between items-center">
              <p className="mr-2">
                {formatCurrency(advisorSummary.average_equity)}
              </p>
              <Badges text="-5%" color="error" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoCard;
