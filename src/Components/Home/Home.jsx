import { useState, useEffect } from "react";
import "./home.css";
import SinglePost from "../SinglePost/SinglePost";
import { Link, Switch, Route } from "react-router-dom";

const Home = (props) => {
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const response = await fetch("/admin/blog/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return props.token ? (
    posts ? (
      posts.map((post) => {
        //TODO change the button color if the post is public or not
        return (
          <Link
            to={{ pathname: "/post", state: { postId: post._id } }}
            key={post._id}
            id={post._id}
            className="post-container"
          >
            <h1>{post.title}</h1>
            <p className="text-container">{post.text}</p>
            {post.published ? (
              <p className="public">publicado</p>
            ) : (
              <p className="private">no publicado</p>
            )}
            <Switch></Switch>
          </Link>
        );
      })
    ) : (
      <div>Loading</div>
    )
  ) : (
    <h1>Please Log in</h1>
  );
};

export default Home;
