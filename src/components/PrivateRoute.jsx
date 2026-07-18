import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../contexts/AuthContext";

function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
