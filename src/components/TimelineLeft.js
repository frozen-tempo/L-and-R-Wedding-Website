import React from "react";
import { useEffect } from "react";

export default function TimelineLeft(props) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden-left");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="hidden-left timeline-left">
      <div className="timeline-line-left"></div>
      <div className="timeline-marker-left"></div>
      <div className="timeline-item">
        <img
          src={require(`../images/${props?.image1}`)}
          className="timeline-image"
          alt={props.alt1}
        />
        <img
          src={require(`../images/${props?.image2}`)}
          className="timeline-image"
          alt={props.alt2}
        />
        <div className="timeline-text-left">
          <p className="timeline-event-left">{props.description}</p>
          <p className="timeline-time-left">{props.time}</p>
        </div>
      </div>
    </div>
  );
}
