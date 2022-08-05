import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { IHeaderBarProps } from "../interfaces";

const Navbar = ({ isBtnOpen, toggleOpen }: IHeaderBarProps) => {
  useEffect(() => {
    // console.log("isBtnOpen Navbar", isBtnOpen);
  }, [isBtnOpen]);

  return (
    <nav className={isBtnOpen ? "navbar open" : "navbar"}>
      <ul>
        <li>
          <NavLink to="/">
            <div onClick={toggleOpen}>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/create">
            <div onClick={toggleOpen}>New Post</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
