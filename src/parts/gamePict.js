import React from "react";
import ImageGalery from "react-image-gallery";

export default function gamePict(props) {
  return (
    <section className="container">
      <h1 className="mb-4">{props.data.title}</h1>

      <div className="row">
        <div className="col-8">
          <ImageGalery
            items={props.data.imageId.map((item) => {
              return {
                original: `${process.env.REACT_APP_CLOUD}/${item.imageUrl}`,
                thumbnail: `${process.env.REACT_APP_CLOUD}/${item.imageUrl}`,
              };
            })}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            showNav={false}
          />
        </div>

        <div className="col-4">
          <figure className="img-wrapper" style={{ height: 200 }}>
            <img
              src={`${process.env.REACT_APP_CLOUD}/${props.data.imageId[0].imageUrl}`}
              alt="Images"
              className="img-poster"
            />
          </figure>

          <div className="detail-contribution">
            <div className="row">
              <div className="col-auto">
                {/* <h5>Developer</h5> */}
                {/* <h5>Publishers</h5> */}
                <h5>Release Date</h5>
                <h5>Tags</h5>
              </div>

              <div className="col-6">
                {/* <h5 className="content">{props.data.developer}</h5> */}
                {/* <h5 className="content">{props.data.publisher}</h5> */}
                <h5 className="content">{props.data.releaseDate}</h5>
                <h5 className="content">{props.data.categoryId.name}</h5>
              </div>
            </div>

            <div className="price mt-5">
              <h4>
                Price <span>${props.data.price}</span>
              </h4>

              <button
                className="btn btn-primary mt-2 py-2 justify-content-center align-items-center"
                style={{ width: "100%" }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
