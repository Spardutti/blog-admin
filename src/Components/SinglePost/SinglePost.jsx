import "./singlePost.css";
import { useState, useEffect } from "react";
import { Switch } from "react-router";

const SinglePost = (props) => {
  const { postId } = props.location.state;
  const [postData, setPostData] = useState();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [published, setPublished] = useState();

  /*TODO fSAVE THE NO POST*/

  const getSinglePost = async () => {
    const token = localStorage.getItem("token");
    if (token) {
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
    console.log(title);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  const changeStatus = async () => {
    const response = await fetch("/admin/" + postId + "/public", {
      method: "PUT",
    });
    const data = await response.json();
    setPublished(data.published);
  };

  const savePost = async (e) => {
    e.preventDefault();
    const resposne = await fetch(`/admin/${postId}/edit`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer ",
      },
    });
    const data = await resposne.json();
    console.log(data);
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
        <input
          type="submit"
          onClick={savePost}
          value="Save"
          className="save-post"
        />
      </form>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default SinglePost;
