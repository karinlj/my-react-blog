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
  box-sizing: border-box;
}

h1 {
  color: ${Colors.color_green}; 
  font-size: 1.5rem;
}
h2{
    color: ${Colors.color_beige};
    color: ${Colors.text_color};    
    margin-bottom: 0.3rem;
    font-size: 1.3rem;
}
p {
    color: ${Colors.text_color}; 
  &.loading {
    color: ${Colors.color_green};
  }
}
a{
    text-decoration: none;
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
.menu_section {
  /* position: fixed;
  width: 100%; */
}
.page_content{
    margin-bottom: 1.5rem;
    line-height: 1.5rem;
    span {
      color:  ${Colors.color_yellow};
    }
    .post_author{
        margin-bottom: 1.5rem;  
    }
}
.form_page {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
`;
