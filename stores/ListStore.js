var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],
  add:true,
  maxItemLength:10,

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {

    if (this.add) {
      text = this.items.length%2 == 0 ? 'karsawu' : 'new-item';
      this.items.push(text);
      this.add = this.items.length < this.maxItemLength;

    } else {

      this.add = this.items.length > 0;
      this.items.pop();
      this.add = this.items.length == 0;
    }
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = ListStore;
