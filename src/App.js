import React, { Component } from 'react'
import './App.css'
import About from './about'
import Projects from './projects'
import MyInfo from './my-info'



class App extends Component {

  render() {
    return (
      <div className='App' >
            <MyInfo/>
          <div className='appContainer'>
            <About />
            {/* <Projects /> */}
          </div>
          </div>);
    }
}

export default App;



