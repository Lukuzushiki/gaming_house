import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "parts/Navbar";
import PictGame from "parts/gamePict";
import Description from "parts/gameDescription";
import SystemRequire from "parts/systemRequirements";
import UserReview from "parts/userReviews";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

class detailGames extends Component {
  componentDidMount() {
    window.title = "Gaming House | Detail Games";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }
  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) return null;
    return (
      <>
        <Navbar {...this.props} isTransparent />
        <PictGame data={page[match.params.id].item} />
        <Description data={page[match.params.id].item.description} />
        <SystemRequire data={page[match.params.id].item.requirementsId} />
        <UserReview data={page[match.params.id].item.userReviewId} />
        <Footer isSolid />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(detailGames);
