import { useState, useEffect } from "react";
import PostList from "./PostList";

const Home = () => {
  //let name = "mario";

  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);
  const [posts, setPosts] = useState(null);
  //   const [posts, setPosts] = useState([
  //     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //     { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //     { title: "Web dev tips", body: "lorem ipsum...", author: "mario", id: 3 },
  //   ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    console.log("id", id);
    const newPosts = posts.filter((post) => {
      return post.id !== id;
    });
    setPosts(newPosts);
  };
  const handleClick = (name) => {
    setName("luigi");
    setAge("30");
  };

  //runs on every render
  //if [] = runs on 1st render
  //if [name] = runs when name changes
  useEffect(() => {
    //faking that fetching data from db takes time
    setTimeout(() => {
      fetch("http://localhost:8000/postss")
        //the response object
        .then((res) => {
          console.log(res);
          //if request REACHES server but sends ERROR back
          //maybe endpoint does not exist or if request is denied
          if (!res.ok) {
            //the ok prop on the res object will be false
            throw Error("Could not fetch the data for that resourse");
            //throw it here and catch it further down
          }
          //to get the data we have to do something with it when using the fetch-api
          //this also returns a promise
          return res.json();
        })
        .then((data) => {
          console.log("data", data);
          setPosts(data);
          setIsLoading(false);
          setError(null);
        })
        //if connection error = if request NOT REACH server, will get Failed to fetch
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        });
      // console.log("use effect ran");
      // console.log("posts", posts);
    }, 2000);
  }, []);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {/*posts && = conditional templating for waiting for the data to load */}
      {posts && (
        <PostList
          posts={posts}
          title="All Posts!"
          handleDelete={handleDelete}
        />
      )}{" "}
      {/* <PostList
        posts={posts.filter((post) => post.author === "mario")}
        title="Mario's Posts!"
      /> */}
      {/* <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>click me</button> */}
    </div>
  );
};

export default Home;
