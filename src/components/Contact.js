import React, { Component } from 'react'

class Contact extends Component {

  state ={
    showBodyView:false
  }
  toggleBody = e =>{
    this.setState({showBodyView : !this.state.showBodyView})
  }
  onDeleteEventHandler = () => {
    this.props.deleteContact();
  }
    render() {
      const {id,name,email,phone} = this.props;
      const {showBodyView} = this.state;
      return (
        <div className="card mb-3">
          <h5 className="card-header">{name} Contact Info
           {showBodyView ? 
             (<i className="fa fa-sort-up ml-1" onClick={this.toggleBody}></i>)
            :(<i className="fa fa-sort-down ml-1" onClick={this.toggleBody}></i>)
           } 
           <i className="fa fa-times text-danger float-right" onClick={this.onDeleteEventHandler}></i>
          </h5>
          {showBodyView ? (
              <div className="card-body" id={id}>
                <h6 className="card-subtitle">Email : {email}</h6>
                <p className="card-text">Phone : {phone}</p>
            </div>
          ) : null}
          
        </div>
      )
  }
}
export default Contact
// Contact.defaultProps ={
//     "name":"Vikas Gupta",
//     email:"vikashg483@gmail.com",
//     phone:"555-555-5555"
// }