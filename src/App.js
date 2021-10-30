import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

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
    }
}

handlePasswordChange = (e) => {
  this.setState({ password: e.target.value})

  if (e.target.value.length > 5) {
    this.setState ({passwordIsValid: true})
  }
}

handleRememberMeChange = () => {
  this.setState({rememberMe: true})
}

onSubmit = (e) => {
  e.preventDefault()
}

// //1 render pour afficher // 4 définir l'evenement onChange et handlechange pour modifier dans la value 
render(){
  return(

    //rajouter input pour nom prenom
  
//2 

<form>
  <div class="mb-3">
    <div class="col-4">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"
     class="form-control"
     id="exampleInputEmail1"
     aria-describedby="emailHelp"
     onChange={this.handleEmailChange}>
     </input>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  </div>

  <div class="mb-3">
  <div class="col-4">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password"
     class="form-control" 
     id="exampleInputPassword1"
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
)
  }
}


export default App;
