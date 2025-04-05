import "./App.css";

import { Outlet } from "react-router";
import NavBarLayout from "./layouts/NavBarLayout";

const App = () => {
  return (
    <>
      <NavBarLayout />
      <Outlet />
    </>
  );
};

export default App;
