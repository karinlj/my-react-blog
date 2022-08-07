import { useEffect } from "react";
import { IHeaderBarProps } from "../interfaces";
import { Colors } from "../components/styles/style";
import styled from "styled-components";

const BurgerBtn = ({ isBtnOpen, toggleOpen }: IHeaderBarProps) => {
  useEffect(() => {
    //console.log("isBtnOpen Button", isBtnOpen);
  }, [isBtnOpen]);

  return (
    <StyledBurgerBtn
      className={isBtnOpen ? "vego_burger vego_burger_open" : "vego_burger"}
      aria-label="Menu"
      aria-expanded={isBtnOpen ? "true" : "false"}
      onClick={toggleOpen}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </StyledBurgerBtn>
  );
};
export default BurgerBtn;

const StyledBurgerBtn = styled.button`
  background: transparent;
  font-size: 1.2em;
  z-index: 1; //obs!!  //same parent as nav
  cursor: pointer;
  border: none;
  &:hover {
    background: transparent;
  }
  span {
    display: block;
    width: 30px;
    height: 2px;
    background: ${Colors.color_green};
    margin-bottom: 5px;
    transition: all ease-in 0.3s;
  }
  &.vego_burger_open {
    span:nth-child(1) {
      transform: rotate(45deg) translateY(10px);
    }
    span:nth-child(2) {
      opacity: 0;
      width: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-10px);
    }
  }
`;
