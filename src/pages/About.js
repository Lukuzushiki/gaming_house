import React, { Component } from "react";

import Navbar from "parts/Navbar";
import Content from "parts/aboutUs";
import Footer from "parts/Footer";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} isTransparent />
        <Content />
        <Footer isSolid></Footer>
      </div>
    );
  }
}
