import React from "react";
import fireIcon from "../images/fire.svg";
import crossIcon from "../images/cross.svg";
import diceIcon from "../images/dice.svg";
import heartIcon from "../images/heart.svg";
import datingImages from "../data/dating.json";

export default function DatingCard() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const photos = datingImages.map((image) => {
    if (currentSlide === datingImages.indexOf(image)) {
      return (
        <div className="dating-images-active">
          <img
            src={require(`../images/${image}`)}
            className="profile-image-active"
            key={image}
            alt={image}
          />
        </div>
      );
    } else if (currentSlide - 1 === datingImages.indexOf(image)) {
      return (
        <div className="dating-images-discard">
          <img
            src={require(`../images/${image}`)}
            className="profile-image-active"
            key={image}
            alt={image}
          />
        </div>
      );
    } else {
      return (
        <div className="dating-images">
          <img
            src={require(`../images/${image}`)}
            className="profile-image-active"
            key={image}
            alt={image}
          />
        </div>
      );
    }
  });

  function changeImage() {
    if (currentSlide === photos.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function randomImage() {
    setCurrentSlide(Math.floor(Math.random() * photos.length));
  }

  return (
    <div className="dating-card">
      <img src={require("../images/flowers.png")} className="flowers-top" />
      <img src={require("../images/flowers.png")} className="flowers-btm" />

      <div className="dating-logo">
        <img src={fireIcon} className="fire-icon" />
      </div>
      {photos}
      <div className="dating-buttons">
        <button className="dating-button">
          <img src={crossIcon} className="cross-icon" onClick={changeImage} />
        </button>
        <button className="middle-dating-button">
          <img src={diceIcon} className="dice-icon" onClick={randomImage} />
        </button>
        <button className="dating-button">
          <img src={heartIcon} className="heart-icon" onClick={changeImage} />
        </button>
      </div>
    </div>
  );
}
