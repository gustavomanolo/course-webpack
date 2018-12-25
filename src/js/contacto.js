import "../assets/css/style.css";

import nbaLogo from "../assets/img/nba.png";
import videoMP4 from "../assets/videos/video.mp4";
import teachersJSON from './teachers.json'

import React, { Component } from "react";
import { render } from "react-dom";

// import "Teachers" component
import Teachers from "./components/teachers";

render(<Teachers data={teachersJSON} />, document.getElementById("reactElement"));

document.write("Contacto");

// Add image
const img = document.createElement("img");
img.setAttribute("src", nbaLogo);
img.setAttribute("width", 100);
img.setAttribute("height", 100);
document.body.append(img);
