import React from "react";
import { setToken, getToken } from "../utils";

import Button from "@material-ui/core/Button";

const Login = props => {
  const handleSubmit = () => {
    setToken("tokennlakjfdjsakf;lfjdslfjdslfjdsfjfl");
    handleRedirect();
  };

  const handleRedirect = () => {
    props.history.push("/");
  };

  if (getToken()) {
    props.history.push("/");
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => handleSubmit()}>
        Login
      </Button>
    </div>
  );
};

export default Login;
