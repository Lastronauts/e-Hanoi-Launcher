import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

type Row = {
  user_name: string;
  clearTime: number;
  createdAt: number;
};

export function createTableData(
  user_name: string,
  clearTime: number,
  createdAt: number
): Row {
  return { user_name, clearTime, createdAt };
}

type Props = {
  rows: Row[];
};

export default function RankingTable(props: Props) {
  return (
    <TableContainer
      component={Grid}
      container
      style={{ justifyContent: 'center' }}
    >
      <Table sx={{ maxWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Rank</StyledTableCell>
            <StyledTableCell align="right">User Name</StyledTableCell>
            <StyledTableCell align="right">Clear Time</StyledTableCell>
            <StyledTableCell align="right">Timestamp</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" align="center">
                {index}
              </StyledTableCell>
              <StyledTableCell align="right">{row.user_name}</StyledTableCell>
              <StyledTableCell align="right">{row.clearTime}</StyledTableCell>
              <StyledTableCell align="right">
                {new Date(row.createdAt * 1000).toString()}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
