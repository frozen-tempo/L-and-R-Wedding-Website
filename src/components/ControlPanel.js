import React from "react";
import countries from "../data/countries.json";

export default function ControlPanel(props) {
  return (
    <div className="control-panel">
      {countries.map((country, index) => (
        <div key={`btn-${index}`} className="input">
          <input
            type="radio"
            name="country"
            value={country.name}
            id={`country-${index}`}
            defaultChecked={country.name === "Ireland"}
            onClick={() => props.onSelectCity(country)}
          />
          <label htmlFor={`country-${index}`} className="map-label">
            {country.name}
          </label>
        </div>
      ))}
    </div>
  );
}
