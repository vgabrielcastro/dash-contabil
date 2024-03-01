import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import BellLogo from "../../assets/bell.svg";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-screen pl-5 py-3 bg-white">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 mr-3" />
        <div className="relative mt-2 rounded-md pl-5">
          <TextField
            type="search"
            variant="outlined"
            size="small"
            placeholder="Pesquisar"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: "16px",
              },
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-5 pr-6">
        <img src={BellLogo} alt="SearchLogo" className="h-8" />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
