import React from "react";

export default function gameDescription(props) {
  return (
    <section className="container">
      <h1 className="mb-4 text-blue">About Game</h1>
      <p className="detail-contribution description">{props.data.about}</p>
    </section>
  );
}
