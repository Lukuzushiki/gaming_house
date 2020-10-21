import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "parts/Navbar";
import Menu from "parts/navCommunity";
import Post from "parts/Post";
import Footer from "parts/Footer";
import About from "parts/aboutCommunity";

import { fetchPage } from "store/actions/page";

class Community extends Component {
  componentDidMount() {
    window.title = "Gaming House | Community";
    window.scrollTo(0, 0);

    if (!this.props.page.communityPage)
      this.props.fetchPage("/community-page", "communityPage");
  }
  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("communityPage")) return null;
    return (
      <div>
        <Navbar {...this.props} />
        <Menu {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Post post={page.communityPage.community} />
            </div>
            <div className="col-4">
              <About data={page.communityPage.user} />
            </div>
          </div>
        </div>
        <Footer isSolid />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(Community);
