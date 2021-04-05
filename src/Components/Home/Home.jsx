import { useState, useEffect } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("got token");
      const response = await fetch("/admin/blog/all", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        setPosts(data);
      }
    } else {
      console.log("no token");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return posts ? (
    posts.map((post) => {
      return (
        <div key={post._id} className="post-container">
          <h1>{post.title}</h1>
          <p>{post.text}</p>
          {posts.published ? <p>publicado</p> : <p>no publicado</p>}
        </div>
      );
    })
  ) : (
    <div>Loading</div>
  );
};

export default Home;
