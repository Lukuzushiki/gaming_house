import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import Pagination from "react-js-pagination";

export default class gameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      arrStart: 0,
      arrEnd: 12,
    };
  }

  handlePagination = (pageNumber) => {
    if (this.state.activePage < pageNumber) {
      this.setState({
        arrStart: this.state.arrEnd + 1,
        arrEnd: this.state.arrEnd * 2,
        activePage: pageNumber,
      });
    } else if (this.state.activePage > pageNumber) {
      this.setState({
        arrStart: this.state.arrStart - this.state.arrStart,
        arrEnd: this.state.arrEnd / 2,
        activePage: pageNumber,
      });
    } else {
      this.setState({
        arrStart: this.state.arrStart,
        arrEnd: this.state.arrEnd,
        activePage: pageNumber,
      });
    }
  };

  render() {
    const { data } = this.props;
    const totalData = data.length;
    return (
      <main>
        <div className="row">
          {data
            .slice(this.state.arrStart, this.state.arrEnd)
            .map((item, index) => {
              return (
                <Fade>
                  <div className="col-4">
                    <div
                      className="card card-featured"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <figure className="img-wrapper">
                        <img
                          src={`${process.env.REACT_APP_CLOUD}/${item.imageId[0].imageUrl}`}
                          alt=""
                          className="img-poster"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button className="streched-link d-block" type="link">
                          {item.title}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
        </div>
        <div
          className="justify-content-center mb-5"
          style={{ display: "flex" }}
        >
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={this.state.activePage}
            itemsCountPerPage={12}
            totalItemsCount={totalData}
            onChange={this.handlePagination}
          />
        </div>
      </main>
    );
  }
}
