import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header-container">
      <h1>Admin Stuff</h1>
      <div className="nav-bts">
        <Link className="link" to="/">
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
