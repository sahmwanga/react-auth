import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
