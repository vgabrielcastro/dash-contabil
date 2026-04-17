import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
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

export type SidebarProps = {
  mobileOpen: boolean;
  onMobileClose: () => void;
};

function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const [showReports, setShowReports] = useState(false);
  const [showAdvisor, setShowAdvisor] = useState(false);

  const panelClass =
    "flex max-h-screen w-[min(280px,calc(100vw-1rem))] flex-col gap-5 overflow-y-auto bg-white pb-[max(1.25rem,env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] text-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.12)] " +
    "fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-out " +
    (mobileOpen ? "translate-x-0" : "-translate-x-full") +
    " lg:static lg:z-auto lg:h-auto lg:max-h-none lg:w-[280px] lg:shrink-0 lg:translate-x-0 lg:gap-6 lg:overflow-visible lg:p-5 lg:shadow-[0_20px_50px_rgba(15,23,42,0.12)]";

  return (
    <aside className={panelClass} role="navigation" aria-label="Menu principal">
      <div className="sticky top-0 z-10 mb-1 flex justify-end bg-white lg:hidden">
        <IconButton
          type="button"
          aria-label="Fechar menu"
          onClick={onMobileClose}
          className="text-slate-600"
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <img src={DashIcon} alt="Dashboard" className="h-10 w-10 rounded-3xl bg-sky-100 p-2" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Dash
            </p>
            <p className="text-base font-semibold text-slate-900">Contábil</p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
          Beta
        </div>
      </div>

      <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
            V
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Vinicius</p>
            <p className="text-xs text-slate-500">Administrador</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-white px-3 py-2 text-center text-xs font-semibold text-slate-700 shadow-sm">
            18 contas
          </div>
          <div className="rounded-3xl bg-white px-3 py-2 text-center text-xs font-semibold text-slate-700 shadow-sm">
            +R$ 1.4M
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          onClick={() => setShowReports(!showReports)}
        >
          <div className="flex items-center gap-3">
            <img src={ReportIcon} alt="Relatórios" className="h-5 w-5" />
            <span>Relatórios</span>
          </div>
          <ArrowDownIcon isOpen={showReports} />
        </button>
        {showReports && (
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <button
              type="button"
              className="w-full rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100"
              onClick={onMobileClose}
            >
              Visão geral
            </button>
            <button
              type="button"
              className="w-full rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100"
              onClick={onMobileClose}
            >
              Análises
            </button>
          </div>
        )}

        <button
          type="button"
          className="flex w-full items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          onClick={() => setShowAdvisor(!showAdvisor)}
        >
          <div className="flex items-center gap-3">
            <img src={BagIcon} alt="Advisor" className="h-5 w-5" />
            <span>Advisor</span>
          </div>
          <ArrowDownIcon isOpen={showAdvisor} />
        </button>
        {showAdvisor && (
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <button
              type="button"
              className="w-full rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100"
              onClick={onMobileClose}
            >
              Lista de clientes
            </button>
            <button
              type="button"
              className="w-full rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100"
              onClick={onMobileClose}
            >
              Cobrança
            </button>
            <button
              type="button"
              className="w-full rounded-2xl px-3 py-2 text-left transition hover:bg-slate-100"
              onClick={onMobileClose}
            >
              Estatísticas
            </button>
          </div>
        )}

        <button
          type="button"
          className="flex w-full items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-900 transition hover:bg-slate-100"
          onClick={onMobileClose}
        >
          <div className="flex items-center gap-3">
            <img src={InboxIcon} alt="Mensagens" className="h-5 w-5" />
            <span>Mensagens</span>
          </div>
          <BadgesNumber badgeContent={1} color="error" />
        </button>
      </nav>

      <Divider className="border-slate-200" />

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-700 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Precisa de ajuda?</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Encontre artigos, tutoriais e suporte rápido para acompanhar suas finanças.
        </p>
        <button
          type="button"
          className="mt-4 flex w-full items-center gap-3 rounded-2xl px-1 py-2 text-left transition hover:bg-slate-100"
          onClick={onMobileClose}
        >
          <img src={SupportIcon} alt="" aria-hidden className="h-5 w-5" />
          <span className="text-sm font-medium text-slate-900">Central de Suporte</span>
        </button>
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
        <img src={AdjustmentsIcon} alt="Ajustes" className="h-5 w-5" />
        <img src={Globe} alt="Idioma" className="h-5 w-5" />
        <img src={CogIcon} alt="Configurações" className="h-5 w-5" />
      </div>
    </aside>
  );
}

export default Sidebar;
