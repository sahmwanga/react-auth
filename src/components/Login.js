import React, { Component } from "react";
import { setToken } from "../utils";

const Login = props => {
  const handleSubmit = () => {
    setToken("tokennlakjfdjsakf;lfjdslfjdslfjdsfjfl");
    handleRedirect();
  };

  const handleRedirect = () => {
    props.history.push("/");
  };

  return (
    <div>
      <button onClick={() => handleSubmit()}>Login</button>
    </div>
  );
};

export default Login;
