import React, { Component } from 'react';

import ProfileSummary from './components/ProfileSummary/ProfileSummary';
import ProfileContent from './components/ProfileContent/ProfileContent';

import './ContactProfile.css';

class ContactProfile extends Component {

  render() {

    return (
      <div className="ContactProfile">
        <ProfileSummary />
        <ProfileContent />
      </div>
    );

  }

}

export default ContactProfile;