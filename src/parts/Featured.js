import React from "react";
import Fade from "react-reveal/Fade";
import Carousel from "react-bootstrap-carousel";
import Button from "elements/Button";
require("dotenv").config();

export default function Featured(props) {
  return (
    <section className="container" ref={props.refFeatured}>
      <Fade bottom>
        <h1 className="mb-4">Featured & Recomended</h1>

        <Carousel
          animation={true}
          autoplay={true}
          slideshowSpeed={5000}
          defaultActiveIndex={0}
          indicators={true}
          version={4}
        >
          {props.data.map((featured, index) => {
            return (
              <div
                key={`featured-${[index]}`}
                className="container-grid"
                style={{ gridRowGap: 10, gridAutoRows: 100 }}
              >
                <div className="item column-8 row-4">
                  <figure className="img-wrapper">
                    <img
                      className="img-cover"
                      src={`${process.env.REACT_APP_CLOUD}/${featured.imageId[0].imageUrl}`}
                      alt=""
                    />
                  </figure>
                </div>

                {featured.imageId.map((item, index2) => (
                  <div
                    key={`thumbnail=${[index2]}`}
                    className="item column-2 row-1"
                  >
                    <figure className="img-wrapper">
                      <img
                        className="img-cover thumbnail"
                        src={`${process.env.REACT_APP_CLOUD}/${item.imageUrl}`}
                        alt=""
                      />
                    </figure>
                  </div>
                ))}

                <div className="item column-4 row-1">
                  <h2>{featured.title}</h2>
                </div>

                <div className="item column-2 row-1">
                  <h3>Best Seller</h3>
                  <p>${featured.price}</p>
                </div>

                <div className="item column-2 row-1">
                  <Button
                    className="btn px-4"
                    isLarge
                    isPrimary
                    href={`/properties/${featured._id}`}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Fade>
    </section>
  );
}
