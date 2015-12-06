'use strict';

import React from 'react';

require('styles//Checkout.styl');

class CheckoutComponent extends React.Component {
  render() {
    return (
      <div className="checkout-component">
        <table className="ui striped table">
          <tbody>
            <tr>
              <td className="collapsing">
                <h5 className="ui sub header">Subtotal</h5>
              </td>
              <td className="right aligned collapsing">$xxx</td>
            </tr>
            <tr>
              <td className="collapsing">
                <h5 className="ui header">Shipping & Handling
                </h5>
              </td>
              <td className="right aligned collapsing">$xxx</td>
            </tr>
            <tr>
              <td className="collapsing">
                <h5 className="ui header">Sales Tax</h5>
              </td>
              <td className="right aligned collapsing">
                <select className="ui fluid dropdown" name="state" id="state">
                  <option value="WA">WA</option>
                  <option value="CA">CA</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="collapsing">
                <h5 className="ui sub header">Your Total</h5>
              </td>
              <td className="right aligned collapsing">
                $xxx
              </td>
            </tr>
          </tbody>
        </table>
        <button className="ui button" type="submit">Continue to Checkout</button>
      </div>
    );
  }
}

CheckoutComponent.displayName = 'CheckoutComponent';

// Uncomment properties you need
// CheckoutComponent.propTypes = {};
// CheckoutComponent.defaultProps = {};

export default CheckoutComponent;
