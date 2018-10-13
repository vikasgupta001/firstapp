import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts'
import ContactHeader from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <ContactHeader name="Contact Manager"/>
         <div className="container">
          <Contacts />
         </div>
       </div>
    );
  }
}

export default App;
