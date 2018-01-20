import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ContactsList from '../ContactsList/ContactsList';
import ContactProfile from '../ContactProfile/ContactProfile';

import './Content.css';

class Content extends Component {
  
  render() {

    return (
      <div className="Content">
        
        <Route exact path="/contacts" component={ ContactsList } />
        <Route exact path="/contacts/:id/(view|edit)" component={ ContactProfile } />

      </div>
    );

  }

}

export default Content;