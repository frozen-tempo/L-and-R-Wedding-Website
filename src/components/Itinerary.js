import React from "react";
import { useEffect } from "react";
import TimelineLeft from "./TimelineLeft";
import TimelineRight from "./TimelineRight";

export default function Itinerary() {
  return (
    <div className="itinerary-page">
      <div className="timeline"></div>
      <div className="timeline-items">
        <TimelineLeft
          image1="ceremony_1.svg"
          alt1="ceremony_1"
          image2="ceremony_2.svg"
          alt2="ceremony_2"
          description="Ceremony"
          time="13:00pm"
        />
        <TimelineRight
          image1="confetti.svg"
          alt1="confetti"
          image2="confetti.svg"
          alt2="confetti"
          description="Confetti Shot"
          time="13:30pm"
        />
        <TimelineLeft
          image1="cocktail_1.svg"
          alt1="cocktail_1"
          image2="cocktail_2.svg"
          alt2="cocktail_2"
          description="Drinks Reception and Canapes"
          time="13:45pm"
        />
        <TimelineRight
          image1="dinner_1.svg"
          alt1="dinner_1"
          image2="dinner_2.svg"
          alt2="dinner_2"
          description="Dinner and Speeches"
          time="16:15pm"
        />
        <TimelineLeft
          image1="evening_1.svg"
          alt1="evening_1"
          image2="evening_2.svg"
          alt2="evening_2"
          description="Evening Guests Arrive"
          time="19:30pm"
        />
        <TimelineRight
          image1="first_dance_1.svg"
          alt1="first_dance_1"
          image2="first_dance_2.svg"
          alt2="first_dance_2"
          description="First Dance"
          time="20:00pm"
        />
        <TimelineLeft
          image1="buffet_1.svg"
          alt1="buffet_1"
          image2="buffet_2.svg"
          alt2="buffet_2"
          description="Evening Buffet"
          time="21:45pm"
        />
        <TimelineRight
          image1="evening_1.svg"
          alt1="evening_1"
          image2="evening_2.svg"
          alt2="evening_2"
          description="Last Dance"
          time="00:00am"
        />
        <TimelineLeft
          image1="cocktail_1.svg"
          alt1="cocktail_1"
          image2="cocktail_2.svg"
          alt2="cocktail_2"
          description="Last Orders"
          time="00:45am"
        />
      </div>
    </div>
  );
}
