'use strict';

import React from 'react';

require('styles//Footer.styl');

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer-component">
        <div className="ui vertical footer segment">
          <div className="ui center aligned container">
            <div className="ui horizontal small divided link list">
              <a className="item" href="#">&copy; RickFrom1987 LLC</a>
              <a className="item" href="#">Terms and Conditions</a>
              <a className="item" href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
