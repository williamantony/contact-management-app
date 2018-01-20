import React, { Component } from 'react';

import './ContactItem.css';

class ContactItem extends Component {

  render() {

    return (
      <div className="ContactItem" onClick={ this.props.onClick }>
        <div className="ContactItem__head">
          <div className="ContactItem__thumb ContactItem__thumb--male"></div>
          <div className="ContactItem__headerText">
            <div className="ContactItem__displayName">{ this.props.contact.displayName }</div>
            <div className="ContactItem__secondLine">{ this.props.contact.secondLine }</div>
          </div>
        </div>
        <div className="ContactItem__body">
          Note that the development build is not optimized.
          To create a production build, use yarn build.
        </div>
        <div className="ContactItem__actions">
          {/* <div className="ContactItem__actionLink">Message</div> */}
          <div className="ContactItem__actionLink">View</div>
        </div>
      </div>
    );

  }

}

export default ContactItem;