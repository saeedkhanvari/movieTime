import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";
import { useState } from "react";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        onSetRating={setMovieRating}
        defaultRating={3}
      />
      <p>this movie got {movieRating} start</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["terrible", "bad", "ok", "good", "exellent"]}
    />
    <StarRating
      maxRating={10}
      color="red"
      size={40}
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
