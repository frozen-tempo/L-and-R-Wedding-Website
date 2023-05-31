import React from "react";

export default function Registry() {
  return (
    <div className="registry-page">
      <img
        src={require("../images/flowers2.png")}
        className="flower-decoration-top"
      />
      <img
        src={require("../images/flowers2.png")}
        className="flower-decoration-btm"
      />
      <div className="text-section">
        <h1 className="registry-header">Wishing Well</h1>
        <p>
          Your presence at our wedding is the most special present of all.
          <br></br>
          <br></br>
          However if you would like to give us a gift to help us on our way.
          <br></br>
          <br></br>A gift of money towards our travel fund would really make our
          day!
        </p>
      </div>
      <div className="donations">
        <img
          src={require("../images/collection_pot.png")}
          className="collection-pot-qr"
        ></img>
        <a
          href=" https://www.collectionpot.com/pot/3063549/
"
          target="blank"
          style={{ color: "#79ac73", fontSize: "32px" }}
        >
          Gift
        </a>
      </div>
    </div>
  );
}
