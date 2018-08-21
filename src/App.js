import React, { Component } from 'react'
import './App.css'
import About from './about'
import Projects from './projects'
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
            <Route path='/about-mary' component={About} />
            <Route path='/my-projects' component={Projects} />
          </Switch>
        </div>
        </Router>);
    }
}

export default App;



