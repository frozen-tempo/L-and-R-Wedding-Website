import React from "react";

export default function Menu(props) {
  const cssClass = props.page === "food" ? "food-item" : "food-item-rsvp";
  const styles = {
    backgroundColor: props.selected ? "#abd3b9" : "#FFFFFF",
  };

  return (
    <div className={cssClass} onClick={props.chooseOption} style={styles}>
      <img
        src={require(`../images/${props.image}`)}
        className="food-image"
        alt={props.name}
      />
      <div className="food-desc">
        <h3 className="food-name">{props.name}</h3>
      </div>
    </div>
  );
}
