import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Input from "./Component/Input"

class App extends React.Component {
  constructor(){
  super()

//   // 1 et 3 definir l'état 

  this.state = {
    email: "",
    password: "",
    rememberMe: false,
    emailIsValid: false,
    passwordIsValid: false,
    isSubmitted: false
   }
}

// //5 définir handleChange qui prend un evenement en parametre pour modifier la value
handleEmailChange = (e) => {
  //console.log(e)

  //6  ...( E.TARGET pour recuperer le champ, et .VALUE pour récupérer la valeur)
  let str = e.target.value
		const regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str)

    //7 udapté
    this.setState ({email: str})

//8 condition
    if (regex) {
      this.setState({emailIsValid : true})
    } else {
      this.setState({emailIsValid: false})
    }
}

handlePasswordChange = (e) => {
  this.setState({ password: e.target.value})

  if (e.target.value.length > 5) {
    this.setState ({passwordIsValid: true})
  } else {
    this.setState({passwordIsValid : false})
  }
}

handleRememberMeChange = (e) => {
  //console.log(e)
  if (e.target.checked){
  this.setState({rememberMe: true})
} else {
  this.setState({rememberMe: false})

}
}

onSubmit = (e) => {
  e.preventDefault()


  if (this.state.emailIsValid && this.state.passwordIsValid) {
    this.setState({ isSubmitted: true })

  }
}


handleFirstName = (e) => {
  this.setState({ firstName: e.target.value })
}
handleLastName = (e) => {
  this.setState({ lastName: e.target.value })
}
// //1 render pour afficher // 4 définir l'evenement onChange et handlechange pour modifier dans la value 
render(){
  return(

    //rajouter input pour nom prenom
  
//2 
<form class="was-validated">
  <div class="mb-3">
    <div class="col-4">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control is invalid" id="exampleInputEmail1" placeholder="Enter email..." required
     aria-describedby="emailHelp"
     onChange={this.handleEmailChange}>
     </input>
  </div>
  </div>

  <div class="mb-3">
  <div class="col-4">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password"class="form-control is invalid" id="exampleInputPassword1" placeholder="Enter password..." required
     onChange={this.handlePasswordChange}>
     </input>
  </div>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit"
  onChange={this.handleRememberMeChange}
   class="btn btn-primary">Submit</button>
   </form>

  
  )}}


export default App;
