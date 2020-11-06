import React from "react";

export default function registerForm(props) {
  const { data } = props;

  return (
    <div className="register-form">
      <h2>Register</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          id="username"
          onChange={props.onChange}
          value={data.username}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="E-mail"
          name="email"
          id="email"
          onChange={props.onChange}
          value={data.email}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          id="password"
          onChange={props.onChange}
          value={data.password}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Re-Type Password"
          name="re-typePassword"
        />
      </div>
    </div>
  );
}
