var React = require('react');
var Store = require('../stores/store.js');
var Actions = require('../actions/actions.js');
var TodoList = require('./todoList.js');

var TodoItem = React.createClass({
  render: function() {
    var cssClass = "list-group-item";
    var checkboxText = "Complete"

    if(this.props.todo.completeTask){
      cssClass+= " disabled";
      checkboxText = "Not Completed";
    }

    return (
      <li className={cssClass}>
        <strong>{this.props.todo.todoText}</strong>
        <button type="button" className="destroy btn btn-default btn-xs" onClick={this.handleDelBtnClick}>
          Delete
        </button>
        <input type="checkbox" className="" onChange={this.handleToggleComplete}>
          {checkboxText}
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
