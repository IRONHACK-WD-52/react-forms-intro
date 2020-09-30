import React, { useState } from "react";
import "bulma/css/bulma.css";

function Form() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    // CUIDADO! A funçāo de atualizaçāo de state do useState é destrutiva! Ela substitui o state atual pelo que estamos mandando, então, para nāo perder propriedades na atualizaçāo, precisamos fazer o spread das propriedades atuais
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              onChange={handleChange}
              value={state.name}
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
              onChange={handleChange}
              value={state.email}
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
              onChange={handleChange}
              value={state.password}
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

export default Form;
