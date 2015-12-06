'use strict';

import Dispatcher from '../dispatcher/dispatcher';
import AppConstants from '../constants/AppConstants';

module.exports = {

  receiveAll(products) {
    Dispatcher.dispatch({
      type: AppConstants.RECEIVE_PRODUCTS,
      products: products
    });
  }

};