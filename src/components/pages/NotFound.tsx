import { StyledLink, StyledSubHeader } from "../styles/style";

const NotFound = () => {
  return (
    <div className="not_found_page">
      <StyledSubHeader>
        <h1>Sorry...not found.</h1>
      </StyledSubHeader>

      <section className="page_content">
        <p>That page cannot be found.</p>
      </section>
      <StyledLink to="/">Back to Home</StyledLink>
    </div>
  );
};

export default NotFound;
