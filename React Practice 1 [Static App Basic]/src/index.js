import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import './index.css';
import Content1 from "./Content1"; 
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

function Indo() {
    return (
        <div>
            <Nav />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 
                p="dineshkuppuchamikkv@gmail.com"
                email=""
            />
        </div>
    );
}

ReactDOM.render(<Indo />, document.getElementById("root"));
