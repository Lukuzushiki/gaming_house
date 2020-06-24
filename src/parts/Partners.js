import React from "react";
import Fade from "react-reveal/Fade";

export default function Partners(props) {
  return (
    <Fade>
      <section className="container">
        <h1 className="mb-4">Our Partners</h1>

        <div className="row">
          {props.data.map((item, index) => {
            return (
              <Fade bottom delay={500 * index}>
                <div
                  className="col-2"
                  style={{
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <figure className="img-wrapper-brand">
                    <img
                      src={item.imgUrls}
                      alt=""
                      className="img-cover emblem"
                    />
                  </figure>
                </div>
              </Fade>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
