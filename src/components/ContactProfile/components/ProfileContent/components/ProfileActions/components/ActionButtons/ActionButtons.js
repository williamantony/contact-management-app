import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  beginEditing,
  doneEditing,
} from '../../../../../../../../redux/actions';

import './ActionButtons.css';

class ActionButtons extends Component {

  onEdit = (event) => {

    this.props.beginEditing();

  }

  onSave = (event) => {

    this.props.doneEditing();

  }

  render() {

    console.log(this.props);

    const isEditing = this.props.editing.isEditing;
    const dataIsEditing = isEditing ? 'true' : 'false';

    return (
      <div className="ActionButtons" data-isEditing={ dataIsEditing } >

        <div className="Button" data-type="edit" onClick={ this.onEdit } >      
          <div className="Button__icon" data-type="edit" />
          <div className="Button__text">Edit</div>
        </div>

        <div className="Button" data-type="done" onClick={ this.onSave } >      
          <div className="Button__icon" data-type="done" />
          <div className="Button__text">Done</div>
        </div>

      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  beginEditing,
  doneEditing,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);