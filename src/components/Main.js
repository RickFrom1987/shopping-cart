require('styles/App.styl');

import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default AppComponent;
