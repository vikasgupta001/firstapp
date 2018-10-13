import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const ContactHeader = (props) => {
    const {name} = props;
  return (

    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3 py-0">
      <a className="navbar-brand" href="/">{name}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
</nav>
  )
}

export default ContactHeader;