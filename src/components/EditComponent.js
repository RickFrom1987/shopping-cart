'use strict';

import React from 'react';
import Form from './FormComponent';

require('styles//Edit.styl');

class EditComponent extends React.Component {
  render() {
    return (
      <div className="edit-component">
        <Form/>
      </div>
    );
  }
}

EditComponent.displayName = 'EditComponent';

// Uncomment properties you need
// EditComponent.propTypes = {};
// EditComponent.defaultProps = {};

export default EditComponent;
