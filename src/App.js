import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.myAlert = React.createRef();
    this.state = {
      items: [],
      id: 0,
      item: "",
      editItem: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.item === "") {
      this.myAlert.current.style.display = "block";
      setTimeout(() => {
        this.myAlert.current.style.display = "none";
      }, 2000);

      return false;
    }

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: "",
      id: 0,
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between bg-dark text-white py-1 px-3">
          <h6 className="mt-1">DevCareer 1st React Task</h6>
          <h6 className="mt-1">👩 TumiPoise </h6>
        </div>
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <div
              className="alert alert-danger"
              style={{ display: "none" }}
              role="alert"
              ref={this.myAlert}
            >
              {" "}
              Please, enter a Todo list
            </div>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList items={this.state.items} clearList={this.clearList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
