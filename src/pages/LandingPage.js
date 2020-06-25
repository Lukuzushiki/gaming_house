import React, { Component } from "react";

import Navbar from "parts/Navbar";
import Featured from "parts/Featured";
import Games from "parts/newGames";
import Recomended from "parts/Recomended";
import Partner from "parts/Partners";
import Special from "parts/Special";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <div>
        <Navbar {...this.props} isLanding />
        <Featured data={landingPage.featured} />
        <Games data={landingPage.newGames} />
        <Recomended data={landingPage.recomended} />
        <Partner data={landingPage.partner} />
        <Special />
        <Footer />
      </div>
    );
  }
}
