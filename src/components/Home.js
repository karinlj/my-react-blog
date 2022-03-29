import { useEffect } from "react";
import useFetch from "../useFetch";
import PostList from "./PostList";

const Home = () => {
  const uri = "http://localhost:9000/posts";

  const { data: posts, isLoading, error } = useFetch(uri);

  useEffect(() => {
    // console.log("posts", posts);
  }, [posts]);

  return (
    <section className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>...is Loading</p>}
      {posts && <PostList posts={posts} />}
    </section>
  );
};

export default Home;
