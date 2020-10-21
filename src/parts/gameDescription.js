import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function gameDescription(props) {
  return (
    <section className="container">
      <h1 className="mb-4 text-blue">About Game</h1>
      <div className="detail-contribution">{ReactHtmlParser(props.data)}</div>
    </section>
  );
}
