import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Chip, Paper, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const FormMainTable = ({ data }) => {
  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead sx={{ background: "#367fa9 !important" }}>
          <TableRow>
            <StyledTableCell>Sr no </StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Mobile Number</StyledTableCell>
            <StyledTableCell align="left">Email Id</StyledTableCell>
            <StyledTableCell align="left">City</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="left">{data.name}</StyledTableCell>
              <StyledTableCell align="left">{data.mobile}</StyledTableCell>
              <StyledTableCell align="left">{data.email}</StyledTableCell>
              <StyledTableCell align="left">{data.city}</StyledTableCell>
              <StyledTableCell align="left">
                <Chip
                  label={data.status}
                  color={data.status === "Approve" ? "success" : "warning"}
                  size="small"
                  sx={{ fontWeight: "bold" }}
                />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ mr: 1 }}
                  // onClick={() => onEdit(row)}
                >
                  <EditIcon fontSize="small" />
                </Button>
                <Button
                  // onClick={() => onDelete(row.id)}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FormMainTable;
