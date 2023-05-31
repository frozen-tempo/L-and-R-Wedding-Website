import React, { useCallback, useState, useRef } from "react";
import Map, { Marker, useMap, MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import locations from "../data/locations.json";
import markerIcon from "../images/map-marker.svg";
import PopUp from "./PopUp/PopUp";
import ControlPanel from "./ControlPanel.js";
import firebase from "firebase/compat/app";

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    longitude: -7.5029786,
    latitude: 53.4494762,
    zoom: 6,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const mapRef = useRef();

  const onSelectCity = useCallback(({ longitude, latitude, zoom }) => {
    mapRef.current?.flyTo({
      center: [longitude, latitude],
      duration: 3000,
      zoom: zoom,
    });
  }, []);

  return (
    <div>
      <Map
        ref={mapRef}
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        style={{ width: "100%", height: "750px" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {locations.features.map((location) => (
          <Marker
            key={location.properties.name}
            id={location.properties.name}
            latitude={location.geometry.coordinates[1]}
            longitude={location.geometry.coordinates[0]}
            anchor="bottom"
          >
            <button
              className="marker-btn"
              onClick={() => {
                setSelectedLocation(location);
              }}
            >
              <img className="map-marker" src={markerIcon} alt="Map Marker" />
            </button>
          </Marker>
        ))}
        <ControlPanel onSelectCity={onSelectCity} />
      </Map>
      {selectedLocation ? (
        <PopUp
          trigger={selectedLocation ? true : false}
          title={selectedLocation.properties.name}
          images={selectedLocation.properties.images}
          description={selectedLocation.properties.description}
          setTrigger={setSelectedLocation}
        />
      ) : (
        ""
      )}
    </div>
  );
}
