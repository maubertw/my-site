import React, { Component } from 'react'
import './App.css'
import lightbrow from './lightbrow.jpg'
import lightserious from './lightserious.jpg'
import lightsmile from './lightsmile.jpg'
import graybrow from './gray-brow.jpg'
import grayserious from './gray-serious.jpg'
import graysmile from './gray-smile.jpg'



class App extends Component {

  render() {
    return (
      <div className='App' >
          <div className='center'>
        <header className='header'>
          <div>
            <h1 className='myName'> Mary Warrick</h1>
            </div>
          </header>
          <div className='appContainer'>
            <div className='contentDivs'>
              <img src={graysmile}/>
              <img src={lightsmile}/>
                <p className='contentHeaders'>About Me</p>
              </div>
            <div className='contentDivs'>
                <img src={grayserious}/>
                <img src={lightserious}/>
                <p className='contentHeaders'>Projects</p>
            </div>
            <div className='contentDivs'>
              <img src={graybrow}/>
              <img src={lightbrow}/>
                <p className='contentHeaders'>Contact</p>
            </div>
          </div>
          </div>
          </div>






);
}
}

export default App;

//  <div className='aboutSection'>
// <p className='regularText'>I am a full stack web-developer with an emphasis on the front-end.  Formerly a chef, I bring a strong work ethic, adept communication skills, strong attention to detail, the ability to perform under pressure, creativity, vision, and experience leading diverse teams.</p><br/>
//   <p className='regularText'>
//   I fell in love with software development when I was working in San Francisco.  On the first night of an intro to computer programming course at Hackbright Academy, I felt like I had been granted entrance to a secret society, and I never looked back.</p><br/>
//   <p className='regularText'>
//   I graduated from Fullstack Academy of Code in 2018, and I am currently a teaching fellow for the program.  Mentoring and leading new crops of engineers has been a deeply rewarding experience for me.</p><br/>
//   <p className='regularText'>
//   I am currently seeking opportunities for my post-fellowship life.  I want to work with firms that focus on creating, growing, or revitalizing digital products and experiences.  I am a humble team-oriented person, and have the ability to work with many different types of people.</p><br/>
//   <p className='regularText'>
//   Looking forward to chatting with you!</p>

//   <p className='signature'>-Mary</p>
//   </div>
