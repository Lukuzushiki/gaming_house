import React from "react";
import Illustration from "assets/images/illustration-about.png";
import Fade from "react-reveal/Fade";

export default function aboutUs() {
  return (
    <section>
      <Fade>
        <div className="container about">
          <div className="row">
            <div className="col-6 align-self-center text-center">
              <h2>Gaming House</h2>
              <p>
                We give you happiness,experience and comunity when you playing
              </p>
              <h5 className="text-blue">Users</h5>
              <h5 className="text-pink">200,000</h5>
            </div>
            <div className="col-6">
              <img src={Illustration} alt="Illustration" />
            </div>
          </div>
        </div>
      </Fade>

      <Fade delay={500}>
        <div className="vision text-center my-5">
          <h2>Our Vision</h2>
          <p>
            We will give you all the excitement, experience, happiness that you
            will never forget
          </p>
        </div>
      </Fade>

      <Fade delay={500}>
        <div className="container about">
          <div className="row">
            <div className="col-6 align-self-center text-center">
              <h2>Values</h2>
              <p>
                Comfortable and friendly service <br />
                Commitment to serving users well <br />
                complaints that will help for 24 hours
              </p>
            </div>
            <div className="col-6">
              <img src={Illustration} alt="Illustration" />
            </div>
          </div>
        </div>
      </Fade>

      <Fade delay={500}>
        <div className="container about my-5">
          <div className="row">
            <div className="col-6">
              <img src={Illustration} alt="Illustration" />
            </div>

            <div className="col-6 align-self-center text-center">
              <h2>Targets</h2>
              <p>
                Our target is to provide the best comfort for users and a clean
                and friendly community
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
