'use strict';

import React from 'react';
import Subheader from './SubheaderComponent';
import Select from './SelectComponent';
import List from './ListComponent';

require('styles//Description.styl');

class DescriptionComponent extends React.Component {
  render() {
    const data = this.props.data ? this.props.data : {};
    return (
      <div className="description-component">
        <h5 className="ui header">Paper Stock</h5>
        <Select options={data.options}/>
        <h5 className="ui header">Product Configuration</h5>
        <List items={data.config}/>
        <h5 className="ui header">Details</h5>
        <p>
          {data.details}
        </p>
      </div>
    );
  }
}

DescriptionComponent.displayName = 'DescriptionComponent';

// Uncomment properties you need
// DescriptionComponent.propTypes = {};
// DescriptionComponent.defaultProps = {};

export default DescriptionComponent;
