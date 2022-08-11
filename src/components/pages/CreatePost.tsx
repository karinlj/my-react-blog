import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../interfaces";
import {
  StyledSubHeader,
  StyledButton,
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledLabel,
} from "../styles/style";

const CreatePost = () => {
  const defaultInputValues: IPost = {
    title: "",
    body: "",
    author: "Hugo",
  };

  const [formData, setFormData] = useState<IPost>(defaultInputValues);
  const { title, body, author } = formData;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const url: string = "http://localhost:9000/posts";

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
    setIsLoading(true);

    const newPost: IPost = {
      title,
      body,
      author,
    };

    //make a POST request to our endpoint
    const postNewPost = async () => {
      await fetch(url, {
        method: "POST",
        //type of content
        headers: { "Content-Type": "application/json" },
        //the data we send made to a json string
        body: JSON.stringify(newPost),
      });
      //console.log("newPost added");
      setIsLoading(false);
      navigate(-1);
    };

    postNewPost();
  };

  return (
    <div className="form_page">
      <StyledSubHeader>
        <h1>Add a New Blog Post</h1>
      </StyledSubHeader>

      <form onSubmit={handleSubmit}>
        <StyledLabel>
          Title:
          <StyledInput
            type="text"
            placeholder="Title"
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
            placeholder="Something happened..."
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
            <option value="hugo">Hugo</option>
            <option value="filip">Filip</option>
          </StyledSelect>
        </StyledLabel>

        {!isLoading && (
          <StyledButton onClick={handleSubmit}>Add Post</StyledButton>
        )}
        {isLoading && <StyledButton disabled>Adding Post...</StyledButton>}
      </form>
    </div>
  );
};

export default CreatePost;
