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

// need to get this view or a parent listening to the change event i think
  render: function() {

    return (
      <li>
        {this.state.todo.todoText}
      </li>
    )
  }
});

module.exports = TodoItem;
