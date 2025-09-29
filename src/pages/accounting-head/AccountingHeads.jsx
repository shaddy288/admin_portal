import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import AccountingPage from "../../components/AcountComponant/AccountingPage";

const ContentAppBar = styled(MuiAppBar)({
  backgroundColor: "#f5f5f5",
  color: "#000",
});

const AccountingHeads = () => {
  return (
    <>
      <AccountingPage />
    </>
  );
};

export default AccountingHeads;
