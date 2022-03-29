import { useEffect } from "react";

const BurgerBtn = ({ isBtnOpen, toggleOpen }) => {
  useEffect(() => {
    //console.log("isBtnOpen Button", isBtnOpen);
  }, [isBtnOpen]);

  return (
    <button
      className={isBtnOpen ? "vego_burger open" : "vego_burger"}
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
