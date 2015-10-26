var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');
var TodoItem = require('./todoItem.js');

var TodoList = React.createClass({
  //gets the current state of todos in store
  getInitialState: function() {
    return {
      allTodos: Store.getAllTodos()
    }
  },

  render: function(){
    var allTodos = this.state.allTodos;
    var todos = [];

    if(this.state.allTodos.length < 1) {
      return null;
    }

    for (var key in allTodos) {
      if(allTodos[key].completeTask == false) {
        todos.push(<TodoItem key={key} todo={allTodos[key]} />);
      }
    }

    return (
      <div>
        <ul id="todo-list">
          {todos}
        </ul>
      </div>
    )
  }
});

module.exports = TodoList;
