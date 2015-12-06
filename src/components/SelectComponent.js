'use strict';

import React from 'react';
import Select from 'react-select';

require('styles//Select.styl');

class SelectComponent extends React.Component {

  render() {
    const options = this.props.options;
    const value = this.props.options ? this.props.options[0].value : '';
    return (
      <div className="select-component">
        <Select
          name="form-field-name"
          value={value}
          options={options}
        />
      </div>
    );
  }
}

SelectComponent.displayName = 'SelectComponent';

// Uncomment properties you need
// SelectComponent.propTypes = {};
// SelectComponent.defaultProps = {};

export default SelectComponent;
