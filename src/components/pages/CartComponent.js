'use strict';

import React from 'react';
import ClassNames from 'classnames';
import Pageheader from '../PageheaderComponent';
import Subheader from '../SubheaderComponent';
import ItemList from '../ItemlistComponent';
import Table from '../TableComponent';
import CartStore from '../../stores/CartStore';
import Checkout from '../CheckoutComponent';
import Alert from '../AlertComponent';
import CartActions from '../../actions/CartActions.js';

require('styles/pages/Cart.styl');

function getStateFromStore() {
  return {
    alertMessage: null,
    cartItems: CartStore.getAll()
  };
}

class CartComponent extends React.Component {

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

  _onChange(){
    this.setState(getStateFromStore());
  }

  render() {
    const alertClass = ClassNames({
      'fa': true,
      'fa-check': true
    });

    const headerAction = (
      <div>
        <a>&larr; Back</a>
      </div>
    );

    const rows = Object.keys(this.state.cartItems).length > 0 ? this.state.cartItems: null;

    return (
      <div className="cart-component">
        <Alert alertClass={alertClass} message={this.state.alertMessage}/>
        <div className="ui container">
          <Pageheader header="Your Cart" action={headerAction}/>
        </div>
        <div className="ui two column stackable grid container">
          <div className="column">
            <ItemList items={this.state.cartItems} onDestroy={CartActions.destroy}/>
          </div>
          <div className="column">
            <div className="ui top attached segment">
              <Subheader text="Your Order"/>
            </div>
            <div className="ui attached segment">
              <Table header={false} rows={ rows }/>
            </div>
            <div className="ui bottom attached segment">
              <Checkout/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CartComponent.displayName = 'CartComponent';

// Uncomment properties you need
// CartComponent.propTypes = {};
// CartComponent.defaultProps = {};

export default CartComponent;
