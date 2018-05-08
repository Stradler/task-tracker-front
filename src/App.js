import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Switcher from "./Switcher";
const APIURL = "http://localhost:8081";

class App extends Component {
 
  render() {
    return (
     <div className="App">
       <Link to="/login">Login</Link>
       <Link to="/project">Proj</Link>
       <div>
        <Switcher/>
       </div>
     </div>
    );
  }
}

export default App;
