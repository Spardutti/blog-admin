import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const clearSinglePost = () => {
    props.setSinglePost();
  };
  return (
    <div className="header-container">
      <h1>Admin Stuff</h1>
      <div className="nav-bts">
        <Link onClick={clearSinglePost} className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/create">
          Create Post
        </Link>
        <Link className="link" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Header;
