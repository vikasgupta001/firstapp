import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts'
import ContactHeader from './components/Header'
import {Provider} from './context';
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <ContactHeader name="Contact Manager"/>
            <div className="container">
          <Contacts />
         </div>
       </div>
      </Provider>
    );
  }
}

export default App;
