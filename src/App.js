import React, { Component } from 'react'
import './App.css'
import MyInfo from './my-info'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, Link} from 'react-router-dom'




class App extends Component {
  constructor(){
    super()
    this.state = {
      selected: 'welcome'
    }
  }
  render() {
    return (
      <Router>
        <div className='App' >
          <Switch>
            <Route exact path='/' component={MyInfo} />
          </Switch>
        </div>
        </Router>);
    }
}

export default App;



