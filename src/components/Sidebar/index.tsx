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

  const toggleReports = () => {
    setShowReports(!showReports);
  };

  const toggleAdvisor = () => {
    setShowAdvisor(!showAdvisor);
  };

  return (
    <>
      <div className="flex flex-col gap-4 p-3 bg-white w-60">
        <div className="flex items-center mb-4">
          <img src={DashIcon} alt="iconDash" className="w-6 h-6 mr-5" />
          <a className="text-lg font-semibold text-black">Dashboard</a>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={ReportIcon} alt="iconReport" className="w-6 h-6 mr-5" />
            <h2 className="text-lg font-semibold text-black">Relatórios</h2>
          </div>
          <button
            onClick={toggleReports}
            className="w-6 h-6 focus:outline-none"
          >
            <ArrowDownIcon isOpen={showReports} />
          </button>
        </div>
        {showReports && <div className="ml-10"></div>}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={BagIcon} alt="iconBag" className="w-6 h-6 mr-5" />
            <h2 className="text-lg font-semibold text-black">Advisor</h2>
          </div>
          <div>
            <button
              onClick={toggleAdvisor}
              className="w-6 h-6 focus:outline-none"
            >
              <ArrowDownIcon isOpen={showAdvisor} />
            </button>
          </div>
        </div>
        {showAdvisor && (
          <div className="ml-10 mb-4">
            <h2 className="text-lg font-semibold text-gray-300">
              Lista de clientes
            </h2>
            <h2 className="text-lg font-semibold text-gray-300">Cobrança</h2>
            <h2 className="text-lg font-semibold text-gray-300">
              Estatísticas
            </h2>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={InboxIcon} alt="iconInbox" className="w-6 h-6 mr-5" />

            <h2 className="text-lg font-semibold text-black">Mensagens</h2>
          </div>

          <div>
            <BadgesNumber badgeContent={1} color="error" className="mr-4" />
          </div>
        </div>

        <Divider />
        <div className="flex items-center mb-4">
          <img src={SupportIcon} alt="iconSupport" className="w-6 h-6 mr-5" />
          <h2 className="text-lg font-semibold text-black">Ajuda</h2>
        </div>
        <div className="flex items-center gap-5  mt-auto pl-6">
          <img src={AdjustmentsIcon} alt="iconDash" className="w-6 h-6 mr-5" />
          <img src={Globe} alt="iconDash" className="w-6 h-6 mr-5" />
          <img src={CogIcon} alt="iconDash" className="w-6 h-6 mr-5" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
