import React from "react";
import "bulma/css/bulma.css";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          {/* Name field */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
          </div>
          {/* Email field */}
          <div className="field">
            <label className="label">E-mail</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
          </div>
          {/* Password field */}
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
