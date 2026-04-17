import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, IconButton, TextField, Tooltip } from "@mui/material";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const hoje = format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR });

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 bg-white/80 shadow-[0_8px_30px_rgb(15,23,42,0.06)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mr-auto flex w-full max-w-[1800px] flex-col gap-4 px-4 py-3 sm:px-5 sm:py-3.5 lg:flex-row lg:items-center lg:gap-8 lg:px-6 xl:px-8">
        {/* Marca: só ocupa o necessário, com folga em relação ao sidebar (sem coluna fixa) */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4 lg:max-w-md xl:max-w-lg">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-sky-400/40 to-indigo-400/30 opacity-80 blur-[1px]"
              aria-hidden
            />
            <img
              src={Logo}
              alt=""
              className="relative h-11 w-11 rounded-2xl border border-white bg-white p-2 shadow-sm sm:h-12 sm:w-12"
            />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs sm:tracking-[0.22em]">
                Dash Contábil
              </p>
              <span className="hidden text-slate-300 sm:inline" aria-hidden>
                ·
              </span>
              <p className="max-w-full truncate text-xs font-medium text-slate-600 sm:max-w-none sm:whitespace-normal">
                {hoje}
              </p>
            </div>
            <h1 className="mt-0.5 text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-lg">
              Painel de carteiras
            </h1>
            <p className="mt-0.5 hidden text-sm text-slate-500 sm:line-clamp-2 sm:block">
              Controle relatórios, clientes e movimentos em um só lugar.
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:gap-5">
          <label className="group flex min-w-0 w-full flex-1 cursor-text items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-slate-50/90 px-3.5 py-2 shadow-inner transition focus-within:border-sky-300 focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.15)] sm:px-4 lg:max-w-2xl xl:max-w-3xl">
            <span className="sr-only">Buscar</span>
            <SearchIcon
              className="shrink-0 text-slate-400 transition group-focus-within:text-sky-600"
              fontSize="small"
            />
            <TextField
              fullWidth
              type="search"
              variant="standard"
              size="small"
              placeholder="Relatórios, clientes, movimentos…"
              inputProps={{ "aria-label": "Buscar no painel" }}
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: "#0f172a",
                  fontSize: "0.875rem",
                  "& input": {
                    color: "#0f172a",
                    padding: "2px 0",
                    "&::placeholder": {
                      color: "#94a3b8",
                      opacity: 1,
                    },
                  },
                },
              }}
            />
          </label>

          <div className="flex w-full shrink-0 items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-2 lg:ml-auto">
            <div className="flex items-center gap-1">
              <Tooltip title="Ajuda">
                <IconButton
                  size="medium"
                  aria-label="Ajuda"
                  className="rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                >
                  <HelpOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Notificações">
                <Badge
                  badgeContent={3}
                  color="error"
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.65rem",
                      minWidth: 18,
                      height: 18,
                    },
                  }}
                >
                  <IconButton
                    size="medium"
                    aria-label="Notificações, 3 não lidas"
                    className="rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <NotificationsNoneIcon fontSize="small" />
                  </IconButton>
                </Badge>
              </Tooltip>
            </div>

            <button
              type="button"
              className="flex min-w-0 max-w-[220px] items-center gap-3 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/80 py-1.5 pl-1.5 pr-3 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md sm:max-w-none sm:pr-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 text-sm font-bold text-white shadow-sm ring-2 ring-white">
                V
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  Vinicius
                </p>
                <p className="truncate text-xs text-slate-500">
                  Gestor de carteiras
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
