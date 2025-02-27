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
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import Badges from "../../Badges";
import EmptyState from "../../EmptyState";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
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
        Math.floor(Math.random() * 28) + 1
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
      transaction.clientName.toLowerCase().includes(search?.toLowerCase())
    );

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(fakeData.length / itemsPerPage);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
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
          <TableContainer component={Paper}>
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
                        { locale: ptBR }
                      )}
                    </StyledTableCell>
                    <StyledTableCell>
                      R$ {transaction.value.toLocaleString()}
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
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ListCard;
