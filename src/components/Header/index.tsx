import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, IconButton, TextField } from "@mui/material";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-4 text-slate-900 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-12 rounded-2xl bg-slate-100 p-2 shadow-sm"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Dash Contábil
            </p>
            <h1 className="text-xl font-semibold text-slate-900">
              Controle suas carteiras de investimentos em um só lugar
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end sm:flex-1">
          <div className="flex w-full max-w-[560px] items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm sm:w-auto">
            <SearchIcon className="text-slate-400" />
            <TextField
              fullWidth
              type="search"
              variant="standard"
              size="small"
              placeholder="Pesquisar relatórios, clientes ou movimentos"
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: "#0f172a",
                  input: {
                    color: "#0f172a",
                  },
                },
              }}
            />
          </div>

          <IconButton className="rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 shadow-sm transition hover:bg-slate-100">
            <HelpOutlineIcon />
          </IconButton>

          <Badge badgeContent={3} color="error">
            <IconButton className="rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 shadow-sm transition hover:bg-slate-100">
              <NotificationsNoneIcon />
            </IconButton>
          </Badge>

          <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              V
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">Vinicius</p>
              <p className="text-xs text-slate-500">Gestor de carteiras</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
