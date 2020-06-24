import React, { Component } from "react";

import Navbar from "parts/Navbar";
import Search from "parts/searchBar";

export default class ourGames extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} isTransparent />
        <Search />
      </div>
    );
  }
}
