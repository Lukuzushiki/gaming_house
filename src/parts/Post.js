import React, { Component } from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

import Like from "assets/images/like.png";
import Coment from "assets/images/coment.png";
import Share from "assets/images/share.png";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnLike: false,
      likes: 0,
      comments: 0,
    };
  }

  handleLiked = () => {
    if (this.state.btnLike === false) {
      this.setState({ likes: this.state.likes + 1, btnLike: true });
    } else {
      this.setState({ likes: this.state.likes - 1, btnLike: false });
    }
  };
  render() {
    const { post } = this.props;
    return (
      <div>
        <section style={{ marginTop: 50 }}>
          {post.map((item, index) => {
            return (
              <Fade bottom delay={index * 50}>
                <div className="card card-post">
                  <div className="card-body">
                    <div className="account-posted mb-2">
                      <img
                        src={`${process.env.REACT_APP_CLOUD}/${item.userId.photoImage}`}
                        alt="profile-pict"
                        className="img-pict-post"
                      />

                      <div className="account-data">
                        <h5>{item.userId.username}</h5>
                        <p>{item.postDate}</p>
                      </div>
                    </div>

                    <div className="content">
                      <p>{item.posted}</p>
                    </div>
                  </div>

                  <div className="card-footer">
                    <Button
                      className="btn-act"
                      type="link"
                      onClick={this.handleLiked}
                    >
                      <img src={Like} alt="" className="act-icon" />
                      <h3
                        className={`${
                          this.state.btnLike === true ? "text-blue" : ""
                        }`}
                      >
                        {item.totalLikes} Like
                      </h3>
                    </Button>

                    <Button className="btn-act" type="link">
                      <img src={Coment} alt="" className="act-icon" />
                      <h3>{item.commentId.length} Coment</h3>
                    </Button>

                    <Button className="btn-act" type="link">
                      <img src={Share} alt="" className="act-icon" />
                      <h3>Share</h3>
                    </Button>
                  </div>
                </div>
              </Fade>
            );
          })}
        </section>
      </div>
    );
  }
}
