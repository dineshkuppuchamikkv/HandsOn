import React from "react";
import ReactDOM from "react-dom";

export default function Nav() {
  return (
    <div className="nav" >
      <img src="no.png" alt="No Image" className="image1" />
      <ul className="nav2">
        <li><a href="#">Home</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <input type="text" className="input1"></input>
        <button className="button">Sign In</button>
      </ul>
    </div>
  );
}

