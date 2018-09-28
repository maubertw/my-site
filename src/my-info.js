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

                <img src={me} style={{marginTop: '30px'}}/>
                <p className='intro-text'>
                <span className='hello'>Well hello there,</span><br/><br/>

                <span className='textBody'>Thank you for visiting my site - I’m so glad you came.  Let me tell you a little about myself…<br/><br/>

                Before teaching myself how to code I was a line cook and chef.  This high-intensity detail oriented career has instilled in me a great deal of discipline, and has taught me above all how to work on a team with anyone.  Always having a desire to be both technical and creative, software engineering was a natural choice for my career change.  It all began in San Francisco where I had been working in kitchens for a few years.  My curiosity had led me to take an intro to Python course at Hackbright Academy.  I fell in love with programming immediately, and have never looked back.<br/><br/>

                Currently, I am a teaching fellow at FullStack Academy in Chicago.  It has been a rewarding experience to grow my knowledge through teaching, and I have had the privilege to be project manager to four student teams.  For my next employment opportunity I am looking for a full-stack role - but am open to specializing in back or front end development.  I want to be a part of an organization that is building something useful and elegant.  I want to spend my days enveloped in unraveling the mysteries of a production code base, I want to be a part of building and growing my company’s codebase, and sharing my work with a team of positive and humble colleagues.</span>
                </p>
          </div>);
    }
  }



    export default MyInfo;



