import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    console.log("ReadContent render()실행");
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default ReadContent;
