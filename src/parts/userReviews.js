import React from "react";
import Button from "elements/Button";

import Like from "assets/images/like.png";
import Coment from "assets/images/coment.png";

export default function userReviews(props) {
  return (
    <section className="container">
      <h1 className="mb-4">User Reviews</h1>

      <div className="row">
        {props.data.length === 0 ? (
          <div className="col-8">
            <h4 className="text-center">Belum Ada Review</h4>
          </div>
        ) : (
          <div className="col-8">
            {props.data.map((item, index) => {
              return (
                <div className="card card-post">
                  <div className="card-body">
                    <div className="account-posted mb-2">
                      <img
                        src={item.imgUrls}
                        alt="profile-pict"
                        className="img-pict-post"
                      />

                      <div className="account-data">
                        <h5>{item.name}</h5>
                        <p>{item.timePosted}</p>
                      </div>
                    </div>

                    <div className="content">
                      <p>{item.content}</p>
                    </div>
                  </div>

                  <div className="card-footer">
                    <Button className="btn-act" type="link">
                      <img src={Like} alt="" className="act-icon" />
                      <h3>Like</h3>
                    </Button>

                    <Button className="btn-act" type="link">
                      <img src={Coment} alt="" className="act-icon" />
                      <h3>Coment</h3>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="col-4">
          <div className="card card-post">
            <h2 className="card-header">Ratings</h2>
            <div className="card-body about">
              <h5>
                Welcome to our community. This community discuss about every
                game you want to discuss
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
