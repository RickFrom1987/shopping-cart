'use strict';

import React from 'react';

require('styles//Subheader.styl');

class SubheaderComponent extends React.Component {
  render() {
    return (
      <div className="subheader-component">
        <div className="ui borderless menu">
          <div className="horizontally fitted item">
            <h5>{this.props.text}</h5>
          </div>
          <div className="right menu">
            <div className="item">
              <span>{this.props.action}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SubheaderComponent.displayName = 'SubheaderComponent';

// Uncomment properties you need
// SubheaderComponent.propTypes = {};
// SubheaderComponent.defaultProps = {};

export default SubheaderComponent;
