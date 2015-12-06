'use strict';

import Dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let _products = {};

let _selected = null;

function init(obj) {
  _products = obj;
}

let ProductStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getSelected(){
    return _selected;
  },

  get(id) {
    return _products[id];
  },

  getAll() {
    return _products;
  }

});

ProductStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.type) {

    case AppConstants.RECEIVE_PRODUCTS:
      const products = action.products;
      init(products);
      ProductStore.emitChange();
      break;

    default:
      // do nothing
  }

});

export default ProductStore;