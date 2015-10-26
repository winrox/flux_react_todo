var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');
var CompletedTodos = require('./completedTodos.js');

var CompletedTodoItem = React.createClass({
  getInitialState: function() {
    return {
      todo: this.props.todo
    }
  },

  render: function() {
    return (
      <div>
        <li>
          {this.state.todo.todoText}
        </li>
        <button className="destroy btn btn-default" onClick={this.handleDelBtnClick} type="button">
          Delete
        </button>
        <input type="checkbox" onChange={this.handleToggleNotComplete}>
          Not Complete
        </input>
      </div>
    )
  },

  handleDelBtnClick: function() {
    Actions.removeItem(this.state.todo);
  },

  handleToggleNotComplete: function() {
    Actions.toggleStateComplete(this.props.todo);
    // Actions.removeItem(this.state.todo); //deletes it from the collection when I just want to remove it from the view
  }
});

module.exports = CompletedTodoItem;
