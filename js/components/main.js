var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');

var MainApp = React.createClass({
  handleClick: function() {
    Actions.addItem('something');
  },

  render: function() {
    return (
      <div>
      TESTING THIS
      </div>
    )
  }
});

module.exports = MainApp;
