import React from "react";
import { Redirect, Route } from "react-router-dom";

import { getToken } from "../../utils";

function PrivateRoute({ component: Component, ...rest }) {
  const token = getToken();
  return (
    <Route
      {...rest}
      render={props =>
        token!= null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "login", state: { from: props.location } }}
          />
        )
      }
    ></Route>
  );
}

export default PrivateRoute;
