import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;

    return (
      <div className="card card-body my-3 shadow-lg p-3 mb-5 bg-white rounded">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-book" aria-hidden="true"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
