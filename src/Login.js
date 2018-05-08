import React, { Component } from 'react';
import './App.css';
const APIURL = "http://localhost:8081";



class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputName: "",
      inputPassword: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    let fetchData = {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.inputName,
        password: this.state.inputPassword
      }),
      headers: { "Content-Type": "application/json" }
    }
    console.log(fetchData);
    e.preventDefault();
    fetch(`${APIURL}/login`, fetchData).then(e => e.json()).then(data => console.log(data)).catch(err => console.log(err));
    this.setState({inputName:"", inputPasword: ""});
    this.props.history.push('/');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" 
        onChange={e => this.setState({inputName: e.target.value})
        }/>
        <input type="password" name="password" 
        onChange={e => this.setState({inputPassword: e.target.value})
        }/>
        <button>Log In</button>
      </form>
    );
  }
}

export default Login;