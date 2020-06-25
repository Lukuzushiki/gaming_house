import React, { Component } from "react";

import Navbar from "parts/Navbar";
import Update from "parts/newsUpdate";
import Footer from "parts/Footer";

import newsUpdate from "json/newsUpdate.json";

export default class News extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} isTransparent />
        <Update data={newsUpdate.news} />
        <Footer isSolid />
      </div>
    );
  }
}
