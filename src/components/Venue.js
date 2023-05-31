import React from "react";
import properties from "../data/accomodation.json";

export default function Venue() {
  const accomodationCards = properties.properties.map((property) => {
    return (
      <div className="property-card">
        <img
          src={require(`../images/${property.image}`)}
          className="property-image"
          alt={property.name}
        />
        <a href={property.link} className="property-links" target="_blank">
          <div className="card-overlay">
            <h3 className="name-hover">{property.name}</h3>
            <p className="location-hover">Location: {property.location}</p>
            {property.guests ? (
              <p className="guests-hover">
                Number of Guests: {property.guests}
              </p>
            ) : null}
            {property.beds ? (
              <p className="beds-hover">Number of Beds: {property.beds}</p>
            ) : null}
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="venue-page">
      <div className="venue-section">
        <div>
          <h2 className="venue-heading-special">Falside Mill</h2>
          <p className="venue-text-special">
            The Wedding will be held at the beautiful Falside Mill<br></br>
            located just outside the Scottish countryside town of Kingsbarns.
            <br></br>
            <br></br>
            The venue itself is only a stone’s throw away from<br></br>
            Scotland’s East Coast and St Andrews, the Home of Golf.
          </p>
        </div>
        <img src={require("../images/falside.jpg")} className="venue-image" />
      </div>
      <div className="venue-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.1027138685854!2d-2.692892683937103!3d56.310800456284305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4886f9e5b0cc818d%3A0xf96d3faef3b106fe!2sFalside%20Mill!5e0!3m2!1sen!2suk!4v1658783795563!5m2!1sen!2suk"
          className="venue-map"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div>
          <h2 className="venue-heading">How to get there</h2>
          <p className="venue-text">
            You can use the image provided to take you to Google Maps to help
            you navigate your way to the venue.
            <br></br>
            <br></br>
            <b>Travel From Edinburgh Airport</b>
            <br></br>
            1. Tram to Edinburgh Gateway
            <br></br>
            2. Train to Leuchars Train Station
            <br></br>
            3. Bus to Venue / Accomodation (North East Fife DayRider)
            <br></br>
            <b>Travel From Glasgow Airport</b>
            <br></br>
            1. Bus to Glasgow Queen Street Train Station
            <br></br>
            2. Train to Haymarket Train Station
            <br></br>
            3. Train to Leuchars Train Station
            <br></br>
            4. Bus to Venue / Accomodation (North East Fife DayRider)
            <br></br>
            <b>Travel From Edinburgh Waverley</b>
            <br></br>
            1. Train to Leuchars Train Station
            <br></br>
            2. Bus to Venue / Accomodation (North East Fife DayRider)
            <br></br>
            <b>Travel From Glasgow Queen Street / Central</b>
            <br></br>
            1. Train to Haymarket Train Station
            <br></br>
            2. Train to Leuchars Train Station
            <br></br>
            3. Bus to Venue / Accomodation (North East Fife DayRider)
            <br></br>
            <br></br>
            <br></br>
            <b>
              In the evening we will be running a bus back through Kingsbarns,
              Crail, Cellardyke, Anstruther, Pittenweem and St Monans.
            </b>
          </p>
        </div>
      </div>
      <div className="accomodation-section">
        <div>
          <h2 className="venue-heading">Accomodation</h2>
          <p className="venue-text">
            There is plenty of accommodation nearby the venue for you to choose
            from.
            <br></br>
            <br></br>
            If you wish to use our bus service back to your accommodation we
            recommend you stay in the areas of Kingsbarns, Crail, Cellardyke,
            Anstruther, Pittenweem or St Monans.
            <br></br>
            <br></br>
            Below are links to a few Air B&B options in the area managed by the
            wonderful MA Holiday lets and some of the local hotels. Please feel
            free to message Luke or Rhiannon if you would like any further
            advice on where to stay for those travelling from afar.
          </p>
        </div>
        <div className="property-cards">{accomodationCards}</div>
      </div>
    </div>
  );
}
