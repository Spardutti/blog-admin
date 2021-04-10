import { useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Col, Spinner } from "reactstrap";

const Home = (props) => {
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    const response = await fetch(
      "https://warm-ravine-05729.herokuapp.com/admin/blog/all",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return props.token ? (
    posts ? (
      posts.map((post) => {
        return (
          <Col key={post._id} sm={6} className="mx-auto mt-5 post-container">
            <Link
              to={{ pathname: "/post", state: { postId: post._id } }}
              id={post._id}
              className="post-container"
            >
              <Card>
                <CardTitle tag="h5">{post.title}</CardTitle>
                <CardText>{post.text}</CardText>
                {post.published ? (
                  <Button className="btn" color="success">
                    Public
                  </Button>
                ) : (
                  <Button className="btn" color="danger">
                    Private
                  </Button>
                )}
              </Card>
            </Link>
          </Col>
        );
      })
    ) : (
      <div className="spinner">
        <Spinner color="primary mx-auto mt-5 " />
      </div>
    )
  ) : (
    <h1>Please Log in</h1>
  );
};

export default Home;
