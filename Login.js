import React, { useStore, useEffect } from "react";
import { loadUserRole } from "./actions";
import { useStore } from "./store";

const Login = props => {
  const {
    state,
    dispatch
  } = useStore();

  useEffect(() => {
    console.log("authentication.isDoneAuthenticating");
    if (authentication.isDoneAuthenticating) {
      this.props.history.push("/Welcome");
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    (async function() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      );
      const json = await response.json();
      if (json) {
        this.setState({ success: true });
      }
      loadUserRole(dispatch, state);
    })();
    //this.props.history.push("Welcome");
  };
  const handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={this.handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={this.handleChange}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
