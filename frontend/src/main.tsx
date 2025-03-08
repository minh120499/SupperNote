import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRouterProvider } from "./RouterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouterProvider />
  </StrictMode>
);
