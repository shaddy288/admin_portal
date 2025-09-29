import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/joy";
import Button from "@mui/material/Button";

const AccountingForm = ({ onSubmit, initialData, isEditing }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setType(initialData.type);
    } else {
      setName("");
      setType("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !type) return;
    onSubmit({ name, type });
    if (!isEditing) {
      setName("");
      setType("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000" }}>
        {isEditing ? "Edit Entry" : "Add Entry"}
      </Typography>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expenditure">Expenditure</MenuItem>
          <MenuItem value="liabilities">Liabilities</MenuItem>
          <MenuItem value="assets">Assets</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ mt: 2 }}
      />

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        {isEditing ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default AccountingForm;
