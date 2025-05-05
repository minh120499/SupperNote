import { BrowserRouter, Route, Routes } from "react-router";

import { AppRouters } from "./types/router";
import { routes } from "./routers/router";

export const AppRouterProvider = () => {
  const renderRoute = (routers?: AppRouters[]) => {
    return routers?.map((route) => {
      if (route.index) {
        return <Route key={route.path} index path={route.path} element={route.element} />;
      }
      return (
        <Route key={route.path} path={route.path} element={route.element}>
          {renderRoute(route.elements)}
        </Route>
      );
    });
  };

  return (
    <BrowserRouter>
      <Routes>{renderRoute(routes)}</Routes>
    </BrowserRouter>
  );
};
