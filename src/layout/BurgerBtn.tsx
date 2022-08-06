import { useEffect } from "react";
import { IHeaderBarProps } from "../interfaces";

const BurgerBtn = ({ isBtnOpen, toggleOpen }: IHeaderBarProps) => {
  useEffect(() => {
    //console.log("isBtnOpen Button", isBtnOpen);
  }, [isBtnOpen]);

  return (
    <button
      className={isBtnOpen ? "vego_burger vego_burger_open" : "vego_burger"}
      aria-label="Menu"
      aria-expanded={isBtnOpen ? "true" : "false"}
      onClick={toggleOpen}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
};

export default BurgerBtn;
