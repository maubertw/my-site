import React from 'react'
import resume from "./mary-warrick-resume-new.pdf"
import card from './images/card.jpg'


const Resume = () => {
  return (
    <div className='resume'>
    <p>some praise for my time as a fellow</p>
    <img src={card} />
    <iframe src={resume}/>
    </div>
  )
}

export default Resume


