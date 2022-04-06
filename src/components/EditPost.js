import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EditPost = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const uri = "http://localhost:9000/posts/" + post_id;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  // GET post
  const { data, isLoading, error } = useFetch(
    "http://localhost:9000/posts/" + post_id
  ); //fetch the post I want

  //set data
  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setBody(data.body);
      setAuthor(data.author);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoadingUpdate(true);

    const editedPost = { ...data, title: title, body: body, author: author };

    //make a POST request to our endpoint
    fetch(uri, {
      method: "PUT",
      //type of content
      headers: { "Content-Type": "application/json" },
      //the data we send made to a json string
      body: JSON.stringify(editedPost), //update post
    }).then(() => {
      //console.log("updated post in db");
      setIsLoadingUpdate(false);
      //back 1
      navigate("/");
    });
  };

  return (
    <div className="create_post">
      <h2>Edit</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>error...</p>}
      {data && (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              required
              value={title}
              //when changing this input=>change title
              //update title with the event object
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Body:
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </label>
          <label>
            Author:
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="hugo">Hugo</option>
              <option value="filip">Filip</option>
            </select>
          </label>

          {!isLoadingUpdate && (
            <button onClick={handleSubmit}>Edit Post</button>
          )}
          {isLoadingUpdate && <button disabled>Editing Post...</button>}
        </form>
      )}
    </div>
  );
};

export default EditPost;
