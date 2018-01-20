import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  showModal
} from '../../../../../../../../redux/actions';

import './RecordOptions.css';

class RecordOptions extends Component {

  createField = () => {

    this.props.showModal({
      headless: true,
      // preventDefault: true,
    });

  }

  handleDelete = () => {

    this.props.showModal({
      headless: true,
      // preventDefault: true,
    });

  }

  render() {

    const isEditing = this.props.editing.isEditing;
    const dataIsEditing = isEditing ? 'true' : 'false';

    return (
      <div className="RecordOptions" data-isEditing={ dataIsEditing } >

        <div className="RecordOptions__item" data-type="options" onClick={ this.createField } >
          <div className="img" />
        </div>

      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordOptions);