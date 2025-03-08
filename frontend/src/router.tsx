import React from "react";

import App from "./App";
import { New } from "./New";
import { Test } from "./Test";

export interface AppRouters {
  path: string;
  index?: boolean;
  element: React.ReactNode;
  elements?: AppRouters[];
}

export const routes: AppRouters[] = [
  {
    path: "/",
    index: true,
    element: <App />,
  },

  {
    path: "/news",
    element: <New />,
    elements: [
      {
        path: "test",
        index: true,
        element: <Test />,
      },
    ],
  },
];
