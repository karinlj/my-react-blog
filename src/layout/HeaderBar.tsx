import BurgerBtn from "./BurgerBtn";
import { IHeaderBarProps } from "../interfaces";

const HeaderBar = ({ isBtnOpen, toggleOpen }: IHeaderBarProps) => {
  return (
    <header>
      <BurgerBtn isBtnOpen={isBtnOpen} toggleOpen={toggleOpen} />
      <h1>My React Blog</h1>
    </header>
  );
};

export default HeaderBar;
