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
                  className="col-3"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <figure className="img-wrapper-brand">
                    <img
                      src={`${process.env.REACT_APP_CLOUD}/${item.imageUrl}`}
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
