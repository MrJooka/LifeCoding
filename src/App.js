import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_id: 1,
      subject: { title: "WEB", sub: "world wide web!" },
      welcome: { title: "Welcome", desc: "Hello React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText Markup Language." },
        { id: 2, title: "CSS", desc: "CSS is Cascading Style Sheets." },
        { id: 3, title: "Javascript", desc: "Javascript is bla bla bla." },
      ],
    };
  }

  render() {
    console.log("App render()실행");
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        if (this.state.contents[i].id === this.state.selected_id) {
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        />
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_id: Number(id),
            });
          }.bind(this)}
        />
        <Content title={_title} desc={_desc} />
      </div>
    );
  }
}

export default App;
