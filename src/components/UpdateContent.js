import React, { Component } from "react";

class UpdateContent extends Component {
  render() {
    console.log("UpdateContent render()실행");
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.reviseContent(e.target.title.value, e.target.desc.value);
            // e.target.reset();
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder={"title"} defaultValue={this.props.title} />
          </p>
          <p>
            <textarea name="desc" placeholder="description" defaultValue={this.props.desc}></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
