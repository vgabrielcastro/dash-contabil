import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import CardShell from "../CardShell";
import ListCard from "./List";

const MovementsListCard = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <CardShell
      title="Movimentações"
      subtitle="Últimas operações do portfólio"
      action={
        <TextField
          type="search"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearchChange}
          placeholder="Buscar cliente"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start" size="small">
                  <SearchIcon className="text-slate-500" />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "16px",
              backgroundColor: "#f8fafc",
              paddingRight: 0,
            },
          }}
        />
      }
    >
      <ListCard search={search} />
    </CardShell>
  );
};

export default MovementsListCard;
