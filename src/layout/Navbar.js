import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ isBtnOpen, toggleOpen }) => {
  useEffect(() => {
    // console.log("isBtnOpen Navbar", isBtnOpen);
  }, [isBtnOpen]);

  return (
    <nav className={isBtnOpen ? "navbar open" : "navbar"}>
      <ul>
        <li>
          <NavLink to="/" onClick={toggleOpen}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/create" onClick={toggleOpen}>
            New Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
