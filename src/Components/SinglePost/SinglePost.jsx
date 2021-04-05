import "./singlePost.css";

const SinglePost = (props) => {
  /*TODO fetch the data to update the post status public or not */

  return (
    <div className="singlepost-container">
      <h1>{props.singlePost.title}</h1>
      <p className="singlepost-text">{props.singlePost.text}</p>
      {props.singlePost.published ? (
        <p className="public">publicado</p>
      ) : (
        <p className="private">no publicado</p>
      )}
    </div>
  );
};

export default SinglePost;
