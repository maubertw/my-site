import React, { Component } from 'react'
import Icons from './language-icons'



const ProjectDisplay = ({ name, link, projectData, icons }) => {
  const { img, main, role } = projectData
  return(
    <div className='projects displayBox'>
    <a className='projectLinks' href={link}>
      <p className='projectHeader'>{name}</p>
      {
        name !== 'Personal Website' && <a className='visit' href={link}>{`Visit ${name}`}</a>
      }
      <img className='projectPhoto' src={img} />
      </a>
      <br/>
      <span>
        {
          name === 'Code Map' && <iframe width="350" height="197" src="https://www.youtube.com/embed/9Xv8xslpZrQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        }
      <p>{main}</p>
      {
        role && <p><span className='role'>My role:</span><br/>{role}</p>
      }
    </span>
      <Icons icons={icons} />
    </div>
  )
}

export default ProjectDisplay
