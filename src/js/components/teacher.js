import React, { Component } from "react";

function Teacher(props) {
  return (
    <li className="Teacher">
      <a href={`https://www.twitter.com/${props.twitter}`}>{props.name}</a>
    </li>
  );
}

export default Teacher;
