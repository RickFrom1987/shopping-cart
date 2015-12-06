'use strict';

import React from 'react';
import ClassNames from 'classnames';
import Alert from '../AlertComponent';
import Progress from '../ProgressComponent';
import DragDrop from '../DragDropComponent';

require('styles/pages/Upload.styl');

function getStateFromStore() {
  return {
    alertMessage: null
  };
}

class UploadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = getStateFromStore();
    this._onChange = this._onChange.bind(this);
    this._onUpload = this._onUpload.bind(this);
  }

  _onUpload(files) {
    if (files) {
      this.setState({
        alertMessage: 'File Uploaded!'
      });
    }
  }

  _onChange() {
    this.setState(getStateFromStore());
  }

  render() {
    
    const alertClass = ClassNames({
      'fa': true,
      'fa-check': true
    });

    return (
      <div className="upload-component">
        <Alert iconClass={alertClass} message={this.state.alertMessage}/>
        <div className=" ui main text container">
          <DragDrop onUpload={this._onUpload}/>
        </div>
      </div>
    );
  }
}

UploadComponent.displayName = 'PagesUploadComponent';

// Uncomment properties you need
// UploadComponent.propTypes = {};
// UploadComponent.defaultProps = {};

export default UploadComponent;
