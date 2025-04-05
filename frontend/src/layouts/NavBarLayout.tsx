import { Link, NavLink } from "react-router";

const NavBarLayout = () => {
  const style = {
    display: "flex",
    gap: 12,
  };

  return (
    <div style={style}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/news">News</NavLink>

      <Link to="/news">News</Link>
      <Link to="/test">Test</Link>
      <Link to="/note">Note</Link>
    </div>
  );
};

export default NavBarLayout;
