var React = require('react');
var Actions = require('../actions/actions.js');
var Store = require('../stores/store.js');

var NewTodo = React.createClass({

  getInitialState: function() {
    return {
      // existing todos OR nothing
      value: this.props.value || ''
    };
  },

  render: function() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <label htmlFor="newTodo">NEW TODO:</label>
            <input onChange={this.onChange} value={this.state.value} type="text" className="form-control" id="newTodo" placeholder="tell 'your mom' joke" />
          <div className="form-group">
            <button onClick={this.handleClick} className="submit" type="button">ADD</button>
          </div>
        </div>
      </div>
    )
  },

  // handle text changes in the add todo input
  onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  // create an action based on the current state
  handleClick: function() {
    console.log(this.state.value);
    Actions.addItem(this.state.value);
  }
});

module.exports = NewTodo;
