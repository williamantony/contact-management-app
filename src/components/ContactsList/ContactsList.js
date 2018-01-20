import React, { Component } from 'react';

import ContactItem from './components/ContactItem/ContactItem';

import './ContactsList.css';

class ContactsList extends Component {

  state = {
    contacts: [
      {
        displayName: "William Antony",
        secondLine: "Chicago, IL",
      },
      {
        displayName: "Renju Pathadan",
        secondLine: "Des Plaines, IL",
      },
      {
        displayName: "Smitha Jose",
        secondLine: "Tinley Park, IL",
      },
    ]
  }

  viewContact = () => {

    this.props.history.push('/contacts/000/view');

  }

  render() {

    return (
      <div className="ContactsList wrapper">      
        {
          this.state.contacts.map((contact, index) => (
            <ContactItem key={ index } contact={ contact } onClick={ this.viewContact } />
          ))
        }
      </div>
    );

  }

}

export default ContactsList;