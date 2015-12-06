'use strict';

import React from 'react';
import ClassNames from 'classnames';

require('styles//Alert.styl');

let _alertTimeout = null;

function getState() {
  return {
    alertClass: null,
    message: null,
    visible: null
  }
}

function scrollToTop(scrollDuration) {
  const scrollStep = -window.scrollY / (scrollDuration / 15), scrollInterval = setInterval(() => {
  if (window.scrollY !== 0) {
    window.scrollBy(0, scrollStep);
  } else
    clearInterval(scrollInterval);
  }, 15);
}

class AlertComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = getState();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.message) {
      clearTimeout(_alertTimeout);
      this.setState({
        alertClass: nextProps.alertClass,
        message: nextProps.message,
        visible: true
      });
      scrollToTop(500);
      _alertTimeout = window.setTimeout(() => {
        this.setState(getState());
      }, 3000);
    }
  }

  componentWillUnmount() {
    clearTimeout(_alertTimeout);
  }

  render() {
    const alertClass = this.state.alertClass;
    const message = this.state.message;
    
    const visibleClass = ClassNames({
      'message': true,
      'alert-message': true,
      'visible': this.state.visible
    });

    return (
      <div className="alert-component">
        <div className={visibleClass}>
          <h5 className="ui header"><i className={alertClass} />{message}</h5>
        </div>
      </div>
    );
  }
}

AlertComponent.displayName = 'AlertComponent';

// Uncomment properties you need
// AlertComponent.propTypes = {};
// AlertComponent.defaultProps = {};

export default AlertComponent;
