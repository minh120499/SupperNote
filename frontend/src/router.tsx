import React from "react";

import App from "./App";
import { New } from "./New";
import { Note } from "./pages/Note";
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
    element: <App />,
    elements: [
      {
        path: "test",
        index: true,
        element: <Test />,
      },
      {
        path: "news",
        element: <New />,
      },
      {
        path: "note",
        element: <Note />,
      },
    ],
  },
];
