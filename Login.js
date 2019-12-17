import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      success: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    (async function() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      );
      const json = await response.json();
    })();
      this.props.history.push("./Welcome");
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
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
  }
}
