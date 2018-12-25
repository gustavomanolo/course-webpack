import React, { Component } from "react";
import Teacher from "./teacher";

class Teachers extends Component {
  render() {
    return (
      <ul className="Teachers">
        {this.props.data.teachers.map(teacher => {
          return <Teacher key={teacher.twitter} {...teacher} />;
        })}
      </ul>
    );
  }
}

export default Teachers;
