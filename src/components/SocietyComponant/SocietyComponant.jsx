import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const SocietyComponent = ({ rows, handleClickOpen, onDelete, onEdit }) => {
  console.log(rows);

  return (
    <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
      <Button
        size="small"
        sx={{ m: 1, p: 2, background: "#ed6c02", color: "#ffff" }}
        onClick={handleClickOpen}
      >
        Create Society
      </Button>
      <Table>
        <TableHead sx={{ background: "#367fa9 !important" }}>
          <TableRow>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Sr. No.
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Name
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Mobile Number
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              City
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Status
            </TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{
                "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                "&:hover": { backgroundColor: "#f1f1f1" },
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={row.status === "Approve" ? "success" : "warning"}
                  size="small"
                  sx={{ fontWeight: "bold" }}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ mr: 1 }}
                  onClick={() => onEdit(row)}
                >
                  <EditIcon fontSize="small" />
                </Button>
                <Button
                  onClick={() => onDelete(row.id)}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  <DeleteIcon fontSize="small" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SocietyComponent;
