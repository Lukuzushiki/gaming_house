import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Arrow from "assets/images/arrow.svg";
import Button from "elements/Button";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle: false,
    };
  }

  setToogleOn = () => {
    if (this.state.toogle === true) {
      this.setState({ toogle: false });
    } else {
      this.setState({ toogle: true });
    }
  };
  render() {
    const { categories } = this.props;
    return (
      <div className="filter">
        <h4>Filters</h4>
        <Button
          className="filter-toogle"
          type="link"
          onClick={this.setToogleOn}
        >
          Genre{" "}
          <img
            className={`arrow ${this.state.toogle === true ? "below" : ""}`}
            src={Arrow}
            alt="Arrow"
          />
        </Button>
        {this.state.toogle === true ? (
          <div>
            {categories.map((item, index) => {
              return (
                <div key={`categories-${[index]}`}>
                  <Fade delay={100 * index}>
                    <Button className="filter-toogle-item" type="link">
                      {item.title}
                    </Button>
                  </Fade>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
