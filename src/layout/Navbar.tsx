import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { IHeaderBarProps } from "../interfaces";
import { Colors } from "../components/styles/style";
import styled from "styled-components";

const Navbar = ({ isBtnOpen, toggleOpen }: IHeaderBarProps) => {
  useEffect(() => {
    // console.log("isBtnOpen Navbar", isBtnOpen);
  }, [isBtnOpen]);

  return (
    <StyledNavbar open={isBtnOpen}>
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
    </StyledNavbar>
  );
};
export default Navbar;

const StyledNavbar = styled.nav<{ open: boolean }>`
  height: 100%;
  position: fixed; //obs!!
  top: 0;
  left: ${({ open }) => (open ? "0" : "-250px")}; //obs!
  z-index: 0; //obs!  //same parent as header and vego_burger inside
  height: 100%;
  width: 250px; //obs!
  padding: 3rem;
  padding-top: 6rem;
  transition: left ease-in 0.3s; //obs!
  text-align: left;
  background: ${Colors.color_yellow};
  a {
    color: ${Colors.color_dark_brown};
    display: block;
    margin-bottom: 0.8rem;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      div {
        color: ${Colors.color_green};
        text-decoration: underline;
      }
    }
    &.active {
      div {
        color: ${Colors.color_green};
      }
    }
  }
`;
