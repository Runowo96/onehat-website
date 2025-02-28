import React from "react";
import "./HeroBanner.scss";
import heroImage from "../../assets/images/hero-image-center_1200x500-cropped.png";

function HeroBanner() {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-banner__text-cont">
          <h1 className="hero-banner__title">Welcome</h1>
          <p className="hero-banner__description">
            Stop buying a new hat when your kid grows, just buy ONEHAT
          </p>
        </div>
        <div className="hero-banner__img-cont">
          <img src={heroImage} alt="hero-banner" className="hero-banner__img" />
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
