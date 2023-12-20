//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let counter = 0
setInterval(() => {
    
    ReactDOM.render(<Home 
        digit1 = {((counter / 10) % 10)}
        // digit2 = {Math.floor((counter / 10) % 10)}
        // digit3 = {Math.floor((counter / 100) % 10)}
        // digit4 = {Math.floor((counter / 1000) % 10)}
        // digit5 = {Math.floor((counter / 10000) % 10)}
        // digit6 = {Math.floor((counter / 100000) % 10)}
    />, document.querySelector("#app"));
    counter = counter + 1 
}, 1000)











setInterval(() => {
    let one = Math.floor((seg/1) % 10);
    let two = Math.floor((seg/10) % 10);
    let three = Math.floor((seg/100) % 10);
    let four = Math.floor((seg/1000) % 10);
    let five = Math.floor((seg/10000) % 10);
    let six = Math.floor((seg/100000) % 10);
    seg += 1;
    ReactDOM.render(<Home digit1={one} digit2={two} digit3={three} digit4={four} digit5={five} digit6={six}  />, document.querySelector("#app"));
}, 1000);



