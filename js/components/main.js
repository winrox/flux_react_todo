var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');
var NewTodo = require('./newTodo.js');

var MainApp = React.createClass({

  render: function() {
    return (
      <NewTodo />
    )
  }

});

module.exports = MainApp;
