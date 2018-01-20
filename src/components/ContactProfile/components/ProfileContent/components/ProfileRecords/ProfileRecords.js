import React, { Component } from 'react';

import RecordOptions from './components/RecordOptions/RecordOptions';
import ItemOptions from './components/ItemOptions/ItemOptions';
import AddItemButton from './components/AddItemButton/AddItemButton';


import './ProfileRecords.css';

class ProfileRecords extends Component {

  render() {

    return (
      <div className="ProfileRecords">

        <div className="Record">
          <div className="Record__head">
            <div className="Record__title">BIO</div>
            <RecordOptions />
          </div>
          <div className="RecordData">

            <div className="RecordData__item">
              <div className="RecordData__item__content">
                <div className="RecordData__item__name">Full Name</div>
                <div className="RecordData__item__value">William Antony</div>
              </div>
              <ItemOptions />
            </div>

            <div className="RecordData__item">
              <div className="RecordData__item__content">
                <div className="RecordData__item__name">Home Address</div>
                <div className="RecordData__item__value">4828 N Avers Ave. #3E <br/>Chicago IL 60625</div>
              </div>
              <ItemOptions />
            </div>

          </div>
          <AddItemButton />
        </div>

        <div className="Record">
          <div className="Record__head">
            <div className="Record__title">CONTACT</div>
            <RecordOptions />
          </div>
          <div className="RecordData">

            <div className="RecordData__item">
              <div className="RecordData__item__content">
                <div className="RecordData__item__name">Phone</div>
                <div className="RecordData__item__value">847 770 8426</div>
              </div>
              <ItemOptions />
            </div>

            <div className="RecordData__item">
              <div className="RecordData__item__content">
                <div className="RecordData__item__name">Email</div>
                <div className="RecordData__item__value">william@pathadan.com</div>
              </div>
              <ItemOptions />
            </div>

          </div>
          <AddItemButton />
        </div>

      </div>
    );

  }

}

export default ProfileRecords;