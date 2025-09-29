import CompanyInfo from "../../components/Companyinfo/CompanyInfo";
import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";

const ContentAppBar = styled(MuiAppBar)({
  backgroundColor: "#f5f5f5",
  color: "#000",
});

const CompanyInformation = () => {
  return (
    <>
      <CompanyInfo />
    </>
  );
};

export default CompanyInformation;
