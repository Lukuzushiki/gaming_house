import React from "react";

import Login from "../parts/formLogin";

import Logo from "../../src/assets/images/Logo.svg";

export default function Signin() {
  return (
    <div className="container sign-in">
      <div
        className="row"
        style={{
          alignItems: `center`,
          height: `100vh`,
        }}
      >
        <div className="col-6">
          <Login />
        </div>
        <div className="col-6">
          <div className="image-logo">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
