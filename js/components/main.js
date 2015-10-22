var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');

var MainApp = React.createClass({

  handleClick: function() {
    Actions.addItem('something');
  },

  render: function() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <label for="newTodo">NEW TODO:</label>
            <input type="text" class="form-control" id="newTodo" placeholder="tell 'your mom' joke" />
          <div className="form-group">
            <button onClick={this.handleClick} className="submit" type="button">ADD</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = MainApp;
