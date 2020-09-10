import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList } = this.props;

    return (
      <div>
        {items.length > 0 ? (
          <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">Todo List</h3>
            {items.map((item) => {
              return <TodoItem key={item.id} title={item.title} />;
            })}

            <button
              type="submit"
              className="btn btn-danger btn-block text-capitalize mt-5"
              onClick={clearList}
            >
              Clear List
            </button>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default TodoList;
