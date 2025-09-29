import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountingForm from "./AccountingForm";
import AccountingTable from "./AccountingTable";
import { data } from "react-router-dom";

const AccountingPage = () => {
  const [row, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const url = "http://localhost:3000/users";

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      response = await response.json();
      setRows(response);
    };
    fetchData();
  }, []);

  // Add or Update
  const handleSubmit = async (data) => {
    if (isEditing && selectedRow) {
      await fetch(`${url}/${selectedRow.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setRows((prev) =>
        prev.map((user) =>
          user.id === selectedRow.id ? { ...user, ...data } : user
        )
      );
      setIsEditing(false);
      setSelectedRow(null);
    } else {
      let res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      let newUser = await res.json();
      setRows((prev) => [...prev, newUser]);
    }
  };

  const handleDelete = async (id) => {
    let response = await fetch(url + "/" + id, { method: "DELETE" });
    if (response.ok) {
      setRows((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const handleEdit = (id) => {
    const user = row.find((u) => u.id === id);
    setSelectedRow(user);
    setIsEditing(true);
    console.log(id);
  };

  return (
    <Grid container>
      <Grid size={4}>
        <Box
          sx={{
            maxWidth: "100%",
            padding: "2rem",
            boxShadow: 3,
            margin: "20px",
            borderTop: "3px solid #3c8dbc",
            borderRadius: "5px",
            height: "100vh",
          }}
        >
          <AccountingForm
            onSubmit={handleSubmit}
            initialData={selectedRow}
            isEditing={isEditing}
          />
        </Box>
      </Grid>
      <Grid size={8}>
        <Box
          sx={{
            maxWidth: "100%",
            padding: "2rem",
            boxShadow: 3,
            margin: "20px",
            borderTop: "3px solid #f6b145",
            borderRadius: "5px",
          }}
        >
          <AccountingTable
            rows={row}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AccountingPage;
