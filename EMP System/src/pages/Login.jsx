import React from "react";
import { Link } from "react-router-dom";

const Login = () => (
  <div>
    <h2>Login</h2>
    <Link to="/login/user">User Login</Link>
    <br />
    <Link to="/login/admin">Administrator Login</Link>
  </div>
);

export default Login;