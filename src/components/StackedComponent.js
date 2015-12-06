'use strict';

import React from 'react';

require('styles//Stacked.styl');

class StackedComponent extends React.Component {
  render() {
    return (
      <div className="stacked-component">
        <div className="ui segment">
          <h4 className="ui header">Questions</h4>
          <p><strong>Q. Vim dolorum definiebas an. Mei ex natum rebum iisque.</strong></p>
          <p><strong>A.</strong>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
          <p><strong>Q. Vim dolorum definiebas an. Mei ex natum rebum iisque.</strong></p>
          <p><strong>A.</strong>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
        </div>
      </div>
    );
  }
}

StackedComponent.displayName = 'StackedComponent';

// Uncomment properties you need
// StackedComponent.propTypes = {};
// StackedComponent.defaultProps = {};

export default StackedComponent;
