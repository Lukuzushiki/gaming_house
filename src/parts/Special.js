import React from "react";
import Button from "elements/Button";

export default function Special(props) {
  return (
    <section className="special">
      <h1>Wanna get special offers?</h1>
      <Button className="btn px-5" isPrimary isLarge>
        Sign In
      </Button>
      <h2>
        Don't have any account?{" "}
        <Button className="register" type="link">
          Sign Up
        </Button>{" "}
        Now
      </h2>
    </section>
  );
}
