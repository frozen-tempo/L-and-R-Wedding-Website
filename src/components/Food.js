import React from "react";
import food from "../data/menu.json";
import Menu from "./Menu";
import pizzas from "../data/pizzas.json";
import iceCream from "../data/ice_cream.json";

export default function Food() {
  const canapeElements = food.canapes.map((canapes) => (
    <Menu
      key={canapes.name}
      type="Canape"
      image={canapes.image}
      name={canapes.name}
      page="food"
      selected={false}
    />
  ));

  const starterElements = food.starter.map((starter) => (
    <Menu
      key={starter.name}
      type="Starter"
      image={starter.image}
      name={starter.name}
      page="food"
      selected={false}
    />
  ));

  const mainElements = food.main.map((main) => (
    <Menu
      key={main.name}
      type="Main"
      image={main.image}
      name={main.name}
      page="food"
      selected={false}
    />
  ));

  const dessertElements = food.dessert.map((dessert) => (
    <Menu
      key={dessert.name}
      type="Dessert"
      image={dessert.image}
      name={dessert.name}
      page="food"
      selected={false}
    />
  ));

  const pizzaElements = pizzas.map((pizza) => (
    <div className="pizza-card">
      <img src={require(`../images/${pizza.icon}`)} className="pizza-icon" />
      <div style={{ maxWidth: "350px" }}>
        <h3
          style={{
            color: pizza.color,
            fontSize: pizza.fontSize,
            margin: "0px",
          }}
        >
          {pizza.name}
        </h3>
        <p style={{ fontStyle: "italic", alignItems: "center" }}>
          {pizza.description}
        </p>
      </div>
    </div>
  ));

  const iceCreamElements = iceCream.map((iceCream) => (
    <div className="pizza-card">
      <img src={require(`../images/${iceCream.icon}`)} className="pizza-icon" />
      <div style={{ maxWidth: "350px" }}>
        <h3
          style={{
            color: iceCream.color,
            fontSize: iceCream.fontSize,
            margin: "0px",
          }}
        >
          {iceCream.name}
        </h3>
      </div>
    </div>
  ));

  return (
    <div className="food-page">
      <div className="text-section-map">
        <p>
          Through-out the day we never want you to go hungry so it is important
          to us that the day is filled with tasty food and happy family and
          friends!
          <br></br>
          <br></br>
          Catering for the main meal and bar services will be provided by A & D
          Bar and Catering Services. The full extent of what will be on offer
          can be viewed below.
          <br></br>
          <br></br>
          Our evening buffet will be provided by Fallones Pizza & Gelato Italian
          Catering. Details of which can be seen at the bottom of the page.
          <br></br>
          <br></br>
          Please note that any dietary requirements can be accommodated so be
          sure to note these in your RSVP response.
        </p>
      </div>
      <img
        src={require("../images/flowers2.png")}
        className="flower-decoration-top"
      />
      <img
        src={require("../images/flowers2.png")}
        className="flower-decoration-btm"
      />
      <div className="menu-items">
        <h2 className="course-title">Canapes</h2>
        <div className="food-info">
          <p>
            For our canopies we will be serving a number of delicous homemade
            foods including Sausage Rolls, Finger Sandwiches and much more.
          </p>
        </div>
        {canapeElements}
        <h2 className="course-title">Main Meal</h2>
        <h2 className="course-title">Choice of Starters</h2>
        {starterElements}
        <h2 className="course-title">Choice of Mains</h2>
        <p className="food-info">
          All main meals will be served with a selection of Fresh Carrots, Green
          Beans, Roast and Mashed Potatoes.
        </p>
        {mainElements}
        <h2 className="course-title">Choice of Desserts</h2>
        <p className="food-info">
          All desserts will be served in dishes to each table, giving guests a
          chance to try all of the delicious desserts.
        </p>
        {dessertElements}
      </div>
      <h2 className="course-title">Evening Food</h2>
      <p className="food-info">
        Food for the evening will be selection of pizzas and ice cream provided
        by Fallones based in Dundee.
      </p>
      <h2 className="course-title">Pizza Toppings</h2>
      <div className="pizza-cards">{pizzaElements}</div>
      <h2 className="course-title">Ice Cream Flavours</h2>
      <div className="pizza-cards">{iceCreamElements}</div>
    </div>
  );
}
