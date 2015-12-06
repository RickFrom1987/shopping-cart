'use strict';

import React from 'react';
import Select from './SelectComponent.js';
import Card from './CardComponent';
import ClassNames from 'classnames';

require('styles//Itemlist.styl');

class ItemlistComponent extends React.Component {
  render() {
    let listContent;
    const itemsProp = this.props.items ? this.props.items : null;
    const items = itemsProp ? Object.keys(itemsProp).map(function(k) { return itemsProp[k] }) : null;

    const emptyClass = ClassNames({
      'fa': true,
      'fa-frown-o': true,
      'fa-5x': true
    });

    if (!items) {
      listContent = <div></div>;
    } else if (items.length === 0) {
      listContent = (
        <Card
          header={false}
          img={"https://whydyoueatthat.files.wordpress.com/2012/12/6eaf54f1-ab70-408a-a14a-a85ddbe76bcd.jpg"}
          title={"Your cart is empty."}
          description={"Add some products to make your cart happy!"}
          onClick={false}/>
      );
    } else {
      listContent = items.map((item, i) => {
        const callback = this.props.onDestroy.bind(this , item);
        return (
          <div key={item.id} className="item">
            <Card
              header={item.item.id}
              img={item.item.thumb_url}
              title={item.item.full_name}
              description={item.item.details}
              onClick={callback}
            />
          </div>
        )
      });
    }
    
    return (
      <div className="itemlist-component">
        <div className="ui segment">
        {listContent}
        </div>
      </div>
    );
  }
}

ItemlistComponent.displayName = 'ItemlistComponent';

// Uncomment properties you need
// ItemlistComponent.propTypes = {};
// ItemlistComponent.defaultProps = {};

export default ItemlistComponent;
