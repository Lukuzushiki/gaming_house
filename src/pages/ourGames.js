import React, { Component } from "react";

import Navbar from "parts/Navbar";
import Search from "parts/searchBar";
import Filter from "parts/Filter";
import List from "parts/gameList";
import Footer from "parts/Footer";

import Games from "json/ourGames.json";

export default class ourGames extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} isTransparent />
        <Search />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Filter categories={Games.categories} />
            </div>
            <div className="col-9">
              <List data={Games.gameList}></List>
            </div>
          </div>
        </div>
        <Footer isSolid />
      </div>
    );
  }
}
