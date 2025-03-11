import "./App.css";

import { Link, NavLink, Outlet } from "react-router";

const App = () => {
  const style = {
    display: "flex",
    gap: 12,
  };
  return (
    <>
      <div style={style}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/news">News</NavLink>

        <Link to="/news">News</Link>
        <Link to="/test">Test</Link>
        <Link to="/note">Note</Link>
      </div>
      <Outlet />
    </>
  );
};

export default App;
