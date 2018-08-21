import React, { Component } from 'react'
import questionMark from './images/question-mark.svg'




class About extends Component {

  render() {
    return (
      <div id='about'>
        <div className='circle'></div>

        <p className='questionMark'>?</p>

        <div className='aboutText'>
        <h1 className='contentHeadersBlack'>Hello!</h1><br/><br/><br/>
        <p className='regularTextBlackTimes'>My name is Mary, nice to meet you!  I am a full stack software engineer with an emphasis on front-end development.  Formerly a chef, I bring a strong work ethic, adept communication skills, strong attention to detail, the ability to perform under pressure, creativity, vision, and experience leading diverse teams.<br/><br/>
        I fell in love with software development when I was working in San Francisco.  On the first night of an intro to computer programming course at Hackbright Academy, I felt like I had been granted entrance to a secret society, and I never looked back.<br/><br/>
        I graduated from Fullstack Academy of Code in 2018, and I am currently a teaching fellow for the program.  Mentoring and leading new crops of engineers has been a deeply rewarding experience for me.<br/><br/>
        I am currently seeking opportunities for my post-fellowship life.  I want to work with firms that focus on creating, growing, or revitalizing digital products and experiences.  I am a humble team-oriented person, and have the ability to work with many different types of people.<br/><br/>
        Looking forward to chatting with you!</p><br/>
        <h1 className='contentHeadersBlack'>-Mary</h1>
        </div>
        </div>

);
}
}

export default About;


