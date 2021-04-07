import "./singlePost.css";
import { useState } from "react";

const SinglePost = (props) => {
  const [title, setTitle] = useState(props.singlePost.title);
  const [text, setText] = useState(props.singlePost.text);
  const [published, setPublished] = useState(props.singlePost.published);
  /*TODO fetch the data to update the post status public or not */

  const changeTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const changeText = (e) => {
    setText(e.target.value);
    console.log(TextTrackCueList);
  };

  const changeStatus = async () => {
    const response = await fetch("/admin/" + props.singlePost._id + "/public", {
      method: "PUT",
    });
    const data = await response.json();
    setPublished(!published);
    console.log(data);
  };

  return (
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

        {published ? (
          <p onClick={changeStatus} className="public">
            publicado
          </p>
        ) : (
          <p onClick={changeStatus} className="private">
            no publicado
          </p>
        )}
        <input type="submit" value="Save" className="save-post" />
      </form>
    </div>
  );
};

export default SinglePost;
