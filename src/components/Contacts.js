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
     deleteContact=(id,e)=>{
        console.log("Delete Clicked",id);
        const {contacts} = this.state;
        const filteredContacts = contacts.filter(elm=> elm.id !== id) ;
        this.setState({
            contacts:filteredContacts
        }) 
     }
    render() {
      const {contacts} = this.state;
    return (
      <React.Fragment>
          {
              contacts.map(elm => 
                (
                    <Contact key={elm.id} name={elm.name} email={elm.email} phone={elm.phone} deleteContact={this.deleteContact.bind(this,elm.id)} />
                )
              )
          }
      </React.Fragment>
    )
  }
}

export default Contacts;