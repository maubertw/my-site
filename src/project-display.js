import React, { Component } from 'react'



const ProjectDisplay = ({ photo, text, name, link}) => {
  return(
    <div className='projects displayBox'>
      <p className='projectHeader'>{name}</p>
      <a href={link}>{`Visit ${name}`}</a>
      <img className='projectPhoto' src={photo}/>
      <span>
      <p>{text}</p>
      </span>
    </div>
  )
}

export default ProjectDisplay
