'use strict';

import React from 'react';
import UserStore from '../stores/UserStore';
import classNames from 'classnames';

require('styles//Progress.styl');

function getStateFromStore() {
  return {
    progress: UserStore.getProgress(),
    current: UserStore.getCurrentProgress()
  };
}

class ProgressComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = getStateFromStore();
  }

  _onChange () {
    this.setState(getStateFromStore());
  }

  render() {
    const progress = this.state.progress;
    const steps = Object.keys(progress).map(function (key) {return progress[key]});

    return (
      <div className="progress-component">
        <h1>{ `Step ${this.state.current.index} of ${steps.length}: ${this.state.current.header}` } </h1>
        <div className="progress-steps">
          <div className="progress-bar"></div>
          { steps.map((obj,i) => {
            const active = this.state.current.index === obj.index;

            const circleClass = classNames({
              'fa': true,
              'fa-circle': active,
              'fa-circle-thin': !active,
              'fa-stack-2x': true
            });

            const textClass = classNames({
              'fa-stack-1x': true,
              'calendar-text': true,
              'active': active
            });

            return (
              <div key={i} className="progress-step">
                <span className="progress-step fa-stack">
                  <i className={circleClass}/>
                  <strong className={textClass}>{obj.index}</strong>
                </span>
                <p className="progress-title">{obj.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

ProgressComponent.displayName = 'ProgressComponent';

// Uncomment properties you need
// ProgressComponent.propTypes = {};
// ProgressComponent.defaultProps = {};

export default ProgressComponent;
