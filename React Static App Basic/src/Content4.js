import React from "react";
import ReactDOM from "react-dom";
export default function Content4(data)
{
    return(
        <div>
        <h2>PERSONAL DETAILS </h2>
        <ul className="content2">
        <li>{data.p}</li>
        </ul>
        <p>{data.email}</p>
    <hr></hr>
    </div>
    )
}