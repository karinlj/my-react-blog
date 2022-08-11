import { useEffect } from "react";
import PostList from "../PostList";
import { useFetch } from "../../hooks/useFetch";
import { IPost } from "../../interfaces";

const Home = () => {
  const url = "http://localhost:9000/posts";

  const { data: posts, isLoading, isError } = useFetch<IPost[]>(url);

  useEffect(() => {
    //console.log("posts", posts);
  }, [posts]);

  return (
    <>
      {isError && <p>Oops, could not fetch data...</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {posts && <PostList posts={posts} />}
    </>
  );
};

export default Home;
