import React, { Component } from "react";
import Button from "elements/Button";

import Search from "assets/images/search.png";

export default class searchBar extends Component {
  state = {
    sort: "",
  };

  setSort = (e) => {
    this.setState({ sort: e.target.value });
  };
  render() {
    const option = ["Release Date", "Popular"];

    return (
      <section className="container">
        <h1 className="mb-5">Our Games</h1>
        <div className="search mb-2">
          <div className="sort">
            <h1>
              Sort by
              <select className="styled-select" onChange={this.setSort}>
                {option.map((item, index) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </h1>
          </div>
          <form class="example ml-auto">
            <input type="text" placeholder="Search.." />
            <button type="submit">
              <img
                src={Search}
                alt="Search"
                style={{ height: 24, width: 24 }}
              />
            </button>
          </form>
        </div>
      </section>
    );
  }
}
