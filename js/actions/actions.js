var Dispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/constants.js');

var Actions = {
  addItem: function(item) {
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_ITEM,
      item: item
    })
  },

  removeItem: function(item) {
    Dispatcher.handleViewAction({
      actionType: Constants.REMOVE_ITEM,
      item: item
    })
  }
}


module.exports = Actions
