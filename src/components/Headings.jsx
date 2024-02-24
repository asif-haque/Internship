import React from "react";
import "./headings.scss";
import Product from "./Product";
import { products } from "../data/products";
import Card from "./Card";

export default function Headings() {
  const lastUpdated = "February 22, 2020";
  const tags = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];
  const routes = ["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"];

  return (
    <div className="headings">
      <h1>Best Website builders in the US</h1>
      <div className="last-updated">
        <div>
          <div className="">
            <span className="material-symbols-outlined">check_circle</span>
            <span>Last Updated - {lastUpdated}</span>
          </div>
          <div className="">
            <span className="material-symbols-outlined">info</span>
            <span>Advertising Disclosure</span>
          </div>
        </div>
        <select name="" id="">
          <option value="">Top Relevent</option>
        </select>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <div className="routes">
        {routes.map((route) => (
          <div className="route" key={route}>
            <span>{route}</span>
            <span className="material-symbols-outlined">navigate_next</span>
          </div>
        ))}
      </div>
      <div className="products">
        {products.map((product, index) => {
          return <Product {...product} index={index + 1} key={index} />;
        })}
      </div>

      <h2>Related deals you might like for</h2>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="signup">
        <p>Sign up and get exclusive special deals</p>
        <div className="">
          <input type="text" />
          <button>SignUp</button>
        </div>
      </div>
    </div>
  );
}
