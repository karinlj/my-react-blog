import { createGlobalStyle } from "styled-components";
import { Colors, Variables } from "./style";

export const GlobalStyles = createGlobalStyle`
body {
  background: ${Colors.color_dark_brown};
  color: ${Colors.color_beige}; 
}
* {
  margin: 0;
  font-family: "Quicksand";
  //color: $text_color;
  box-sizing: border-box;
}
h1 {
  color: ${Colors.color_yellow}; 
}
h2 {
  color: ${Colors.color_green}; 
  font-size: 1.5rem;
  margin-top: 4rem;
  margin-bottom: 0.5rem;
}
h3 {
    color: ${Colors.color_beige};   
    margin-bottom: 0.3rem;
}
p {
  color: #fff;
  &.loading {
    color: ${Colors.color_green};
  }
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
main {
  border-radius: ${Variables.theme_border_radius};
  max-width: 800px;
  margin: 0rem auto;
  padding: 20px;
  padding-top: 100px;
}
label {
    color: ${Colors.color_green};
    text-align: left;
    display: block;
    margin: 2rem 0 1rem 0;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }

input,
textarea,
select {
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    border: 1px solid ${Colors.color_dark_brown};
    box-sizing: border-box;
    display: block;
    background: #fff;
    color: ${Colors.color_dark_brown};
    border-radius: ${Variables.theme_border_radius};
    font-size: 0.9rem;
  }
`;
