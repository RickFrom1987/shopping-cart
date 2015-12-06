'use strict';

import React from 'react';

require('styles//Table.styl');

class TableComponent extends React.Component {
  render() {
    const colSpan = this.props.colSpan ? this.props.colSpan : 2;
    const rowProps =  this.props.rows ? this.props.rows : null;
    const rows = rowProps ? Object.keys(rowProps).map(function(k) { return rowProps[k] }) : null;

    let rowView = null;

    if(rowProps && rows.length) {
      rowView = rows.map((row, i) => {
        return (
          <tr key={i}>
            <td className="collapsing">{row.item.id} - {row.item.full_name} ({row.item.quantity})
            </td>
            <td className="right aligned collapsing">$100</td>
          </tr>
        )
      })
    }
    return (
      <div className="table-component">
        <table className="ui striped table">
          <thead>
          </thead>
          <tbody>
            {rowView}
          </tbody>
        </table>
      </div>
    );
  }
}

TableComponent.displayName = 'TableComponent';

// Uncomment properties you need
// TableComponent.propTypes = {};
// TableComponent.defaultProps = {};

export default TableComponent;
