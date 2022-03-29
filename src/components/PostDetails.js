import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PostDetails = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();
  const {
    data: post,
    isLoading,
    error,
  } = useFetch("http://localhost:9000/posts/" + post_id); //fetch the post I want

  const handleClick = () => {
    //fetch the post I want and delete it
    fetch("http://localhost:9000/posts/" + post.id, {
      method: "DELETE",
    }).then(() => {
      //back to home
      navigate("/");
    });
  };
  useEffect(() => {
    // console.log("post", post);
  }, [post]);

  return (
    <div className="blog-details">
      {isLoading && <div>...Loading</div>}
      {error && <div>{error}</div>}

      {post && (
        <article>
          <h2>{post.title}</h2>
          <p className="author">
            Written by: <span>{post.author}</span>
          </p>
          <p className="body">{post.body}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
