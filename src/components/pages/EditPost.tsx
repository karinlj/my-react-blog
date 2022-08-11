import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IPost } from "../../interfaces";
import {
  StyledSubHeader,
  StyledButton,
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledLabel,
} from "../styles/style";

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
    <div className="form_page">
      <StyledSubHeader>
        <h2>Edit post</h2>
      </StyledSubHeader>

      {isLoading && <p className="loading">Loading...</p>}
      {isError && <p>Oops, could not fetch data...</p>}
      {data && (
        <form onSubmit={handleSubmit}>
          <StyledLabel>
            Title:
            <StyledInput
              type="text"
              required
              value={title}
              id="title"
              onChange={handleChange}
            />
          </StyledLabel>
          <StyledLabel>
            Body:
            <StyledTextarea
              as="textarea"
              required
              value={body}
              id="body"
              onChange={handleChange}
            ></StyledTextarea>
          </StyledLabel>
          <StyledLabel>
            Author:
            <StyledSelect
              as="select"
              value={author}
              id="author"
              onChange={handleChange}
            >
              <option value={author}>{author}</option>
              <option value="Hugo">Hugo</option>
              <option value="Filip">Filip</option>
            </StyledSelect>
          </StyledLabel>

          {!isLoadingUpdate && (
            <StyledButton onClick={handleSubmit}>Edit Post</StyledButton>
          )}
          {isLoadingUpdate && (
            <StyledButton disabled>Editing Post...</StyledButton>
          )}
        </form>
      )}
    </div>
  );
};

export default EditPost;
