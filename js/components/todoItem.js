var React = require('react');
var Store = require('../stores/store.js');
var Actions = require('../actions/actions.js');
var TodoList = require('./todoList.js');

var TodoItem = React.createClass({
  getInitialState: function() {
    return {
      todo: this.props.todo     
    }
  },

  render: function() {

    return (
      <form className="form-inline">
        <div className="form-group">
          <li>
            {this.state.todo.todoText}
          </li>
          <button className="destroy btn btn-default" onClick={this.handleDelBtnClick} type="button">
            Delete
          </button>
          <input type="checkbox" onChange={this.handleToggleComplete}>
            Complete
          </input>
        </div>
      </form>
    )
  },

  handleDelBtnClick: function() {
    Actions.removeItem(this.state.todo);
  },

  handleToggleComplete: function() {
    console.log("toggle of check is being heard");
    Actions.toggleStateComplete(this.props.todo);
  }
});

module.exports = TodoItem;
