'use strict';

import React from 'react';

require('styles//Card.styl');

class CardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const header = this.props.header ? this.props.header : null;
    const image = this.props.img ? this.props.img : null;
    const title = this.props.title ? this.props.title : null;
    const description = this.props.description ? this.props.description : null;
    const callback = this.props.callback ? this.props.callback : null;

    let headerView = null;
    if (header) {
      headerView =
        <div className="content">
          <div className="right floated meta">
            <span className="right floated">
              <i className="fa fa-plus-circle"/>
              <i className="fa fa-pencil"/>
              <a onClick={this.props.onClick}><i className="fa fa-trash" /></a>
            </span>
          </div>
          { header }
        </div>
    }

    let extraView = null;
    if (header) {
      extraView =
        <div className="extra content">
          <select className="ui fluid dropdown" name="quantity" id="quantity">
            <option value="100">50 Cards ($100)</option>
          </select>
        </div>
    }

    return (
      <div className="card-component">
        <div className="ui card">
          { headerView }
          <div className="image">
            <img src={image}/>
          </div>
          <div className="content">
            <a className="header">{title}</a>
            <div className="meta">
              {description}
            </div>
            <div className="description"></div>
          </div>
          {extraView}
        </div>
      </div>
    );
  }
}

CardComponent.displayName = 'CardComponent';

// Uncomment properties you need
// CardComponent.propTypes = {};
// CardComponent.defaultProps = {};

export default CardComponent;
