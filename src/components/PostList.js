import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  return (
    <ul className="post_list">
      <h2>All Blog Posts</h2>
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
  );
};

export default PostList;
