import React, { Component } from 'react';

import ProfileActions from './components/ProfileActions/ProfileActions';
import ProfileRecords from './components/ProfileRecords/ProfileRecords';

class ProfileContent extends Component {

  render() {

    return (
      <div className="ProfileContent">
        <ProfileActions />
        <ProfileRecords />
      </div>
    );

  }

}

export default ProfileContent;