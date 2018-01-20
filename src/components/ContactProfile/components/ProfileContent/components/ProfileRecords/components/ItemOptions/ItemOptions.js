import React, { Component } from 'react';
import { connect } from 'react-redux';
import {

} from '../../../../../../../../redux/actions';

import './ItemOptions.css';

class ItemOptions extends Component {

  render() {
  
    const isEditing = this.props.editing.isEditing;
    const dataIsEditing = isEditing ? 'true' : 'false';

    return (
      <div className="ItemOptions" data-isEditing={ dataIsEditing } >
        <div className="ItemOptions__option" data-type="delete"></div>
      </div>
    );
    
  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ItemOptions);