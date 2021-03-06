import Home from "./Components/Home/Home";
import "./normalize.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import SinglePost from "./Components/SinglePost/SinglePost";
import CreatePost from "./Components/CreatePost/CreatePost";

function App() {
  //GET JWT TOKEN
  const [token, setToken] = useState();

  const getLocalToken = () => {
    if (localStorage.getItem("token")) {
      const codedToken = localStorage.getItem("token");
      const localToken = jwt.decode(codedToken);

      const expiresAt = new Date(localToken.exp * 1000);
      if (expiresAt < new Date(Date.now())) {
        localStorage.clear();
      } else if (codedToken) {
        setToken(codedToken);
      }
    }
  };

  useEffect(() => {
    getLocalToken();
  });

  return (
    <HashRouter>
      <div>
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <Home token={token} />
        </Route>
        <Route path="/login">
          <Login setToken={setToken} />
        </Route>
        <Route path="/post" component={SinglePost} />
        <Route path="/create" component={CreatePost} />
      </Switch>
    </HashRouter>
  );
}

export default App;
