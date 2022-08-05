import { useEffect } from "react";
import PostList from "./PostList";
import { useFetch } from "../hooks/useFetch";
import { IPost } from "../interfaces";

const Home = () => {
  const url = "http://localhost:9000/posts";

  const { data: posts, isLoading, isError } = useFetch<IPost[]>(url);

  useEffect(() => {
    //console.log("posts", posts);
  }, [posts]);

  return (
    <section className="home">
      {isError && <p>Oops, could not fetch data...</p>}
      {isLoading && <p>...is Loading</p>}
      {posts && <PostList posts={posts} />}
    </section>
  );
};

export default Home;
