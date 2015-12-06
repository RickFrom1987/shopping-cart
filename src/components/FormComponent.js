'use strict';

import React from 'react';
import Serialize from 'form-serialize';

require('styles//Form.styl');

class FormComponent extends React.Component {
  
  constructor(props) {
    super(props)
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(e) {
    e.preventDefault();
    const theform = this.refs.form;
    const obj = Serialize(theform, {
      hash: true,
      empty: true
    });
    this.props.action(obj);
  }

  render() {
    const fields = this.props.fields ? this.props.fields : null;
    const id = fields ? fields.id : null;
    const thumb_url = fields && fields.preview ? fields.preview.front.thumb_url : null;
    const details = fields && fields.settings ? fields.settings.details : null;

    return (
      <div className="form-component">
        <form className="ui form" ref="form" onSubmit={this._onSubmit}>
          <input type="hidden" name="id" placeholder="id" value={id}/>
          <input type="hidden" name="thumb_url" placeholder="thumb_url" value={thumb_url}/>
          <input type="hidden" name="details" placeholder="details" value={details}/>
          <div className="field">
            <label>Full Name</label>
            <input type="text" name="full_name" placeholder="full name" />
          </div>
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" placeholder="title" />
          </div>
          <div className="field">
            <label>Phone Number 1</label>
            <div className="fields">
              <div className="six wide field">
                <input type="text" name="phone[type]" placeholder="Street Address" />
                </div>
                <div className="ten wide field">
                <input type="text" name="phone[number]" placeholder="Apt #" />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="email" />
          </div>
          <div className="field">
            <label>Address</label>
            <input type="text" name="address" placeholder="address" />
          </div>
          <div className="field">
            <label>City</label>
            <input type="text" name="city" placeholder="city" />
          </div>
          <div className="fields">
            <div className="eight wide field">
              <label>State</label>
              <select className="ui fluid dropdown" name="state" id="state">
                <option value="WA">Washington</option>
                <option value="AL">Alabama</option>
              </select>
            </div>
            <div className="eight wide field">
              <label>Zip</label>
              <input type="text" name="zip" placeholder="zip"/>
            </div>
          </div>
          <div className="field">
            <label>Url</label>
            <input type="text" name="url" placeholder="url" />
          </div>
          <button className="ui button" type="submit">Add To Cart</button>
        </form>
      </div>
    )
  }
}

FormComponent.displayName = 'FormComponent';

// Uncomment properties you need
// FormComponent.propTypes = {};
// FormComponent.defaultProps = {};

export default FormComponent;
