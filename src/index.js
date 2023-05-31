import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home.js";
import OurStory from "./components/OurStory.js";
import Itinerary from "./components/Itinerary.js";
import Food from "./components/Food.js";
import Venue from "./components/Venue.js";
import Registry from "./components/Registry.js";
import RSVP from "./components/RSVP.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Home" element={<Home />} />
          <Route path="OurStory" element={<OurStory />} />
          <Route path="Itinerary" element={<Itinerary />} />
          <Route path="Food" element={<Food />} />
          <Route path="Venue" element={<Venue />} />
          <Route path="Registry" element={<Registry />} />
          <Route path="RSVP" element={<RSVP />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
