import { makeStyles } from "@material-ui/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import Paper from "@material-ui/core/Paper";
import Row from "./TableRow";
import "./Table.css";

export default function CollapsibleTable({
  data,
  filtro,
  titulos,
  titulosDetalles,
  recarga,
  setRecarga,
}) {
  const styleHead = useHeader();
  const styleRow = useRowStyles();

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table size="small" aria-label="collapsible table">
          <TableHead>
            <TableRow className={styleHead.root} selected hover>
              {titulosDetalles.length !== 0 ? <TableCell /> : <></>}
              {titulos.length !== 0 &&
                titulos.map((titulo, index) => {
                  return (
                    <TableCell key={index} align="center">
                      <strong>{titulo}</strong>
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length !== 0 &&
              data.map((dat) => {
                return (
                  <Row
                    className={styleRow.root}
                    align="center"
                    firstData={dat}
                    titulosDetalles
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const useHeader = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
      color: "black",
      background: "#7590C7",
      fontWeight: "bold",
    },
  },
}));

const useRowStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      background: "#9EADCB",
      borderBottom: "unset",
    },
  },
}));
