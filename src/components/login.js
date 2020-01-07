import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { userId, password } = this.state;

    console.log(this.state);
  }

  render() {
    return (
      <div className="jumbotron ">
        <input
          value={this.state.userId}
          name="userId"
          onChange={this.handleChange}
          placeholder="userId"
          className="m-2"
          type="text"
        />{" "}
        <br />
        <input
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
          placeholder="password"
          className="m-2"
          type="password"
        />
        <br />
        <button onClick={this.handleSubmit}>Login</button>
      </div>
    );
  }
}
