var Dispatcher = require('../dispatcher/dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var Assign = require('object-assign');

var CHANGE_EVENT = 'change';

var Store = Assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

Dispatcher.register(function(payload){
  console.log(payload);
  return true;
});

module.exports = Store;
