'use strict';

import Dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';
import ProductStore from './ProductStore';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';

let _cart = {};

function update(id, updates) {
  _cart[id] = assign({}, _cart[id], updates);
}

function create(item) {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _cart[id] = {
    id: id,
    item: item
  };
}

function destroy(id) {
  delete _cart[id];
}

let CartStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCartSize() {
    return Object.keys(_cart).length;
  },

  getAll() {
    return _cart;
  }
});

CartStore.dispatchToken = Dispatcher.register(function(action) {
  Dispatcher.waitFor([
    ProductStore.dispatchToken
  ]);

  switch(action.type) {

    case AppConstants.CREATE_CART_ITEMS:
      create(action.item);
      CartStore.emitChange();
      break;
    
    case AppConstants.UPDATE_CART_ITEMS:
      CartStore.emitChange();
      break;
    
    case AppConstants.DESTROY_CART_ITEMS:
      destroy(action.item.id);
      CartStore.emitChange();
      break;

    case AppConstants.RECEIVE_CART_ITEMS:
      CartStore.emitChange();
      break;

    default:
      // do nothing
  }

});

export default CartStore;