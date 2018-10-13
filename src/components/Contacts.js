import React, { Component } from 'react'
import Contact from './Contact';

 class Contacts extends Component {
     state={
         contacts:[
             {
                 id:178,
                name:"Vikas Gupta",
                email:"vikas@mail.com",
                phone:"222-222-2222"
             },
             {
                 id:179,
                 name:"Vikram Singh",
                 email:"vikram@mail.com",
                 phone:"333-333-3333"
             },
             {
                 id:180,
                 name:"Vinay Champ",
                 email:"vinay@mail.com",
                 phone:"444-444-4444"
             }
         ]
     }
  render() {
      const {contacts} = this.state;
    return (
      <div>
          {
              contacts.map(elm => 
                (
                    <Contact name={elm.name} email={elm.email} phone={elm.phone} />
                )
              )
          }
      </div>
    )
  }
}

export default Contacts;