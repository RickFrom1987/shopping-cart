'use strict';

import React from 'react';

require('styles//Pageheader.styl');

class PageheaderComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const header = this.props.header ? this.props.header : null;
    const action = this.props.action ? this.props.action : null;

    return (
      <div className="pageheader-component">
        <div className="ui borderless menu">
          <div className="horizontally fitted item">
            <h3 className="ui header">{ header }</h3>
          </div>
          <div className="right menu">
            <div className="item">
              { action }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageheaderComponent.displayName = 'PageheaderComponent';

// Uncomment properties you need
// PageheaderComponent.propTypes = {};
// PageheaderComponent.defaultProps = {};

export default PageheaderComponent;
