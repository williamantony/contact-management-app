import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  showModal
} from '../../../../../../../../redux/actions';

import ModalAddInfo from './components/ModalAddInfo/ModalAddInfo';

import './AddItemButton.css';

class AddItemButton extends Component {

  addNewField = () => {

    this.props.showModal({
      title: 'New Information',
      body: <ModalAddInfo />
    });

  }

  render() {

    const isEditing = this.props.editing.isEditing;
    const dataIsEditing = isEditing ? 'true' : 'false';

    return (
      <div className="AddItemButton" data-isEditing={ dataIsEditing } onClick={ this.addNewField } >
        <div className="AddItemButton__icon" />
        <div className="AddItemButton__text">Add Information</div>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemButton);