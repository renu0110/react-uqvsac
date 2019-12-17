import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";

export default class Main extends React.Component{
  render(){
    return(
      <div>
      <Router history={history}>
      <Route path="/" component={Login} exact/>
      <Route path="/Welcome" component={Welcome}/>
      </Router>
      </div>
    )
  }
}