import { Link } from "react-router-dom";
import { IPost } from "../interfaces";
import { Colors, Variables, StyledSubHeader } from "./styles/style";
import styled from "styled-components";

type Props = {
  posts: IPost[];
};

const PostList = ({ posts }: Props) => {
  return (
    <StyledPostList>
      <StyledSubHeader>
        <h2>All Blog Posts</h2>
      </StyledSubHeader>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              {/* url+variable */}
              <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                <p className="post_author">
                  Written by: <span>{post.author}</span>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledPostList>
  );
};

export default PostList;

const StyledPostList = styled.section`
  li {
    padding: 14px 16px;
    margin: 10px 0;
    border-bottom: 1px solid ${Colors.color_green};
    border-top-left-radius: ${Variables.theme_border_radius};
    border-top-right-radius: ${Variables.theme_border_radius};
    transition: all 0.3s ease-in;
    &:hover {
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.8);
    }
    .post_author {
      margin-top: 0.7rem;
      span {
        color: ${Colors.color_yellow};
      }
    }
  }
`;
