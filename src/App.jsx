import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { HeadingProvider } from "./context/HeadingContext";

function App() {

  return (
    <HeadingProvider>
      <RouterProvider router={AppRoutes} />
    </HeadingProvider>
  );
}

export default App;
