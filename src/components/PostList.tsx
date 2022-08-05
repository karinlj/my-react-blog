import { Link } from "react-router-dom";
import { IPost } from "../interfaces";

type Props = {
  posts: IPost[];
};

const PostList = ({ posts }: Props) => {
  return (
    <section className="post_list_section">
      <h2>All Blog Posts</h2>
      <ul className="post_list">
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
