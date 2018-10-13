import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const ContactHeader = (props) => {
    const {name} = props;
  return (

    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3 py-0">
      <a class="navbar-brand" href="#">{name}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
</nav>
  )
}

export default ContactHeader;