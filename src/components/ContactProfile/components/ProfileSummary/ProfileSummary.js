import React, { Component } from 'react';

import ProfileThumb from './components/ProfileThumb/ProfileThumb';

class ProfileSummary extends Component {

  render() {

    return (
      <div className="ProfileSummary">
        <ProfileThumb />
      </div>
    );

  }

}

export default ProfileSummary;