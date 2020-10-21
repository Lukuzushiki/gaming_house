import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "parts/Navbar";
import Search from "parts/searchBar";
import Filter from "parts/Filter";
import List from "parts/gameList";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

class ourGames extends Component {
  componentDidMount() {
    window.title = "Gaming House | Our Games";
    window.scrollTo(0, 0);

    if (!this.props.page.ourGames)
      this.props.fetchPage("/our-games", "ourGames");
  }
  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("ourGames")) return null;
    return (
      <>
        <Navbar {...this.props} isTransparent />
        <Search />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Filter categories={page.ourGames.category} />
            </div>
            <div className="col-9">
              <List data={page.ourGames.item}></List>
            </div>
          </div>
        </div>
        <Footer isSolid />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(ourGames);
