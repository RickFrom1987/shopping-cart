'use strict';
import '../../semantic/dist/semantic.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './Main';
import Upload from './pages/UploadComponent';
import Product from './pages/ProductComponent';
import Cart from './pages/CartComponent';

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Upload}/>
      <Route path="upload" component={Upload}/>
      <Route path="product" component={Product}/>
      <Route path="cart" component={Cart}/>
    </Route>
  </Router>
), document.getElementById('app'));
