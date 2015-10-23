var React = require('react');
var Store = require('../stores/store.js');
var Actions = require('../actions/actions.js');
var TodoList = require('./todoList.js');
var ReactPropTypes = React.PropTypes;

var TodoItem = React.createClass({
  //this requires todo to be an object
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render: function() {
    var todo = this.props.todo;

    return (
      <li>{placeholder of todotext}</li>
    )
  }
});

module.exports = TodoItem;
