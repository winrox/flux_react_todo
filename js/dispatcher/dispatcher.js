var Dispatcher = require('flux').Dispatcher;
var Assign = require('object-assign');

var AppDispatcher = Assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
