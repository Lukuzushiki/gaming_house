import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Recomended(props) {
  return (
    <section className="container">
      <Fade bottom>
        <h1 className="mb-4">For You</h1>
        <div className="row">
          <div className="col-auto">
            <div className="recomended">
              <figure className="img-wrapper">
                <img
                  className="img-poster"
                  src={`${process.env.REACT_APP_CLOUD}/${props.data.imageId[0].imageUrl}`}
                  alt=""
                />
              </figure>

              <div className="meta-wrapper">
                <div className="col-6">
                  <h1>{props.data.title}</h1>
                  <p className="my-5">{props.data.description}</p>
                  <Button className="btn px-4" isPrimary isLarge>
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
