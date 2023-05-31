import React from "react";
import DatingCard from "./DatingCard.js";
import Countdown from "./Countdown.js";

export default function Home() {
  return (
    <div className="homepage">
      <DatingCard />
      <div className="home-content">
        <h1 className="home-header">Luke & Rhiannon's Wedding</h1>
        <p className="home-intro">
          Hello, if you are reading this Luke has somehow managed to get this
          webpage online.
          <br></br>
          <br></br>
          Time to celebrate!
          <br></br>
          <br></br>
          You are cordially invited to celebrate the wedding of Luke and
          Rhiannon on the 2nd of August 2023.
          <br></br>
          <br></br>
          Use the tabs at the top of the page to navigate our website and find
          out more information about our special day.
          <br></br>
          <br></br>
          Please RSVP using the tab at the top of the page.
        </p>
        <Countdown />
      </div>
    </div>
  );
}
