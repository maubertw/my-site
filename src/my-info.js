import React, { Component } from 'react'
import me from './images/me.jpeg'


class MyInfo extends Component {

  copyEmail = () => {
    let copyText = document.getElementById("email")
    copyText.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div className='welcome' >
                <a className='blog-links' href='https://medium.com/@mewarrick/starting-and-planning-a-project-2283c584c218'>NEW - I'm starting a project, read my first blog post!</a>
                <img src={me} style={{marginTop: '30px'}}/>
                <p className='intro-text'>
                <span className='hello'>Well hello there,</span><br/><br/>

                <span className='textBody'>Thank you for visiting my site - I’m so glad you came.  You would probably like to know a little bit about me…<br/><br/>

                Before teaching myself how to code I was a line cook and chef.  This high-intensity detail oriented career has instilled in me a great deal of discipline, and has taught me above all how to work on a team.  As a worker you will find me to be loyal, hardworking, light-hearted, an unyielding source of positivity and calm, a problem solver, with the natural drive to strive towards simplicity and perfection in my work.<br/><br/>

                Always having a desire to be both technical and creative, software engineering was a natural choice for my career change.  Working in San Francisco gave me the exposure to the tech industry that I needed to pique my interest.  I took an intro to Python class at Hackbright Academy, and fell in love with programming immediately.  I have never looked back.<br/><br/>

                I currently work at Fullstack Academy as a teaching fellow — a leadership position that has accelerated my growth as a developer.  It has been a rewarding experience to grow my knowledge through teaching, and to serve as project manager to four student teams.<br/><br/>

                I am currently looking for a full-stack developer role; though I am happy to specialize in either front or back-end because I am equally gifted in both.  If you have an employment opportunity for me, or would like to connect please reach out.  I would love to hear from you!
                </span><br/><br/>
                <span className='hello'>-Mary</span>
                </p>
          </div>);
    }
  }



    export default MyInfo;



