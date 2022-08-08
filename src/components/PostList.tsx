import { Link } from "react-router-dom";
import { IPost } from "../interfaces";
import { StyledSubHeader } from "./styles/style";

type Props = {
  posts: IPost[];
};

const PostList = ({ posts }: Props) => {
  return (
    <section>
      <StyledSubHeader>
        <h2>All Blog Posts</h2>
      </StyledSubHeader>

      <ul>
        {posts.map((post) => {
          return (
            <li className="post_preview" key={post.id}>
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
    </section>
  );
};

export default PostList;
