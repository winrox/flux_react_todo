var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');
var TodoItem = require('./todoItem.js');

var TodoList = React.createClass({
  // //gets the current state of todos in store
  // getInitialState: function() {
  //   return {
  //     allTodos: this.props.todos
  //   }
  // },

  render: function(){
    var allTodos = this.props.todos;
    var todos = [];

    if(allTodos < 1) {
      return null;
    }

    for (var key in allTodos) {
      //allows for any todos marked complete to NOT be rendered.
      if(allTodos[key].completeTask == false) {
        todos.push(<TodoItem key={key} todo={allTodos[key]} />);
      }
    }

    return (
      <div>
        <ul id="list-group">
          {todos}
        </ul>
      </div>
    )
  }
});

module.exports = TodoList;
