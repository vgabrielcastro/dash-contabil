import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import ListCard from "./List";

const MovementsListCard = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Movimentações</h2>
          <p className="text-sm font-thin">Lista das últimas movimentações</p>
        </div>
        <div className="flex items-center">
          <TextField
            // id="search"
            type="search"
            variant="outlined"
            size="small"
            value={search}
            onChange={handleSearchChange}
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
      <div>
        <ListCard search={search} />
      </div>
    </div>
  );
};

export default MovementsListCard;
