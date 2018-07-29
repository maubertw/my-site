import React, { Component } from 'react';
import './App.css';

const appStyles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70vw',
    alignSelf: 'center'
  },
  center: {
   display: 'flex',
   justifyContent: 'center'
  },
  header: {
    //backgroundColor: '#F4F1E9',
    paddingLeft: 30,
    paddingTop: 30
  },
  myName: {
    //color: '#254CCB',
    color: 'red',
    fontSize: 40,
    fontWeight: 400,
    lineHeight: .85,
    margin: 0
  },
  regularText: {
    color: '#254CCB',
    fontSize: 15,
    fontWeight: 100,
    fontFamily: 'Helvetica'

  },
  sections: {
  },
  contentHeaders: {
    color: '#254CCB',
    fontSize: 25,
    margin: 0
  },
  contentDivs: {
    flex: 1,
    margin: 40
  },
  signature: {
    //color: '#254CCB',
    color: 'red',
    fontSize: 17
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    width: '40vw',
    marginLeft: 30,
    marginTop: 50
  }
};

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='header'>
          <div>
            <h1 className='myName'> Mary E. Aubert Warrick</h1>
              <p className='regularText'>
              Welcome to my site :-)
              </p>
            </div>
          </header>
          <div className='center'>
          <div className='appContainer'>
            <div className='about'>
            <p className='contentHeaders'>About Me</p>
            <p className='regularText'>I am a full stack web-developer with an emphasis on the front-end.  Formerly a chef, I bring a strong work ethic, adept communication skills, strong attention to detail, the ability to perform under pressure, creativity, vision, and experience leading diverse teams.</p><br/>
            <p className='regularText'>
            I fell in love with software development when I was working in San Francisco.  On the first night of an intro to computer programming course at Hackbright Academy, I felt like I had been granted entrance to a secret society, and I never looked back.</p><br/>
            <p className='regularText'>
            I graduated from Fullstack Academy of Code in 2018, and I am currently a teaching fellow for the program.  Mentoring and leading new crops of engineers has been a deeply rewarding experience for me.</p><br/>
            <p className='regularText'>
            I am currently seeking opportunities for my post-fellowship life.  I want to work with firms that focus on creating, growing, or revitalizing digital products and experiences.  I am a humble team-oriented person, and have the ability to work with many different types of people.</p><br/>
            <p className='regularText'>
            Looking forward to chatting with you!</p>

            <p className='signature'>-Mary</p>
          </div>
          </div>
          <div className='contentDivs'>
          <div className='contentDivs'>
            <p className='contentHeaders'>Projects</p>
          </div>
          <div className='contentDivs'>
            <p className='contentHeaders'>Contact</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
