import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateFilterInput
} from '../../../../../../../../redux/actions';


import './SearchInput.css';

class ProfileSearch extends Component {

  focusInput = (event) => {

    document.getElementById('ProfileSearch__input').focus();

  }

  handleInput = (event) => {

    const input = event.target.value;
    this.props.updateFilterInput(input);

  }

  render() {

    const input = this.props.filter.input;

    return (
      <div className="ProfileSearch" onClick={ this.focusInput } >
      
        <input type="text"
                id="ProfileSearch__input"
                className="ProfileSearch__input"
                placeholder="Filter Information" 
                value={ input }
                onChange={ this.handleInput }
                />
        
        <div className="ProfileSearch__icon" />

      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  updateFilterInput
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSearch);