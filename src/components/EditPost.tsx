import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IPost } from "../interfaces";

const EditPost = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();
  const [isLoadingUpdate, setIsLoadingUpdate] = useState<boolean>(false);
  const url: string = "http://localhost:9000/posts/" + post_id;

  const defaultInputValues: IPost = {
    title: "",
    body: "",
    author: "",
  };
  const [formData, setFormData] = useState<IPost>(defaultInputValues);
  const { title, body, author } = formData;

  // GET post
  const { data, isLoading, isError } = useFetch<IPost>(
    "http://localhost:9000/posts/" + post_id
  ); //fetch the post I want

  //set data
  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title,
        body: data.body,
        author: data.author,
      });
    }
  }, [data]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    setIsLoadingUpdate(true);

    const editedPost = { ...data, title: title, body: body, author: author };

    //make a POST request to our endpoint
    const postEditedPost = async () => {
      await fetch(url, {
        method: "PUT",
        //type of content
        headers: { "Content-Type": "application/json" },
        //the data we send made to a json string
        body: JSON.stringify(editedPost),
      });
      console.log("updated post in db");
      setIsLoadingUpdate(false);
      navigate("/");
    };
    postEditedPost();
    // fetch(url, {
    //   method: "PUT",
    //   //type of content
    //   headers: { "Content-Type": "application/json" },
    //   //the data we send made to a json string
    //   body: JSON.stringify(editedPost), //update post
    // }).then(() => {
    //   //console.log("updated post in db");
    //   setIsLoadingUpdate(false);
    //   //back 1
    //   navigate("/");
    // });
  };

  return (
    <div className="edit_post">
      <h2>Edit post</h2>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops, could not fetch data...</p>}
      {data && (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              required
              value={title}
              id="title"
              onChange={handleChange}
            />
          </label>
          <label>
            Body:
            <textarea
              required
              value={body}
              id="body"
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Author:
            <select value={author} id="author" onChange={handleChange}>
              <option value={author}>{author}</option>
              <option value="Hugo">Hugo</option>
              <option value="Filip">Filip</option>
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
