import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Textarea from "@mui/joy/Textarea";
import { TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CompanyInfo = () => {
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
      <Grid container spacing={3}>
        <Grid item size={4} xs={12} md={6} lg={6}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Organization Name
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6}>
          <Typography
            variant="subtitle"
            mb={3}
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Date of Incorporation
          </Typography>
          <LocalizationProvider
            sx={{ p: 0, width: "100%" }}
            dateAdapter={AdapterDayjs}
          >
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Select date"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    required: true,
                    sx: {
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                    },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6}>
          <Typography
            variant="subtitle"
            mb={3}
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Date of Commencement
          </Typography>
          <LocalizationProvider
            sx={{ p: 0, width: "100%" }}
            dateAdapter={AdapterDayjs}
          >
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Select date"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    required: true,
                    sx: {
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                    },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>

      {/* LANE NUMBER TWO  */}
      <Grid container spacing={3}>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Landline No.1
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Landline No.2
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Mobile No.
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
      </Grid>

      {/* LANE NUMBER Three  */}
      <Grid container spacing={3}>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Support No.1
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Email ID
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Website
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            required
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
      </Grid>

      {/* LANE NUMBER Three  */}
      <Grid container spacing={3}>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Current Address
          </Typography>
          <Textarea
            color="neutral"
            fullWidth
            required
            minRows={4}
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Registration Address
          </Typography>
          <Textarea
            color="neutral"
            fullWidth
            required
            minRows={4}
            sx={{
              paddingTop: "8px",
            }}
          />
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Typography
            variant="subtitle"
            mb={3}
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Date of Incorporation
          </Typography>
          <LocalizationProvider
            sx={{ p: 0, width: "100%" }}
            dateAdapter={AdapterDayjs}
          >
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Select date"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    required: true,
                    sx: {
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                    },
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </Grid>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <img src="/public/nest-society.jpg" width={130} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item size={4} xs={12} md={6} lg={6} pt={3}>
          <Button type="submit" variant="contained">
            update
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyInfo;
