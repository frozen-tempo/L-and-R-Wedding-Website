import React from "react";
import { ReactComponent as CheckIcon } from "../images/check.svg";
import { ReactComponent as CrossIcon } from "../images/cross.svg";
import { ReactComponent as PlusIcon } from "../images/plus.svg";
import { ReactComponent as MinusIcon } from "../images/minus.svg";
import food from "../data/menu.json";
import Menu from "./Menu";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAs930RbhKtUy6WhnYfwMQJ_LTv4--p6tQ",
  authDomain: "landrwedding.firebaseapp.com",
  projectId: "landrwedding",
  storageBucket: "landrwedding.appspot.com",
  messagingSenderId: "651238466876",
  appId: "1:651238466876:web:f281f8ddb18b052e5a2a39",
  measurementId: "G-T64KCHXQS5",
});

export default function RSVP() {
  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [city, setCity] = React.useState("");
  const [attending, setAttending] = React.useState("");
  const [bus, setBus] = React.useState(false);
  const [startCollapse, setStartCollapse] = React.useState(false);
  const [mainCollapse, setMainCollapse] = React.useState(false);
  const [starter, setStarter] = React.useState(food.starter);
  const [main, setMain] = React.useState(food.main);
  const [dietary, setDietary] = React.useState("");

  const firestore = firebase.firestore();

  const rsvpRef = firestore.collection("rsvpinfo");
  const storeData = async (event) => {
    event.preventDefault();
    const existingGuest = await rsvpRef.doc(firstName + " " + secondName).get();
    if (!existingGuest.exists) {
      rsvpRef.doc(firstName + " " + secondName).set({
        firstName: firstName,
        secondName: secondName,
        address: address,
        postcode: postcode,
        city: city,
        attending: attending,
        bus: bus,
        starter: starter,
        main: main,
        dietary: dietary,
      });
    } else {
      rsvpRef.doc(firstName + " " + secondName).update({
        firstName: firstName,
        secondName: secondName,
        address: address,
        postcode: postcode,
        city: city,
        attending: attending,
        bus: bus,
        starter: starter,
        main: main,
        dietary: dietary,
      });
    }
    alert("Thank you for RSVPing to our Wedding. Your data has been saved!");
  };

  function changeFirstName(event) {
    setFirstName(event.target.value);
  }

  function changeSecondName(event) {
    setSecondName(event.target.value);
  }

  function changeAddress(event) {
    setAddress(event.target.value);
  }

  function changePostcode(event) {
    setPostcode(event.target.value);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  function changeAttendance(event) {
    setAttending(event.target.value);
  }

  function changeBus(event) {
    setBus(event.target.checked);
  }

  function changeDietary(event) {
    setDietary(event.target.value);
  }

  function starterCollapse() {
    setStartCollapse(!startCollapse);

    if (startCollapse === false) {
      document.getElementById("rsvp-header-start").style.padding =
        "0px 25px 0px 25px";
      document.getElementById("rsvp-header-start").style.height = "40px";
    } else if (startCollapse === true) {
      document.getElementById("rsvp-header-start").style.padding =
        "25px 25px 0px 25px";
      document.getElementById("rsvp-header-start").style.height = "30px";
    }
  }

  function mainCourseCollapse() {
    setMainCollapse(!mainCollapse);

    if (mainCollapse === false) {
      document.getElementById("rsvp-header-main").style.padding =
        "0px 25px 0px 25px";
      document.getElementById("rsvp-header-main").style.height = "40px";
    } else if (mainCollapse === true) {
      document.getElementById("rsvp-header-main").style.padding =
        "25px 25px 0px 25px";
      document.getElementById("rsvp-header-main").style.height = "30px";
    }
  }

  if (attending === "yes") {
    document.getElementById("yes-button-fill").style.width = "30px";
    document.getElementById("no-button-fill").style.width = "0px";
    document.getElementById("yes-button-fill").style.height = "30px";
    document.getElementById("no-button-fill").style.height = "0px";
  } else if (attending === "no") {
    document.getElementById("yes-button-fill").style.width = "0px";
    document.getElementById("no-button-fill").style.width = "30px";
    document.getElementById("yes-button-fill").style.height = "0px";
    document.getElementById("no-button-fill").style.height = "30px";
  }

  function chooseStarter(name) {
    setStarter((oldStarter) =>
      oldStarter.map((starter) => {
        return starter.name === name
          ? { ...starter, selected: !starter.selected }
          : starter.name !== name && starter.selected === true
          ? { ...starter, selected: !starter.selected }
          : starter;
      })
    );
  }

  function chooseMain(name) {
    setMain((oldMain) =>
      oldMain.map((main) => {
        return main.name === name
          ? { ...main, selected: !main.selected }
          : main.name !== name && main.selected === true
          ? { ...main, selected: !main.selected }
          : main;
      })
    );
  }

  const starterElements = starter.map((starter) => (
    <Menu
      key={starter.name}
      type="Starter"
      image={starter.image}
      name={starter.name}
      page="RSVP"
      selected={starter.selected}
      chooseOption={() => chooseStarter(starter.name)}
    />
  ));

  const mainElements = main.map((main) => (
    <Menu
      key={main.name}
      type="Main"
      image={main.image}
      name={main.name}
      page="RSVP"
      selected={main.selected}
      chooseOption={() => chooseMain(main.name)}
    />
  ));

  return (
    <div className="rsvp-page">
      <div className="rsvp-container">
        <img
          src={require("../images/flowers2.png")}
          className="flower-decoration-top"
        />
        <img
          src={require("../images/flowers2.png")}
          className="flower-decoration-btm"
        />
        <p className="text-section-map">
          Welcome to the RSVP Page. This is where you will be able to confirm
          your attendance and also your meal choices for the day.
          <br></br>
          <br></br>
          You can also provide any contact info which would help us get in touch
          if we ever needed to provide an update on the wedding.
          <br></br>
          <br></br>
          IMPORTANT! Please fill out all of the required fields below.
          <br></br>
          <br></br>
          If you make a mistake, dont worry just simply re-enter all of your
          information as submit the form again and our records will be updated.
        </p>

        <form className="user-form" onSubmit={storeData}>
          <div className="entry-fields">
            <label className="form-header" htmlFor="first-name">
              First Name
              <input
                type="text"
                className="form-input"
                name="first-name"
                id="first-name"
                placeholder="Enter First Name Here"
                value={firstName}
                onChange={changeFirstName}
                required
              />
            </label>
            <label className="form-header" htmlFor="second-name">
              Last Name
              <input
                type="text"
                className="form-input"
                name="second-name"
                id="second-name"
                placeholder="Enter Last Name Here"
                value={secondName}
                onChange={changeSecondName}
                required
              />
            </label>
            <label className="form-header" htmlFor="address">
              First Line of Address
              <input
                type="text"
                className="form-input"
                name="address"
                id="address"
                placeholder="Enter Address Here"
                value={address}
                onChange={changeAddress}
                required
              />
            </label>
            <label className="form-header" htmlFor="postcode">
              Postcode
              <input
                type="text"
                className="form-input"
                name="postcode"
                id="postcode"
                placeholder="Enter Postcode Here"
                value={postcode}
                onChange={changePostcode}
                required
              />
            </label>
            <label className="form-header" htmlFor="city">
              City
              <input
                type="text"
                className="form-input"
                name="city"
                id="city"
                placeholder="Enter City Here"
                value={city}
                onChange={changeCity}
                required
              />
            </label>
            <div className="attendance-radios">
              <label className="form-header-radio" htmlFor="attending">
                Attending?
                <label htmlFor="yes" className="yes-radio" id="yes-radio">
                  <input
                    type="radio"
                    className="form-radio-yes"
                    name="attending"
                    id="yes"
                    value="yes"
                    onChange={changeAttendance}
                    required
                  />
                  <div className="yes-button-fill" id="yes-button-fill"></div>
                  <CheckIcon fill="white" width="20px" height="20px" />
                </label>
                <label htmlFor="no" className="no-radio" id="no-radio">
                  <input
                    type="radio"
                    className="form-radio-no"
                    name="attending"
                    id="no"
                    value="no"
                    onChange={changeAttendance}
                    required
                  />
                  <div className="no-button-fill" id="no-button-fill"></div>
                  <CrossIcon fill="white" width="20px" height="20px" />
                </label>
              </label>
            </div>
            <div className="attendance-radios">
              <label className="form-header-radio" htmlFor="bus">
                Evening Shuttle Bus Required?
                <input type="checkbox" id="bus" onChange={changeBus} />
              </label>
            </div>
          </div>

          <div className="food-options">
            <div id="rsvp-header-start" onClick={starterCollapse}>
              <h2 className="rsvp-option">Choose Starter</h2>
              {!startCollapse ? (
                <PlusIcon fill="white" width="20px" height="20px" />
              ) : (
                <MinusIcon fill="white" width="20px" height="20px" />
              )}
            </div>
            {startCollapse && starterElements}
            <div id="rsvp-footer"></div>

            <div id="rsvp-header-main" onClick={mainCourseCollapse}>
              <h2 className="rsvp-option">Choose Main Course</h2>
              {!mainCollapse ? (
                <PlusIcon fill="white" width="20px" height="20px" />
              ) : (
                <MinusIcon fill="white" width="20px" height="20px" />
              )}
            </div>
            {mainCollapse && mainElements}
            <div id="rsvp-footer"></div>
          </div>

          <div className="dietary-requirements">
            <label className="form-header" htmlFor="dietary">
              Dietary Requirements
              <textarea
                type="textarea"
                className="form-input"
                name="dietary"
                id="dietary"
                placeholder="eg. Vegan, Allegeries: Nuts, Intolerances: Dairy etc."
                value={dietary}
                onChange={changeDietary}
              />
            </label>
          </div>
          <div className="buttons">
            <button className="form-submit" type="submit">
              Submit / Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
