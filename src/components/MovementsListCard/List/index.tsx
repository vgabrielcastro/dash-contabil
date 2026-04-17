import { Pagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";
import Badges from "../../Badges";
import EmptyState from "../../EmptyState";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  transition: "background-color 0.2s ease",
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
  "& td, & th": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const generateFakeData = () => {
  const clients = [
    "João Silva",
    "Maria Oliveira",
    "Carlos Santos",
    "Ana Souza",
  ];
  const transactionTypes = ["Depósito", "Resgate"];

  return clients.flatMap((client) => {
    return Array.from({ length: 5 }, () => ({
      clientName: client,
      date: new Date(
        2024,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1,
      ),
      value: (Math.random() * 1000).toFixed(2),
      type: transactionTypes[
        Math.floor(Math.random() * transactionTypes.length)
      ],
    }));
  });
};

interface ListCardProps {
  search: string;
}

const ListCard = ({ search }: ListCardProps) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const fakeData = generateFakeData();

  const getFilteredItems = () => {
    const filteredItems = fakeData.filter((transaction) =>
      transaction.clientName.toLowerCase().includes(search?.toLowerCase()),
    );

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  };

  const totalPages = Math.max(1, Math.ceil(fakeData.length / itemsPerPage));

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const filteredItems = getFilteredItems();
  const showEmptyState = filteredItems.length === 0;

  return (
    <div>
      {showEmptyState ? (
        <div className="mt-4 flex justify-center">
          <EmptyState />
        </div>
      ) : (
        <>
          <TableContainer
            component={Paper}
            sx={{
              borderRadius: 4,
              boxShadow: "0 20px 50px rgba(15,23,42,0.08)",
              overflowX: "auto",
              overflowY: "hidden",
            }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Cliente</StyledTableCell>
                  <StyledTableCell>Data</StyledTableCell>
                  <StyledTableCell>Valor</StyledTableCell>
                  <StyledTableCell>Tipo</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredItems.map((transaction, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{transaction.clientName}</StyledTableCell>
                    <StyledTableCell>
                      {format(
                        new Date(transaction.date),
                        "dd 'de' MMMM 'de' yyyy",
                        { locale: ptBR },
                      )}
                    </StyledTableCell>
                    <StyledTableCell>
                      R${" "}
                      {Number(transaction.value).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </StyledTableCell>
                    <StyledTableCell>
                      <Badges
                        text={transaction.type}
                        color={
                          transaction.type === "Resgate" ? "error" : "secondary"
                        }
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="mt-4 flex justify-center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChangePage}
              color="primary"
              shape="rounded"
              size="small"
              siblingCount={0}
              boundaryCount={1}
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                "& .MuiPagination-ul": { flexWrap: "wrap", justifyContent: "center", gap: 0.5 },
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ListCard;
