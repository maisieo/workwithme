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
          FIND A COWORKING BUBBLE
        </a>
        <a href="/new-bubble" type="button" class="btn btn-secondary btn-lg">
          CREATE A COWORKING BUBBLE
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
