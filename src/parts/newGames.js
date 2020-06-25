import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function newGames(props) {
  return (
    <section className="container">
      <Fade bottom>
        <h1 className="mb-4">New Games</h1>

        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <Fade bottom delay={500 * index}>
                <div
                  key={`newGames-${[index]}`}
                  className="item column-3"
                  style={{ height: 375 }}
                >
                  <div className="card card-featured">
                    <figure className="img-wrapper">
                      <img src={item.imgUrls} alt="" className="img-poster" />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="streched-link d-block text-blue mb-2"
                        href={`/properties/${item._id}`}
                      >
                        {item.title}
                      </Button>
                      <h5>$ {item.price}</h5>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
