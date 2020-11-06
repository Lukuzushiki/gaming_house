import React from "react";

import Button from "elements/Button";

export default function formLogin() {
  return (
    <div className="register-form">
      <h2>Login</h2>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Username" />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <p>
        Didn’t have an account? <a href="/signup">Register Here</a>
      </p>
      <Button className="btn px-5" isPrimary isLarge>
        Login
      </Button>
    </div>
  );
}
