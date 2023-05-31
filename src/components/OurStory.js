import React, { useEffect, useState } from "react";
import MapComponent from "./Map.js";

export default function OurStory() {
  return (
    <div className="story-page">
      <img
        src={require("../images/flowers2.png")}
        className="flower-decoration-top"
      />
      <img
        src={require("../images/flowers2.png")}
        className="flower-decoration-btm"
      />
      <div className="text-section-map">
        <p>
          Meeting how all modern fairy-tales start, it all began with a swipe
          right.
          <br></br>
          <br></br>
          Use the map below to explore our adventures across the world over the
          last four years!
        </p>
      </div>
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
}
