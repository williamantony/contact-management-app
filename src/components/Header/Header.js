import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  
} from '../../redux/actions';

import HeaderSearch from './components/HeaderSearch/HeaderSearch';

import './Header.css';

class Header extends Component {

  showNavigation = () => {

    
    
  }

  render() {

    return (
      <div className="Header">
        <div className="Header__container">

          <div className="Header__logo-part">
            <div className="Header__menuIcon" onClick={ this.showNavigation } >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="Header__logo">
              <div className="text">Contacts</div>
            </div>
          </div>

          <HeaderSearch />
          
        </div>
        
      </div>
    );

  }

}


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);