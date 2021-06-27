import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainScreen from "./Screens/MainScreen";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxWidth="lg" style={{ padding: "0", margin: "0" }}>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (!user ? <MainScreen /> : <Redirect to="/home" />)}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
