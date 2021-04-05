import { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  let history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    props.setToken(data.token);
    localStorage.setItem("token", data.token);
    history.push("/");
  };

  return (
    <form className="login-form">
      <input
        onChange={getUsername}
        type="text"
        name="username"
        placeholder="Username"
      />
      <input
        onChange={getPassword}
        type="password"
        name="password"
        placeholder="Password"
      />
      <input onClick={login} type="submit" value="Login" />
    </form>
  );
};

export default Login;
