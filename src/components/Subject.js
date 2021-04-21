import React, { Component } from "react";

class Subject extends Component {
  render() {
    console.log("Subject render()실행");
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              console.log("click함");
            }}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
