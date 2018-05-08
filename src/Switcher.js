import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import Login from "./Login";
const APIURL = "http://localhost:8081";

const Switcher = ({history}) => (
  <div>
    <Switch>
      <Route path="/login" render={props => (
        <Login {...props}/>
      )}/>
    </Switch>
    <button onClick={() => history.push('/project')}>
      Go Home
    </button>
    <button onClick={() =>  fetch(`${APIURL}/project`).then(e => e.json()).then(data => console.log(data)).catch(err => console.log(err))}>
      Projectify
    </button>
  </div>
);
  
  export default withRouter(Switcher);