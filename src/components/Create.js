import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Hugo");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const uri = "http://localhost:9000/posts";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newPost = {
      title,
      body,
      author,
    };
    // console.log("newPost", newPost);

    //make a POST request to our endpoint
    fetch(uri, {
      method: "POST",
      //type of content
      headers: { "Content-Type": "application/json" },
      //the data we send made to a json string
      body: JSON.stringify(newPost),
    }).then(() => {
      console.log("newPost added");
      setIsLoading(false);
      //back 1
      navigate(-1);
      //to home
      // navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          //when changing this input=>change title
          //update title with the event object
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="hugo">Hugo</option>
          <option value="filip">Filip</option>
        </select>
        {!isLoading && <button onClick={handleSubmit}>Add Post</button>}
        {isLoading && <button disabled>Adding Post...</button>}

        {/* <br />
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;
