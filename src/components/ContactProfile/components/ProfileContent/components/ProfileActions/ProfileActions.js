import React, { Component } from 'react';
import { connect } from 'react-redux';
import {

} from '../../../../../../redux/actions';

import SearchInput from './components/SearchInput/SearchInput';
import ActionButtons from './components/ActionButtons/ActionButtons';

import './ProfileActions.css';

class ProfileActions extends Component {

  render() {

    return (
      <div className="ProfileActions">
        <SearchInput />
        <ActionButtons />
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileActions);