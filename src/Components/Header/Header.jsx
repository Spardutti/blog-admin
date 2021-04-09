import "./header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [token, setToken] = useState();

  const getToken = () => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  };

  useEffect(() => {
    getToken();
  }, []);

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
        {token ? null : (
          <Link className="link" to="/login">
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
