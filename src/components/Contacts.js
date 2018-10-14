import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../context'
 class Contacts extends Component {
     
     deleteContact=(id,e)=>{
        console.log("Delete Clicked",id);
        const {contacts} = this.state;
        const filteredContacts = contacts.filter(elm=> elm.id !== id) ;
        this.setState({
            contacts:filteredContacts
        }) 
     }
    render() {
    return (
        <Consumer>
            {value =>{
                const {contacts} = value;
                return(
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
            }}
        </Consumer>
    )
  }
}

export default Contacts;