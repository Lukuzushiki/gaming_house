import React from "react";

export default function newsUpdate(props) {
  return (
    <section className="container">
      <h1 className="mb-4">News and Update</h1>

      {props.data.map((item, index) => {
        return (
          <div className="card card-update">
            <img className="mb-3" src={item.imgUrls} alt={item.title} />
            <h2>{item.title}</h2>
            <h5 className="mb-3">{item.date}</h5>
            <p>{item.content}</p>
          </div>
        );
      })}
    </section>
  );
}
