import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Box } from "./admin/Box";
import { Alert } from "../admin/admin/Alert";
// import { Boxe } from "../admin/admin/Boxee";
import { Boxee } from "../admin/admin/Boxee";

export const Admin = (): JSX.Element => {
  return (
    <div>
      <Alert />
      {/* <Box />
      <Boxe />
      <Boxee /> */}
    </div>
  );
};
