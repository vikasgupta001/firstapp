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
      <div className="card mb-3">
        <h5 className="card-header">{name} Contact Info</h5>
        <div className="card-body">
            <h6 className="card-subtitle">Email : {email}</h6>
            <p className="card-text">Phone : {phone}</p>
        </div>
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