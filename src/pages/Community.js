import React, { Component } from "react";

import Navbar from "parts/Navbar";
import Menu from "parts/navCommunity";
import Post from "parts/Post";
import Footer from "parts/Footer";
import About from "parts/aboutCommunity";

import communityData from "json/Community.json";

export default class Community extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} />
        <Menu {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Post post={communityData.post} />
            </div>
            <div className="col-4">
              <About />
            </div>
          </div>
        </div>
        <Footer isSolid />
      </div>
    );
  }
}
