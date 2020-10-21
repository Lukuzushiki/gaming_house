import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "parts/Navbar";
import Featured from "parts/Featured";
import Games from "parts/newGames";
import Recomended from "parts/Recomended";
import Partner from "parts/Partners";
import Special from "parts/Special";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Gaming House | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(`/landing-page`, "landingPage");
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage")) return null;
    return (
      <>
        <Navbar {...this.props} isLanding />
        <Featured data={page.landingPage.featured} />
        <Games data={page.landingPage.newGames} />
        <Recomended data={page.landingPage.recomended} />
        <Partner data={page.landingPage.partner} />
        <Special />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
