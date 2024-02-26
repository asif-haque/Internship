import React from "react";
import "./product.scss";

export default function Product({
  achievement,
  index,
  imgTitle,
  about,
  highlights,
  score,
  comment,
  star,
  div4,
}) {
  return (
    <div className="product">
      {achievement && (
        <div className="achievement">
          <span className="material-symbols-outlined">
            {achievement.symbol}
          </span>
          {achievement.name}
        </div>
      )}
      <div className="index">{index}</div>
      <div className="container">
        <div className="image">
          <div>
            <img src="/images/download 1.png" alt="img" />
            <p className="img-title">{imgTitle}</p>
          </div>
        </div>
        <div className="about">
          <b>{about.title}</b> {about.desc}
          <div className="highlights">
            <p>
              <b>Main highlights</b>
            </p>
            [What You Get]: {highlights}
          </div>
          {div4 && (
            <>
              <div className="comments">
                <div className="">
                  <span>9.9</span>
                  <p>Building Responsive</p>
                </div>
                <div className="">
                  <span>8.9</span>
                  <p>Cool</p>
                </div>
                <div className="">
                  <span>8.9</span>
                  <p>Docs</p>
                </div>
              </div>
              <div className="why">
                Why we love it
                <div className="">
                  <div className="">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    <p>Documentation</p>
                  </div>
                  <div className="">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    <p>Easy Use</p>
                  </div>
                  <div className="">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    <p>Out of Box</p>
                  </div>
                </div>
              </div>
            </>
          )}
          <button className="more">Show more</button>
        </div>
        <div className="div-3">
          <div className="rating">
            <p className="score">{score}</p> <p>{comment}</p> <p>{star}</p>
          </div>
          <button className="view-more">View More</button>
        </div>
      </div>
    </div>
  );
}
