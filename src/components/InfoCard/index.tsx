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
      <div className="mb-8">
        <InfoSkeleton />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {advisorSummary && (
        <>
          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Clientes
            </span>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-4xl font-semibold text-slate-900">
                  {advisorSummary.client_count}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Total de clientes ativos
                </p>
              </div>
              <Badges text="+10%" color="secondary" />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Patrimônio
            </span>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-4xl font-semibold text-slate-900">
                  {formatCurrency(advisorSummary.total_equity)}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Abaixo do histórico do portfólio
                </p>
              </div>
              <Badges text="-5%" color="secondary" />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Médio
            </span>
            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-4xl font-semibold text-slate-900">
                  {formatCurrency(advisorSummary.average_equity)}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Média por cliente
                </p>
              </div>
              <Badges text="-5%" color="error" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoCard;
