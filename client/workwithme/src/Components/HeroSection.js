import React from "react";
import "../App.css";
import "./HeroSection.css";
import Button from "react-bootstrap";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>WORK WITH ME</h1>

      <div className="hero-btns">
        <a href="/join-bubble" type="button" class="btn btn-secondary btn-lg">
          FIND A BUBBLE
        </a>
        <a href="/new-bubble" type="button" class="btn btn-secondary btn-lg">
          CREATE A BUBBLE
        </a>

        {/* <button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          FIND A BUBBLE
        </button>
        <button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          CREATE A BUBBLE
          <i className="far fa-play-circle" />
        </button> */}
      </div>
    </div>
  );
}

export default HeroSection;
