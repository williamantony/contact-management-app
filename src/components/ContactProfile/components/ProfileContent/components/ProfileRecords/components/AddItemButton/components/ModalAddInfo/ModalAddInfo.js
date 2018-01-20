import React, { Component } from 'react';

import './ModalAddInfo.css';

class ModalAddInfo extends Component {

  render() {

    return (
      <div className="ModalAddInfo ModalContent">

        <div className="ModalAddInfo__label">
          <label>Label</label>
          <input type="text" placeholder="Custom Name" />
        </div>
        <div className="ModalAddInfo__value">
          <label>Value</label>
          <textarea placeholder="Enter the information here" />
        </div>

      </div>
    );

  }

}

export default ModalAddInfo;