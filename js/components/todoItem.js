var React = require('react');
var Store = require('../stores/store.js');
var Actions = require('../actions/actions.js');
var TodoList = require('./todoList.js');

var TodoItem = React.createClass({
  render: function() {

    return (
      <li className="list-group-item">
        <strong>{this.props.todo.todoText}</strong>
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
    Actions.removeItem(this.props.todo);
  },

  handleToggleComplete: function() {
    Actions.toggleStateComplete(this.props.todo);
  }
});

module.exports = TodoItem;
