var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');
var CompletedTodos = require('./completedTodos.js');

var CompletedTodoItem = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        <strong>{this.props.todo.todoText}</strong>
        <button type="button" className="destroy btn btn-default btn-xs" onClick={this.handleDelBtnClick}>
          Delete
        </button>
        <input type="checkbox" className="" onChange={this.handleToggleNotComplete}>
          Not Complete
        </input>
      </li>
    )
  },

  handleDelBtnClick: function() {
    Actions.removeItem(this.props.todo);
  },

  handleToggleNotComplete: function() {
    Actions.toggleStateComplete(this.props.todo);
  }
});

module.exports = CompletedTodoItem;
