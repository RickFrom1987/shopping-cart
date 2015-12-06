'use strict';
import ProductActions from '../actions/ProductActions';

//Dummy Data
const products = [{
  id: 'Demo Product',
  settings: {
    options: [{
      label: 'Demo Option',
      value: 14
    }],
    config: [{
      header:'Demo Size',
      description: '4 x 4'
    }],
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis tempor porttitor. Nulla scelerisque dictum eros volutpat ullamcorper. Sed semper nibh non finibus luctus. Curabitur maximus fringilla velit malesuada auctor.'
  },
  preview:{
    front: {
      thumb_url:'/images/business_card.jpg',
      url: '/images/business_card.jpg'
    },
    back: {
      thumb_url:'/images/business_card.jpg',
      url: '/images/business_card.jpg'
    }
  }
}];

module.exports = {
  getAllProducts() {
    // simulate retrieving data from a database
    setTimeout(() => {
      ProductActions.receiveAll(products);
    }, 4000);
    // simulate success callback
  }
};