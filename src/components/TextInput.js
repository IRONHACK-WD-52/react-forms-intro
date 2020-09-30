import React from "react";

function TextInput(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          className={`input ${props.error ? "is-danger" : ""}`}
          type={props.type}
          name={props.name}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.value}
        />
      </div>
      {props.error ? <p className="help is-danger">{props.error}</p> : null}
    </div>
  );
}

export default TextInput;
