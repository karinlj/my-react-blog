import BurgerBtn from "./BurgerBtn";
import { IHeaderBarProps } from "../interfaces";
import { Colors } from "../components/styles/style";
import styled from "styled-components";

const HeaderBar = ({ isBtnOpen, toggleOpen }: IHeaderBarProps) => {
  return (
    <StyledHeader className="header">
      <BurgerBtn isBtnOpen={isBtnOpen} toggleOpen={toggleOpen} />
      <div>
        <p className="title">My React Blog</p>
        <p>With TypeScript and Styled-components</p>
      </div>
    </StyledHeader>
  );
};
export default HeaderBar;

const StyledHeader = styled.header`
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.color_green};
  p {
    color: ${Colors.color_yellow};
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`;
