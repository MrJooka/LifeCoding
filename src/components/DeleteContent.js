import React, { Component } from "react";

class DeleteContent extends Component {
  render() {
    console.log("DeleteContent render()실행");
    const data = this.props.data;
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
          >
            {data[i].title}
          </a>
          <input
            type="button"
            name="delete"
            value="Delete"
            onClick={function (e) {
              e.preventDefault();
              this.props.deleteContent(i);
            }.bind(this)}
          />
        </li>
      );
    }

    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default DeleteContent;
