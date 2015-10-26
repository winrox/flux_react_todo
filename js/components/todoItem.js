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
      <li className="list-group-item">
        <strong>{this.state.todo.todoText}</strong>
        <button type="button" className="destroy btn btn-default btn-xs" onClick={this.handleDelBtnClick}>
          Delete
        </button>
        <input type="checkbox" className="" onChange={this.handleToggleComplete}>
          Complete
        </input>
      </li>
    )
  },

  handleDelBtnClick: function() {
    Actions.removeItem(this.state.todo);
  },

  handleToggleComplete: function() {
    Actions.toggleStateComplete(this.props.todo);
  }
});

module.exports = TodoItem;
