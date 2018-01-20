import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './redux/reducers';


import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Modal from './components/Modal/Modal';

import './App.css';

class App extends Component {

  render() {

    return (
      <Provider store={ createStore(reducers) }>
        <Router>
          <div className="App">
            <Header />
            <Content />
            <Modal />
          </div>
        </Router>
      </Provider>
    );

  }

}

export default App;
