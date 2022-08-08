import styled from "styled-components";
import { Link } from "react-router-dom";

export const Colors = {
  color_red: `#ec5f72`,
  color_dark_brown: `#3b2b2c`, //#151f1e; //#3d4e17;
  color_beige: `#f7f4ef`,
  color_yellow: `#ffb31a`,
  color_green: `#9fb003`,
};

export const Variables = {
  theme_border_radius: `8px`,
};

// export const Theme = {
//   bgColors: {
//     header: "transparent",
//     footer: "#323a4e",
//   },
//   colors: {
//     text: "#fff",
//     darkerText: "#aec2ee",
//   },
// };

export const StyledButton = styled.button<{ deleteBtn?: boolean }>`
  padding: 10px;
  border-radius: ${Variables.theme_border_radius};
  transition: all 0.3s ease-in;
  font-size: 1rem;
  background: transparent;
  color: ${({ deleteBtn }) =>
    deleteBtn ? `${Colors.color_red}` : `${Colors.color_yellow}`};
  border: 1px solid
    ${({ deleteBtn }) =>
      deleteBtn ? `${Colors.color_red}` : `${Colors.color_yellow}`};
  &:hover {
    color: ${Colors.color_dark_brown};
    background-color: ${({ deleteBtn }) =>
      deleteBtn ? `${Colors.color_red}` : `${Colors.color_yellow}`};
  }
`;

export const StyledLink = styled(Link)`
  background: transparent;
  color: ${Colors.color_yellow};
  border: 0;
  border: 1px solid ${Colors.color_yellow};
  padding: 8px;
  border-radius: ${Variables.theme_border_radius};
  cursor: pointer;
  transition: all 0.2s ease-in;
  display: inline-block;
  &:hover {
    background: ${Colors.color_yellow};
    color: ${Colors.color_dark_brown};
  }
`;

export const StyledSubHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0 0.5rem 0;
`;
