'use strict';

import Dispatcher from '../dispatcher/dispatcher';
import AppConstants from '../constants/AppConstants';

module.exports = {
  
  create(item) {
    Dispatcher.dispatch({
      type: AppConstants.CREATE_CART_ITEMS,
      item: item
    });
  },

  update() {
    Dispatcher.dispatch({
      type: AppConstants.UPDATE_CART_ITEMS
    });
  },

  destroy(item) {
    Dispatcher.dispatch({
      type: AppConstants.DESTROY_CART_ITEMS,
      item: item
    });
  },

  receiveAll() {
    Dispatcher.dispatch({
      type: AppConstants.RECEIVE_CART_ITEMS
    });
  }

};