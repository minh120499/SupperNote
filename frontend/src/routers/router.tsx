import { AppRouters } from "@/types/router";
import App from "../App";
import { navBarRouter } from "./navbar-router";

export const routes: AppRouters[] = [
  {
    path: "/",
    element: <App />,
    elements: [...navBarRouter],
  },
];
