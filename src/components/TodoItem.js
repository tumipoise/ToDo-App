import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-content-left my-2">
          <h6>{title}</h6>
        </li>
      </div>
    );
  }
}

export default TodoItem;
