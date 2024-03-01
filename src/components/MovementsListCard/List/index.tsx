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
import { useEffect, useState } from "react";
import { fetchApiData } from "../../../api/apiService";
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

const ListCard = ({ search }) => {
  const [apiData, setApiData] = useState<Response | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApiData();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Função para filtrar os itens com base na pesquisa e na página atual
  const getFilteredItems = () => {
    const { clients_summary: clientsSummary = [] } = data || {};

    // Filtra as transações com base no nome do cliente e na pesquisa
    const filteredItems = clientsSummary.flatMap(
      ({ name, latest_transactions }) =>
        (latest_transactions || [])
          .filter(
            (transaction) =>
              name.toLowerCase().includes(search?.toLowerCase()) ||
              (transaction.clientName &&
                transaction.clientName
                  ?.toLowerCase()
                  .includes(search?.toLowerCase()))
          )
          .map((transaction) => ({
            clientName: name,
            ...transaction,
          }))
    );

    // Retorna os itens da página atual
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  };

  // Total de páginas
  const { data } = apiData || {};
  const { clients_summary: clientsSummary = [] } = data || {};
  const totalTransactions = clientsSummary.reduce(
    (total: any, { latest_transactions }: any) =>
      total + (latest_transactions?.length || 0),
    0
  );
  const totalPages = Math.ceil(totalTransactions / itemsPerPage);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // Verifica se há itens filtrados para renderizar
  const filteredItems = getFilteredItems();
  const showEmptyState = filteredItems.length === 0;

  return (
    <div>
      {showEmptyState ? (
        <div className=" mt-4 flex justify-center">
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
                      R$ {transaction.value.toLocaleString("pt-BR")}
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
