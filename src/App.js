import React, { Component } from "react";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import DeleteContent from "./components/DeleteContent";
import Control from "./components/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "create",
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
      _desc,
      _article,
      _toc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
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
      _article = <ReadContent title={_title} desc={_desc} />;
      _toc = (
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_id: Number(id),
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          addContent={(_title, _desc) => {
            this.max_content_id = this.max_content_id + 1;
            this.setState({
              contents: this.state.contents.concat({ id: this.max_content_id, title: _title, desc: _desc }),
              // mode: "read",
            });
          }}
        />
      );
      _toc = (
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_id: Number(id),
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      let i = 0;
      while (i < this.state.contents.length) {
        if (this.state.contents[i].id === this.state.selected_id) {
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          console.log(i, "i의 값");
          break;
        }
        i = i + 1;
      }
      _article = (
        <UpdateContent
          title={_title}
          desc={_desc}
          reviseContent={(_title, _desc) => {
            let revisedContent = this.state.contents.concat();
            revisedContent[i] = { id: i + 1, title: _title, desc: _desc };
            this.setState({
              contents: revisedContent,
              // mode: "read",
            });
          }}

          // { contents: this.state.contents.concat({ id: this.state.contents.length + 1, title: _title, desc: _desc }
        />
      );
      _toc = (
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_id: Number(id),
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "delete") {
      let i = 0;
      while (i < this.state.contents.length) {
        if (this.state.contents[i].id === this.state.selected_id) {
          _title = this.state.contents[i].title;
          _desc = this.state.contents[i].desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc} />;
      _toc = (
        <DeleteContent
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_id: Number(id),
            });
          }.bind(this)}
          deleteContent={(data_index) => {
            let newContent = this.state.contents.slice();
            // newContent.shift(data_index);
            newContent.splice(data_index, 1);
            this.setState({
              contents: newContent,
            });
          }}
        />
      );
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
        {_toc}
        {/* <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_id: Number(id),
            });
          }.bind(this)}
        /> */}
        <Control onChangeMode={(_mode) => this.setState({ mode: _mode })} />
        {/* <ReadContent title={_title} desc={_desc} /> */} {_article}
      </div>
    );
  }
}

export default App;
