'use strict';

import React from 'react';
import Tabs from 'react-simpletabs';
import Stacked from './StackedComponent';

require('styles//Tab.styl');

class TabComponent extends React.Component {
  render() {
    return (
      <div className="tab-component">
        <Tabs tabActive={2}>
          <Tabs.Panel title='Support'>
            <Stacked/>
          </Tabs.Panel>
          <Tabs.Panel title='Live Chat'>
            <Stacked/>
          </Tabs.Panel>
        </Tabs>
      </div>
    );
  }
}

TabComponent.displayName = 'TabComponent';

// Uncomment properties you need
// TabComponent.propTypes = {};
// TabComponent.defaultProps = {};

export default TabComponent;
