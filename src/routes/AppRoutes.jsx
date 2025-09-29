import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import CompanyInformation from "../pages/Company-information/CompanyInformation";
import AccountingHeads from "../pages/accounting-head/AccountingHeads";
import Society from "../pages/Society/Society";
import Formindex from "../pages/FormI/Formindex";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        label: "Company Info",
        element: <CompanyInformation />,
      },
      { path: "/", element: <CompanyInformation /> },
      { path: "/accounting-head", element: <AccountingHeads /> },
      { path: "/society", element: <Society /> },
      { path: "/formi", element: <Formindex /> },
    ],
  },
]);

export default AppRoutes;
