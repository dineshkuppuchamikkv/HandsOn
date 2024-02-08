import React from "react";
import ReactDOM from "react-dom/client";

export default function Profile(props) {
  return (
    <div className="container">
      <div>
        <img src={props.img} className="image-container" />
      </div>
      <div className={props.online?"pro-online":"pro-offline"}>
        <h3>{props.online?"ONLINE":"OFFLINE"}</h3>
      </div>
      <div className="profile-name">
        <h3>{props.name}</h3>
      </div>
      <div className="profile-job">
        <h3>{props.role}</h3>
      </div>
      <div className="profile-skills">
        <h2>Skills</h2>
        <ul className="list-values">
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
