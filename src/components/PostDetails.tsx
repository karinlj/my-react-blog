import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../interfaces";

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
    <section className="post_details">
      {isLoading && <p>...Loading</p>}
      {isError && <p>Oops, could not fetch data...</p>}

      {post && (
        <article>
          <header>
            <h2>{post.title}</h2>
            <Link to={`/posts/edit/${post.id}`}>Edit</Link>
          </header>

          <p className="post_author">
            Written by: <span>{post.author}</span>
          </p>
          <p className="post_body">{post.body}</p>
          <button onClick={handleClick}>Delete Post</button>
        </article>
      )}
    </section>
  );
};

export default PostDetails;
