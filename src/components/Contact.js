import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contact extends Component {
   static defaultProps ={
        "name":"Vikas Gupta",
        email:"vikashg483@gmail.com",
        phone:"555-555-5555"
    }
    render() {
      const {name,email,phone} = this.props;
    return (
      <div>
        <h2>{name}</h2>
            <ul>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
            </ul>
      </div>
    )
  }
}

// Contact.defaultProps ={
//     "name":"Vikas Gupta",
//     email:"vikashg483@gmail.com",
//     phone:"555-555-5555"
// }
Contact.propTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
}