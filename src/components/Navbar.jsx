import React, { useState } from "react";
import "./navbar.scss";

export default function Navbar({ main }) {
  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState(false); // for mobile nav -> menu
  // To close the menu slide when tapped in the body
  if (main) {
    main.addEventListener("click", () => {
      setClicked(false);
    });
  }
  // stop scroll when menu open
  if (clicked) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "auto";
  }

  // Sticky Nav
  document.onscroll = () => {
    if (window.scrollY > (3 * window.innerHeight) / 2) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      {show && (
        <div className="header">
          <nav>
            <div className="search-div">
              <input type="text" />
              <span className="material-symbols-outlined search-icon">
                search
              </span>
            </div>
            <div className="desktop-nav">
              <a href="">Categories</a>
              <a href="">Website Builders</a>
              <a href="">Today's deals</a>
            </div>
            <button onClick={() => setClicked(!clicked)}>
              <span className="material-symbols-outlined">
                {clicked ? `menu_open` : `menu`}
              </span>
            </button>
          </nav>
          {/* slide opens */}
          <div className={`menu-div ${clicked ? `show` : `hide`}`}>
            <a href="">Categories</a>
            <a href="">Website Builders</a>
            <a href="">Today's deals</a>
          </div>
        </div>
      )}
    </>
  );
}
