var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');
var NewTodo = require('./newTodo.js');
var TodoList = require('./todoList.js');
var CompletedTodos = require('./completedTodos.js');

var MainApp = React.createClass({
  getInitialState: function() {
    return {
      todos: {}
    }
  },

  componentDidMount: function() {
    Store.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      todos: Store.getAllTodos()
    });
  },

  render: function() {
    return (
      <div>
        <NewTodo />
        <TodoList todos={this.state.todos} filterCompleted={false} />
        <TodoList todos={this.state.todos} filterCompleted={true} />
      </div>
    )
  }

});

module.exports = MainApp;
