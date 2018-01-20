import React, { Component } from 'react';

import './HeaderSearch.css';

class HeaderSearch extends Component {

  render() {

    return (
      <div className="HeaderSearch">
        <div className="HeaderSearch__inputarea">
          <input type="text" placeholder="Search your contacts" />
        </div>
      </div>
    );

  }

}

export default HeaderSearch;