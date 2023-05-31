import React from "react";
import { useEffect } from "react";

export default function TimelineLeft(props) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden-right");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="hidden-right timeline-right">
      <div className="timeline-line-right"></div>
      <div className="timeline-marker-right"></div>
      <div className="timeline-item">
        <div className="timeline-text-right">
          <p className="timeline-event-right">{props.description}</p>
          <p className="timeline-time-right">{props.time}</p>
        </div>
        <img
          src={require(`../images/${props.image1}`)}
          className="timeline-image"
          alt={props.alt1}
        />
        <img
          src={require(`../images/${props.image2}`)}
          className="timeline-image"
          alt={props.alt2}
        />
      </div>
    </div>
  );
}
