'use strict';

import React from 'react';

require('styles//List.styl');

class ListComponent extends React.Component {
  render() {
    const items = this.props.items ? this.props.items : [];

    return (
      <div className="list-component">
        <div className="ui list">
        {
          items.map((item, i) => {
            return <div key={i} className="item">
              <i className="icon square" />
              <div className="content">
                <div className="header">{item.header}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          })
        }
        </div>
      </div>
    );
  }
}

ListComponent.displayName = 'ListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
