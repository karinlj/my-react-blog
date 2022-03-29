import BurgerBtn from "./BurgerBtn";

const HeaderBar = ({ isBtnOpen, toggleOpen }) => {
  return (
    <header>
      <BurgerBtn isBtnOpen={isBtnOpen} toggleOpen={toggleOpen} />
      <h1>My React Blog</h1>
    </header>
  );
};

export default HeaderBar;
