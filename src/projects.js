import React, { Component } from 'react'
import candy from './images/candy.png'
import map from './images/map.png'
import mine from './images/mine.png'
import ProjectDisplay from './project-display';

const lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
const link = 'www.marywarrick.com'

class Projects extends Component {
  render(){
    return(
      <div className='projects'>
        <ProjectDisplay name={'Code Map'} photo={map} text={lorum} link={link}/>
        <ProjectDisplay name={'Personal Website'} photo={mine} text={lorum} link={link}/>
        <div className='projects displayBox'>
          <p className='projectHeader'>Words in Motion</p>
          <iframe width="350" height="197" src="https://www.youtube.com/embed/4fVmH_u-8ic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <span>
            <p>{lorum}</p>
          </span>
        </div>
        <ProjectDisplay name={'Candy Crushers'} photo={candy} text={lorum} link={link}/>
      </div>)
  }


}

export default Projects
