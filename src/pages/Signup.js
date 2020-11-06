import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "../parts/registerForm";
import Image from "../parts/imageUpload";

import Button from "../elements/Button";

import { submitUser } from "store/actions/signup";

class Signup extends Component {
  state = {
    data: {
      username: "",
      password: "",
      userLevel: "Member",
      email: "",
      image: "",
    },
  };

  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  _Submit = () => {
    const { data } = this.state;
    const payload = new FormData();

    payload.append("username", data.username);
    payload.append("password", data.password);
    payload.append("userLevel", data.userLevel);
    payload.append("email", data.email);
    payload.append("image", data.image[0]);

    this.props
      .submitUser(payload)
      .then(() => {
        console.log("Berhasil Menambahkan User");
      })
      .catch((error) => {
        console.log("error");
        console.log(data);
      });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="container sign-up">
        <h2>Be One of us</h2>
        <div className="row">
          <div className="col-6" style={{ borderRight: `2px solid #C4C4C4` }}>
            <Form data={data} onChange={this.onChange} />
          </div>
          <div className="col-6" style={{ alignSelf: `center` }}>
            <Image data={data} onChange={this.onChange} />
          </div>
        </div>

        <p>
          Already have an account? <a href="/signin">Login Here</a>
        </p>
        <div className="text-center" style={{ display: "block" }}>
          <Button
            className="px-5"
            isLarge
            isPrimary
            onClick={() => this._Submit()}
          >
            Register
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signup: state.signup,
  page: state.page,
});

export default connect(mapStateToProps, { submitUser })(Signup);
