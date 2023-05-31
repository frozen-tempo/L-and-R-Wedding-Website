import React from "react";
import "./PopUp.css";

export default function PopUp(props) {
  const imageElements = props.images.map((image) => {
    return (
      <img src={require(`./images/${image}`)} className="location--image" />
    );
  });

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>{props.title}</h1>
        <div className="popup-images">{imageElements}</div>
        <button className="popup-btn" onClick={() => props.setTrigger(null)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
