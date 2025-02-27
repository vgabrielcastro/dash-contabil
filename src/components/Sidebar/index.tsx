import { useState } from "react";
import AdjustmentsIcon from "../../assets/adjustments.svg";
import CogIcon from "../../assets/cog.svg";
import DashIcon from "../../assets/dash-icon.svg";
import ReportIcon from "../../assets/document-report.svg";
import Globe from "../../assets/globe.svg";
import InboxIcon from "../../assets/inbox-in.svg";
import BagIcon from "../../assets/shopping-bag.svg";
import SupportIcon from "../../assets/support.svg";
import ArrowDownIcon from "../ArrowDown";
import BadgesNumber from "../BadgesNumber";
import Divider from "../Divider";

function Sidebar() {
  const [showReports, setShowReports] = useState(false);
  const [showAdvisor, setShowAdvisor] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4 bg-white w-64 shadow-lg h-full">
      <div className="flex items-center mb-6 cursor-pointer hover:opacity-80">
        <img src={DashIcon} alt="Dashboard" className="w-6 h-6 mr-4" />
        <span className="text-lg font-medium text-gray-800">Dashboard</span>
      </div>

      {/* Relatórios */}
      <div
        className="flex items-center justify-between cursor-pointer hover:opacity-80 mb-2"
        onClick={() => setShowReports(!showReports)}
      >
        <div className="flex items-center">
          <img src={ReportIcon} alt="Relatórios" className="w-6 h-6 mr-4" />
          <span className="text-lg font-medium text-gray-800">Relatórios</span>
        </div>
        <ArrowDownIcon isOpen={showReports} />
      </div>
      {showReports && (
        <div className="ml-10 text-gray-600 space-y-2 text-sm">
          <p className="cursor-pointer hover:text-gray-900">Visão Geral</p>
          <p className="cursor-pointer hover:text-gray-900">Análises</p>
        </div>
      )}

      {/* Advisor */}
      <div
        className="flex items-center justify-between cursor-pointer hover:opacity-80 mb-2"
        onClick={() => setShowAdvisor(!showAdvisor)}
      >
        <div className="flex items-center">
          <img src={BagIcon} alt="Advisor" className="w-6 h-6 mr-4" />
          <span className="text-lg font-medium text-gray-800">Advisor</span>
        </div>
        <ArrowDownIcon isOpen={showAdvisor} />
      </div>
      {showAdvisor && (
        <div className="ml-10 text-gray-600 space-y-2 text-sm">
          <p className="cursor-pointer hover:text-gray-900">
            Lista de Clientes
          </p>
          <p className="cursor-pointer hover:text-gray-900">Cobrança</p>
          <p className="cursor-pointer hover:text-gray-900">Estatísticas</p>
        </div>
      )}

      {/* Mensagens */}
      <div className="flex items-center justify-between cursor-pointer hover:opacity-80 mb-2">
        <div className="flex items-center">
          <img src={InboxIcon} alt="Mensagens" className="w-6 h-6 mr-4" />
          <span className="text-lg font-medium text-gray-800">Mensagens</span>
        </div>
        <BadgesNumber badgeContent={1} color="error" className="mr-4" />
      </div>

      <Divider />

      {/* Ajuda */}
      <div className="flex items-center cursor-pointer hover:opacity-80 mb-4">
        <img src={SupportIcon} alt="Ajuda" className="w-6 h-6 mr-4" />
        <span className="text-lg font-medium text-gray-800">Ajuda</span>
      </div>

      {/* Ícones de Configuração */}
      <div className="flex items-center justify-center gap-6 mt-auto pt-4 border-t">
        <img
          src={AdjustmentsIcon}
          alt="Ajustes"
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <img
          src={Globe}
          alt="Idioma"
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
        <img
          src={CogIcon}
          alt="Configurações"
          className="w-6 h-6 cursor-pointer hover:opacity-80"
        />
      </div>
    </div>
  );
}

export default Sidebar;
