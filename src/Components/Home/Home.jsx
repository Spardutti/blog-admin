import { useState, useEffect } from "react";
import "./home.css";
import SinglePost from "../SinglePost/SinglePost";

const Home = (props) => {
  const [posts, setPosts] = useState();
  const [published, setPublished] = useState();

  const getPosts = async () => {
    const token = localStorage.getItem("token");
    if (token) {
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
    }
  };

  const displaySinglePost = async (e) => {
    let id = e.target.id;
    const response = await fetch("/blog/" + id);
    const data = await response.json();
    props.setSinglePost(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return props.singlePost ? (
    <SinglePost singlePost={props.singlePost} />
  ) : posts ? (
    posts.map((post) => {
      //TODO change the button color if the post is public or not
      return (
        <div
          onClick={displaySinglePost}
          key={post._id}
          id={post._id}
          className="post-container"
        >
          <h1>{post.title}</h1>
          <p className="text-container">{post.text}</p>
          {published ? (
            <p className="public">publicado</p>
          ) : (
            <p className="private">no publicado</p>
          )}
        </div>
      );
    })
  ) : (
    <div>Loading</div>
  );
};

export default Home;
