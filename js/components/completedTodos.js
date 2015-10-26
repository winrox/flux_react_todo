var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');
var CompletedTodoItem = require('./completedTodoItem.js');

var CompletedTodos = React.createClass({
  getInitialState: function() {
    return {
      allTodos: Store.getAllTodos()
    }
  },

  componentDidMount: function() {
    Store.addChangeListener(this.onChange);
  },

  onChange: function() {
    this.setState({
      allTodos: Store.getAllTodos()
    });
    this.render();
  },

  render: function() {
    var allTodos = this.state.allTodos;
    var todos = [];

    if(this.state.allTodos.length < 1) {
      return null;
    }

    for (var key in allTodos) {
      if(allTodos[key].completeTask == true){
        todos.push(<CompletedTodoItem key={key} todo={allTodos[key]} />);
      }
    }

    return (
      <div>
        <p>Completed Todos:</p>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
});

module.exports = CompletedTodos;
