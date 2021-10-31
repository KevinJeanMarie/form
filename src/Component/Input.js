import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from './Input'

class Input extends Component {
    render() {

      const { onChangeMail, onChangePassword, onChangeRememberMe, onChangeFirstName, onChangeLastName, onSubmit } = this.props
  
      return (
        <form onSubmit={onSubmit} className="was-validated" >
          <div className="mb-3">
            <label className="form-label ms-3">
              First Name
              <input type="text" onChange={onChangeFirstName} />
            </label>
            <label className="form-label ms-3">
              Last Name 
              <input type="text" onChange={onChangeLastName} />
            </label>
          </div>
          </form>
      );
    }
}

export default Input; 