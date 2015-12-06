'use strict';

import Dispatcher from '../dispatcher/dispatcher';
import Events from 'events';
import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';

const CHANGE_EVENT = 'change';
const EventEmitter = new Events.EventEmitter();

const _progress = {
  step_1: {
    index: 1,
    title: 'Upload',
    header: 'Upload your PDF to start'
  },
  step_2: {
    index: 2,
    title: 'Personalize',
    header: 'Personalize'
  },
  step_3: {
    index: 3,
    title: 'Place Order',
    header: 'Place Order'
  }
};

let UserStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    return CHANGE_EVENT;
  },
  getCurrentProgress() {
    return _progress['step_1'];
  },
  getProgress() {
    return _progress;
  }
});

UserStore.dispatchToken = Dispatcher.register(function(action) {

  switch(action.type) {

    case AppConstants.UPDATE_USER_PROGRESS:
      UserStore.emitChange();
      break;

    default:
      // do nothing
  }

});

export default UserStore;