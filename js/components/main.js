var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');
var NewTodo = require('./newTodo.js');
var TodoList = require('./todoList.js');

var MainApp = React.createClass({

  render: function() {
    return (
      <div>
      <NewTodo />
      <TodoList /> 
      </div>
    )
  }

});

module.exports = MainApp;
