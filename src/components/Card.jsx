import React from "react";
import "./card.scss";

export default function Card() {
  return (
    <div className="card">
      <img
        src="/images/download 1.png"
        alt="Product Image"
        className="card-image"
      />
      <div className="card-tags">
        <span className="tag">20% Off</span>
        <span className="tag">Limited Time</span>
      </div>
      <p className="card-title">Webbuilder 1</p>
      <p className="card-description">
        Computer Modern clasic with wix support
      </p>
      <p className="card-price">
        <span>$39.96</span>
        <span>$49.96</span>
        <span>20% off</span>
      </p>
      <button className="card-button">View Deal</button>
    </div>
  );
}
