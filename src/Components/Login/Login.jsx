import { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label, Col } from "reactstrap";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState();

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
    if (data) {
      props.setToken(data.token);
      localStorage.setItem("token", data.token);
      history.push("/");
    } else setErrors("Invalid username or password");
  };

  return (
    <Form className="login-form mt-5 mx-auto">
      <Col sm={6} className="mx-auto">
        <FormGroup>
          <Label>Enter username</Label>
          <Input
            onChange={getUsername}
            type="text"
            name="username"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <Label>Enter Password</Label>
          <Input
            onChange={getPassword}
            type="password"
            name="password"
            placeholder="Password"
          />
        </FormGroup>
        <Button onClick={login} type="submit" color="success">
          Log in
        </Button>
        {errors ? (
          <FormGroup className="mt-4">
            <Label>{errors}</Label>
          </FormGroup>
        ) : null}
      </Col>
    </Form>
  );
};

export default Login;
