import React from "react";
import Fade from "react-reveal/Fade";

export default function aboutCommunity(props) {
  return (
    <section style={{ marginTop: 50 }}>
      <Fade>
        <div className="card card-post">
          <h2 className="card-header">About Community</h2>
          <div className="card-body about">
            <h5>
              Welcome to our community. This community discuss about every game
              you want to discuss
            </h5>
          </div>
          <div className="card-footer about">
            <h2>
              <span>300K</span> Members
            </h2>
            <p>Created on 10 December 2018</p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
