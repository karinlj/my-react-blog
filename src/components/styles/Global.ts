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
  color: ${Colors.color_yellow}; 
}
h2 {
  color: ${Colors.color_green}; 
  font-size: 1.5rem;
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
.menu_section {
  position: fixed;
  width: 100%;
}

.post_preview {
  padding: 14px 16px;
  margin: 10px 0;
  border-bottom: 1px solid ${Colors.color_green};
  border-top-left-radius: ${Variables.theme_border_radius};
  border-top-right-radius: ${Variables.theme_border_radius};
  transition: all 0.3s ease-in;
  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
  }
  .post_author {
    margin-top: 0.7rem;
    span {
        color:  ${Colors.color_yellow};
    }
  }
}

.form_page {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
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
  textarea {
    min-height: 130px;
    border: 1px solid $color_dark_brown;
  }
`;
