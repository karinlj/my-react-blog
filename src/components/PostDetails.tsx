import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IPost } from "../interfaces";
import { StyledButton, StyledLink, StyledSubHeader } from "./styles/style";

const PostDetails = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();
  //GET post
  const {
    data: post,
    isLoading,
    isError,
  } = useFetch<IPost>("http://localhost:9000/posts/" + post_id); //fetch the post I want

  //DELETE post
  const handleClick = () => {
    if (post) {
      //fetch the post I want and delete it
      fetch("http://localhost:9000/posts/" + post.id, {
        method: "DELETE",
      }).then(() => {
        //back to home
        navigate("/");
      });
    }
  };
  useEffect(() => {
    // console.log("post", post);
  }, [post]);

  return (
    <section>
      {isLoading && <p className="loading">Loading...</p>}
      {isError && <p>Oops, could not fetch data...</p>}

      {post && (
        <article>
          <StyledSubHeader>
            <h2>{post.title}</h2>
            <StyledLink to={`/posts/edit/${post.id}`}>Edit</StyledLink>
          </StyledSubHeader>
          <section className="page_content">
            <p className="post_author">
              Written by: <span>{post.author}</span>
            </p>
            <p>{post.body}</p>
          </section>

          <StyledButton deleteBtn onClick={handleClick}>
            Delete Post
          </StyledButton>
        </article>
      )}
    </section>
  );
};

export default PostDetails;
