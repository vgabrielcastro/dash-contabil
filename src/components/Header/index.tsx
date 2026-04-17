import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, IconButton, TextField, Tooltip } from "@mui/material";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import Logo from "../../assets/logo.svg";

type HeaderProps = {
  onOpenNav?: () => void;
};

const iconBtnClass =
  "rounded-full border-0 bg-slate-100/90 text-slate-600 shadow-none transition hover:bg-slate-200/90 hover:text-slate-900";

const iconBtnClassDesktop =
  "rounded-xl border border-slate-200/90 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900";

const Header = ({ onOpenNav }: HeaderProps) => {
  const hojeCompleto = format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR });
  const hojeMobile = format(new Date(), "d MMM", { locale: ptBR });

  const searchField = (
    <label className="group flex min-h-[40px] min-w-0 w-full cursor-text items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/90 px-3 py-1.5 transition focus-within:border-sky-300/80 focus-within:bg-white focus-within:shadow-[0_0_0_2px_rgba(14,165,233,0.12)] lg:rounded-2xl lg:border-slate-200/90 lg:px-3.5 lg:py-2 lg:shadow-inner lg:focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]">
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
        placeholder="Buscar…"
        inputProps={{ "aria-label": "Buscar no painel" }}
        InputProps={{
          disableUnderline: true,
          sx: {
            color: "#0f172a",
            fontSize: { xs: "0.8125rem", sm: "0.875rem" },
            "& input": {
              color: "#0f172a",
              padding: "4px 0",
              "&::placeholder": {
                color: "#94a3b8",
                opacity: 1,
              },
            },
          },
        }}
      />
    </label>
  );

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-sm supports-[backdrop-filter]:bg-white/90 lg:border-slate-200/80 lg:bg-white/80 lg:shadow-[0_8px_30px_rgb(15,23,42,0.06)] lg:backdrop-blur-xl lg:backdrop-saturate-150">
      <div className="mr-auto grid w-full max-w-[1800px] grid-cols-[auto,auto,minmax(0,1fr),auto] items-center gap-x-2 gap-y-2.5 px-[max(0.75rem,env(safe-area-inset-left))] pb-2 pr-[max(0.75rem,env(safe-area-inset-right))] pt-[max(0.5rem,env(safe-area-inset-top))] sm:gap-x-3 sm:px-5 sm:pb-3 sm:pt-[max(0.75rem,env(safe-area-inset-top))] lg:flex lg:items-center lg:gap-8 lg:px-6 lg:py-3.5 lg:pt-3.5 xl:px-8">
        {onOpenNav ? (
          <IconButton
            type="button"
            color="inherit"
            aria-label="Abrir menu de navegação"
            onClick={onOpenNav}
            className={`col-start-1 row-start-1 shrink-0 lg:hidden ${iconBtnClass}`}
            size="small"
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        ) : null}

        <div
          className={`row-start-1 shrink-0 ${onOpenNav ? "col-start-2" : "col-start-1"}`}
        >
          <div className="relative hidden shrink-0 lg:block">
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
          <img
            src={Logo}
            alt=""
            className="h-9 w-9 shrink-0 rounded-xl border border-slate-100 bg-white p-1.5 shadow-sm lg:hidden"
          />
        </div>

        <div
          className={`row-start-1 min-w-0 self-center lg:max-w-md xl:max-w-lg ${onOpenNav ? "col-start-3" : "col-start-2"}`}
        >
          <div className="hidden flex-wrap items-baseline gap-x-2 gap-y-0.5 lg:flex">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs sm:tracking-[0.22em]">
              Dash Contábil
            </p>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <p className="text-xs font-medium text-slate-600">{hojeCompleto}</p>
          </div>
          <h1 className="truncate text-sm font-semibold leading-tight tracking-tight text-slate-900 lg:mt-0.5 lg:text-lg">
            Painel de carteiras
          </h1>
          <p className="truncate text-[11px] font-medium text-slate-500 lg:hidden">
            {hojeMobile}
          </p>
          <p className="mt-0.5 hidden text-sm leading-snug text-slate-500 line-clamp-2 lg:block">
            Controle relatórios, clientes e movimentos em um só lugar.
          </p>
        </div>

        <div
          className={`row-start-1 flex shrink-0 items-center gap-0.5 self-center lg:hidden ${onOpenNav ? "col-start-4" : "col-start-3"}`}
        >
          <Tooltip title="Notificações">
            <Badge
              badgeContent={3}
              color="error"
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "0.6rem",
                  minWidth: 16,
                  height: 16,
                  padding: "0 4px",
                },
              }}
            >
              <IconButton
                size="small"
                aria-label="Notificações, 3 não lidas"
                className={iconBtnClass}
              >
                <NotificationsNoneIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Badge>
          </Tooltip>
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-xs font-bold text-white shadow-sm ring-2 ring-white/90"
            aria-label="Conta: Vinicius, gestor de carteiras"
          >
            V
          </button>
        </div>

        <div className="col-span-4 col-start-1 row-start-2 min-w-0 w-full lg:col-span-1 lg:row-start-1 lg:flex lg:min-w-0 lg:flex-1 lg:px-0">
          <div className="lg:max-w-2xl lg:flex-1 xl:max-w-3xl">{searchField}</div>
        </div>

        <div className="col-span-4 hidden shrink-0 items-center gap-1.5 lg:ml-auto lg:flex">
          <Tooltip title="Ajuda">
            <IconButton size="medium" aria-label="Ajuda" className={iconBtnClassDesktop}>
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
                className={iconBtnClassDesktop}
              >
                <NotificationsNoneIcon fontSize="small" />
              </IconButton>
            </Badge>
          </Tooltip>
          <button
            type="button"
            className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/80 py-1.5 pl-1.5 pr-3 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md sm:pr-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 text-sm font-bold text-white shadow-sm ring-2 ring-white">
              V
            </div>
            <div className="min-w-0 flex-1 text-left">
              <p className="truncate text-sm font-semibold text-slate-900">Vinicius</p>
              <p className="truncate text-xs text-slate-500">Gestor de carteiras</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
