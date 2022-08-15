import React from "react";

export default function Card({ data, i }) {
  return (
    <>
      <div className="card-container">
        <div className="card ">
          <div className="card-body">
            <h2>
              <span className="badge  bg-light text-dark">{data.price}</span>
            </h2>
            <span className="card-number card-circle subtle">{i + 1}</span>
            <span className="card-author subtle"> {data.category}</span>
            <h3 className="card-title"> {data.name} </h3>
            <span className="card-description subtle">{data.description}</span>
            <div className="card-read">Read</div>
          </div>
          <img src={data.image} alt="images" className="card-media" />

          <span className="card-tag  subtle">Order Now</span>
        </div>
      </div>
    </>
  );
}
