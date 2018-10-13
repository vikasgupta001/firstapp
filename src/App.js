import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact'
import ContactHeader from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactHeader name="Contact Manager"/>
        <Contact name="Vikram Singh" email="vikram@gmail.com" phone="8787878787"/>
        <Contact />
      </div>
    );
  }
}

export default App;
