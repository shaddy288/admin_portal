import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormModal from "./FormModal";
import FormMainTable from "./FormMainTable";

const Formmain = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const url = "http://localhost:3000/rowsData";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{
        maxWidth: "100%",
        padding: "2rem",
        boxShadow: 3,
        margin: "20px",
        borderTop: "3px solid #3c8dbc",
        borderRadius: "5px",
      }}
    >
      <FormMainTable data={data} />
      <FormModal
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
    </Box>
  );
};

export default Formmain;
