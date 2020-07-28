import React, { Component } from "react";

import Search from "assets/images/search.png";

import games from "json/ourGames.json";

export default class searchBar extends Component {
  state = {
    sort: "",
    games,
    filterData: games,
  };

  setSort = (e) => {
    this.setState({ sort: e.target.value });
  };

  handleChange = (e) => {
    const { value } = e.target;
    const loweredCaseValue = value.toLowerCase();

    this.setState((prevState) => {
      const data = prevState.data.filter((el) =>
        el.gameList.toLowerCase().includes(loweredCaseValue)
      );

      return data;
    });
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
            <input
              type="text"
              placeholder="Search.."
              onChange={this.handleChange}
            />
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
