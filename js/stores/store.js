var Dispatcher = require('../dispatcher/dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var Assign = require('object-assign');
var Constants = require('../constants/constants.js');

var CHANGE_EVENT = 'change';

// collection of todo items
var todos = [
  {completeTask: false, id:1445612179181, todoText: "gdfgdfgdf"},
 {completeTask: false, id: 1445616900060, todoText: "dfgfdgfg"}
];

// add todo item to todo collection
function add(todoText) {
  var id = Date.now(); // use timestamp to create unique id for each newly added todo item
  todos[id] = {
    id: id,
    completeTask: false,
    todoText: todoText
  };
}

var Store = Assign({}, EventEmitter.prototype, {
  getAllTodos: function() {
    return todos;
  },

  // emit change event to any view listening
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // allows views to register their callback function with the store
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  // registers this function with the dispatcher to be called whenever the dispatcher emits an action
  dispatcherIndex: Dispatcher.register(function(payload) {
    console.log(payload);
    var action = payload.action;
    var todoText;

    // switch statement looks for a matching action case
    switch(action.actionType) {
      case Constants.ADD_ITEM:
      todoText = action.item.trim(); //removes white space from beginning and end of todoText
      if(todoText !== '') {
        add(todoText); // puts the todo item into the store
        console.log(todos);
        Store.emitChange(); // tell the view the store has changed
        break;

        // add more cases for other action types
      }
      return true; //No errors. Needed by promise in dispatcher.
    }
  })

});

module.exports = Store;
