import React, { Component } from "react";

import Navbar from "parts/Navbar";
import PictGame from "parts/gamePict";
import Description from "parts/gameDescription";
import SystemRequire from "parts/systemRequirements";
import UserReview from "parts/userReviews";
import Footer from "parts/Footer";

import gamesData from "json/detailGames.json";
import communityData from "json/Community.json";

export default class detailGames extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} isTransparent />
        <PictGame data={gamesData} />
        <Description data={gamesData} />
        <SystemRequire data={gamesData} />
        <UserReview post={communityData.post} />
        <Footer isSolid />
      </div>
    );
  }
}
