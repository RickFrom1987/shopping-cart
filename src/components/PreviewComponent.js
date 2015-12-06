'use strict';

import React from 'react';
import classNames from 'classnames';
import Subheader from './SubheaderComponent';

require('styles//Preview.styl');

class PreviewComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const imgUrl = this.props.data ? this.props.data.front.thumb_url : null;

    const loadingClass = classNames({
      'ui': true,
      'active': !imgUrl,
      'dimmer': true
    });

    return (
      <div className="preview-component">
        <div className="img-preview">
          <div className={loadingClass}>
            <div className="ui large text loader"></div>
          </div>
          <img className="ui fluid image" src={imgUrl}/>
        </div>
        <div className="ui secondary menu">
          <span className="left item">
            <div className="ui checkbox">
              <input type="checkbox" name="example"/>
              <label>option</label>
            </div>
          </span>
          <span className="right item"></span>
        </div>
      </div>
    );
  }
}

PreviewComponent.displayName = 'PreviewComponent';

// Uncomment properties you need
// PreviewComponent.propTypes = {};
// PreviewComponent.defaultProps = {};

export default PreviewComponent;
