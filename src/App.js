import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">HTML</a>
          </li>
          <li>
            <a href="/">CSS</a>
          </li>
          <li>
            <a href="/">Javascript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Subject title="WEB" sub="world wide web!" />
        <TOC />
        <Content />
      </div>
    );
  }
}

export default App;
