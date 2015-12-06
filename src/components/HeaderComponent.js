'use strict';

import React from 'react';
import { Link } from 'react-router';
import ClassNames from 'classnames';
import CartStore from '../stores/CartStore';

require('styles/Header.styl');

function getStateFromStore() {
  return {
    cartSize: CartStore.getCartSize()
  };
}

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = getStateFromStore();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CartStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CartStore.removeChangeListener(this._onChange);
  }

  _onClick(e){
    return e;
  }
  
  _onChange(){
    this.setState(getStateFromStore());
  }

  render() {

    const circleClass = ClassNames({
      'fa': true,
      'fa-circle': true,
      'fa-stack-2x': true
    });

    const textClass = ClassNames({
      'fa-stack-1x': true,
      'calendar-text': true,
      'cart-size-num': true
    });

    return (
      <div className="header-component">
        <div className="ui borderless stackable menu">
          <div className="item">
            <a href="/">Your Logo</a>
          </div>
          <div className="item right">
            <Link className="item" to='upload' onClick={this._onClick}>Upload</Link>
          </div>
          <div className="item">
            <Link className="item" to='product'>Product</Link>
          </div>
          <div className="item">
            <Link className="item" to='cart'>
              <i className="fa fa-shopping"/>
              Cart
              <span className="cart-size fa-stack">
              <i className={circleClass}/>
              <strong className={textClass}>{this.state.cartSize}</strong>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
