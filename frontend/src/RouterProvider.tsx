import { BrowserRouter, Route, Routes } from "react-router";

import { AppRouters, routes } from "./router";

export const AppRouterProvider = () => {
  const renderRoute = (routers?: AppRouters[]) => {
    return routers?.map((route) => {
      if (route.index) {
        return <Route index path={route.path} element={route.element} />;
      }
      return (
        <Route path={route.path} element={route.element}>
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
