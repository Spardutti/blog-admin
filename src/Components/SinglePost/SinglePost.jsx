import "./singlePost.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spinner, Button } from "reactstrap";

const SinglePost = (props) => {
  const { postId } = props.location.state;
  const [postData, setPostData] = useState();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [published, setPublished] = useState();
  const [token, setToken] = useState();

  let history = useHistory();

  //GET THE SINGLE POST DATA WHEN CLICKED

  const getSinglePost = async () => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
      const response = await fetch("/blog/" + postId, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPostData(data);
      setPublished(data.published);
      setTitle(data.title);
      setText(data.text);
    }
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };
  //CHANGE THE POST STATUS TO PUBLISHED OR UNPUBLISHED
  const changeStatus = async () => {
    const response = await fetch("/admin/" + postId + "/public", {
      method: "PUT",
    });
    const data = await response.json();
    setPublished(data.published);
  };

  //SAVE THE POST WITH THE CHANGES
  const savePost = async (e) => {
    e.preventDefault();
    const response = await fetch(`/admin/${postId}/edit`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        text: text,
      }),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      history.push("/");
    }
  };

  //DELETE THE CURRENT POST
  const deletePost = async () => {
    const response = await fetch("/admin/" + postId + "/delete", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      history.push("/");
    }
  };

  return postData ? (
    <div className="singlepost-container">
      <div>
        <h4>Here you can Edit your post title, text and make it public</h4>
      </div>
      <form action="">
        <input
          className="title"
          type="text"
          onChange={changeTitle}
          value={title}
        />
        <textarea
          rows="10"
          onChange={changeText}
          value={text}
          className="singlepost-text"
        />
        <p>Click to Change Status</p>

        {published ? (
          <p onClick={changeStatus} className="public">
            publicado
          </p>
        ) : (
          <p onClick={changeStatus} className="private">
            no publicado
          </p>
        )}
        <div>
          <Button onClick={deletePost} color="danger">
            Delete{" "}
          </Button>
        </div>
        <input
          type="submit"
          onClick={savePost}
          value="Save"
          className="save-post"
        />
      </form>
    </div>
  ) : (
    <div className="spinner">
      <Spinner color="primary" />
    </div>
  );
};

export default SinglePost;
