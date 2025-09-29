import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  DialogActions,
} from "@mui/material";

const SocietyModal = ({ handleClose, open, onAdd, onUpdate, edit }) => {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const url = "http://localhost:3000/rows";

  useEffect(() => {
    if (edit) {
      setName(edit.name || "");
      setMobile(edit.mobile || "");
      setEmail(edit.email || "");
      setCity(edit.city || "");
      setStatus(edit.status || "");
    } else {
      setName("");
      setMobile("");
      setEmail("");
      setCity("");
      setStatus("");
    }
  }, [edit]);

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = { name, mobile, email, city, status };

    if (edit) {
      const response = await fetch(`http://localhost:3000/rows/${edit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const updatedRow = await response.json();
      onUpdate(updatedRow); 
    } else {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const newRow = await response.json();
      onAdd(newRow); 
    }

    handleClose(); 
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{ sx: { borderRadius: 3, p: 2 } }}
    >
      <DialogTitle
        sx={{ fontWeight: "bold", color: "#367fa9", textAlign: "center" }}
      >
        {edit ? "Edit Society" : "Create New Society"}
      </DialogTitle>

      <Box component="form" onSubmit={handleForm}>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              label="Name"
              required
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Mobile Number"
              required
              fullWidth
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="City"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="Approve">Approve</MenuItem>
                <MenuItem value="Reject">Reject</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ borderRadius: 2, px: 3 }}
          >
            {edit ? "Update" : "Save"}
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: 2, px: 3 }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default SocietyModal;
