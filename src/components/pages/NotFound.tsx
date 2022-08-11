import { StyledLink, StyledSubHeader } from "../styles/style";

const NotFound = () => {
  return (
    <div className="not_found_page">
      <StyledSubHeader>
        <h2>Sorry...</h2>
      </StyledSubHeader>

      <section className="page_content">
        <p>That page cannot be found.</p>
      </section>
      <StyledLink to="/">Back to Home</StyledLink>
    </div>
  );
};

export default NotFound;
