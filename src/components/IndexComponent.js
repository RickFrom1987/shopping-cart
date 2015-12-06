'use strict';

import React from 'react';

require('styles//Index.styl');

class IndexComponent extends React.Component {
  render() {
    return (
      <div className="index-component">
        indextets
      </div>
    );
  }
}

IndexComponent.displayName = 'IndexComponent';

// Uncomment properties you need
// IndexComponent.propTypes = {};
// IndexComponent.defaultProps = {};

export default IndexComponent;
