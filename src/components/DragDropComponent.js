'use strict';

import React from 'react';
import Dropzone from 'react-dropzone';

require('styles//DragDrop.styl');

class DragDropComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this._onDrop = this._onDrop.bind(this);
  }

  _onDrop(files) {
    this.setState({
      files: files
    });
    this.props.onUpload(files);
  }

  render() {
    return (
      <div className="dragdrop-component">
        <div className="dragdrop-area">
          <Dropzone activeClassName="dragdrop-zone-active" className="dragdrop-zone" onDrop={this._onDrop}>
            <i className="fa fa-cloud-upload fa-4x"></i>
            <h2>Drag & drop</h2>
          </Dropzone>
        </div>
      </div>
    );
  }
}

DragDropComponent.displayName = 'DragDropComponent';

// Uncomment properties you need
// UploaderComponent.propTypes = {};
// UploaderComponent.defaultProps = {};

export default DragDropComponent;
