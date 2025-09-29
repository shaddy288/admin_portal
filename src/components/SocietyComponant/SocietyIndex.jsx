import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SocietyComponent from "./SocietyComponant";
import SocietyModal from "./SocietyModal";

const SocietyIndex = () => {
  const [edit, setEdit] = useState(null);
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const handleClickOpen = () => {
    setEdit(null); 
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const url = "http://localhost:3000/rows";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRows(data));
  }, []);

  const onAdd = (newRow) => {
    setRows((prev) => [...prev, newRow]);
  };

  const onDelete = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const onEdit = (row) => {
    setEdit(row);
    setOpen(true);
  };

  const onUpdate = (updatedRow) => {
    setRows((prev) =>
      prev.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
    setEdit(null); 
  };

  return (
    <Grid container>
      <Grid size={12} xs={12}>
        <Box
          sx={{
            maxWidth: "100%",
            padding: "2rem",
            boxShadow: 3,
            margin: "20px",
            borderTop: "3px solid #3c8dbc",
            borderRadius: "5px",
            height: "100%",
          }}
        >
          <SocietyComponent
            onDelete={onDelete}
            rows={rows}
            handleClickOpen={handleClickOpen}
            onEdit={onEdit}
          />
          <SocietyModal
            open={open}
            handleClose={handleClose}
            onAdd={onAdd}
            onUpdate={onUpdate}
            edit={edit}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SocietyIndex;
