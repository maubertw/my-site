import React, { Component } from 'react'
import './App.css'
import MyInfo from './my-info'
import resume from './images/MaryWarrickResume2.pdf'
import Projects from './projects'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'




class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <nav>
          <p className='myName'>Mary Warrick</p>
          <p className='byLine'>Full-Stack Software Engineer <br/>Located in Chicago, Il</p>

          <div className='navLinks'>
            <NavLink  to='/home'
            activeStyle={{
              color: '#EF4907'
             }}
            >home</NavLink>
            <NavLink to='/projects'
            activeStyle={{
              color: '#EF4907'
             }}
            >projects</NavLink>
            <a className='resume' href={resume} >resume</a>
          <div className='social'>
          <a href="https://www.linkedin.com/in/mary-warrick-1a21a7b4/"> <i class="fab fa-linkedin" ></i></a>
                <a href="https://github.com/maubertw"> <i class="fab fa-github" ></i></a>
          </div>
          </div>
        </nav>

        <div className='App' >
          <Switch>
            <Route exact path='/home' component={MyInfo} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </div>
      </div>
      </Router>)
    }
}

export default App;



