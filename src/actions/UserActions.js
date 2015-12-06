'use strict';

import Dispatcher from '../dispatcher/dispatcher';
import AppConstants from '../constants/AppConstants';

const UserActions = {

  update() {
    Dispatcher.dispatch({
      type: AppConstants.UPDATE_USER_PROGRESS
    });
  }

};

export default UserActions;