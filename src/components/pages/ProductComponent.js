'use strict';

import React from 'react';
import ClassNames from 'classnames';
import Preview from '../PreviewComponent';
import Subheader from '../SubheaderComponent';
import Description from '../DescriptionComponent';
import Form from '../FormComponent';
import Tab from '../TabComponent';
import Alert from '../AlertComponent';
import Pageheader from '../PageheaderComponent';

import ProductStore from '../../stores/ProductStore';
import CartStore from '../../stores/CartStore';

import CartActions from '../../actions/CartActions';

import APIUtil from '../../util/APIUtil';

require('styles/pages/Product.styl');

function getStateFromStore() {
  return {
    alertMessage: null,
    products: ProductStore.getAll()
  };
}

class ProductComponent extends React.Component {
  
  constructor(props) {
    APIUtil.getAllProducts();
    super(props);
    this.state = getStateFromStore();
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }
  
  componentDidMount() {
    ProductStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange);
  }
  
  _onChange() {
    this.setState(getStateFromStore());
  }

  _onSubmit(item){
    CartActions.create(item);
    this.setState({
      alertMessage: 'Item added to cart!'
    })
  }

  render() {
    const product = this.state.products[0] ? this.state.products[0] : {};
    
    const headerAction = (
      <div>
        <a>Link</a>
      </div>
    );

    const editAction = null;

    const previewAction = null;

    const alertClass = ClassNames({
      'fa': true,
      'fa-shopping-cart': true
    });

    return (
      <div className="product-component">
        <Alert alertClass={alertClass} message={this.state.alertMessage}/>
        <div className="ui container">
          <Pageheader header="Personalize your content" action={headerAction}/>
        </div>
        <div className="ui two column stackable grid container">
          <div className="column">
            <div className="ui top attached segment">
              <Subheader text="Card Preview" action={previewAction}/>
            </div>
            <div className="ui attached segment">
              <Preview data={product.preview}/>
            </div>
            <div className="ui attached segment">
              <Subheader text="Product Settings"/>
            </div>
            <div className="ui attached segment">
              <Description data={product.settings}/>
            </div>
          </div>
          <div className="column">
            <div className="ui top attached segment">
              <Subheader
                text="Edit Text"
                action={editAction}/>
            </div>
            <div className="ui attached bottom segment">
              <Form fields={product} action={this._onSubmit}/>
            </div>
          </div>
        </div>
        <div className="ui container">
          <Tab/>
        </div>
      </div>
    );
  }
}

ProductComponent.displayName = 'ProductComponent';

// Uncomment properties you need
// ProductComponent.propTypes = {};
// ProductComponent.defaultProps = {};

export default ProductComponent;
