import React, { Component } from 'react'
import ProjectDisplay from './project-display';
import projects from './project-data'

class Projects extends Component {
  render(){
    return(
      <div className='projects'>
        <ProjectDisplay name={'Code Map'} projectData={projects.codeMap} link={'http://code-map.herokuapp.com/'}/>
        <ProjectDisplay name={'Candy Crushers'} projectData={projects.candyCrushers} link={'https://candy-crushers.herokuapp.com/'}/>
        <div className='projects displayBox'>
          <p className='projectHeader'>Words in Motion</p>
          <iframe width="350" height="197" src="https://www.youtube.com/embed/4fVmH_u-8ic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <br/>
          <iframe width="350" height="197" src="https://www.youtube.com/embed/kLjX4C3Tj-M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

          <span>
            <p>{projects.wordsInMotion.main}</p>
          </span>
        </div>
        <ProjectDisplay name={'Personal Website'} projectData={projects.personalSite} link={'www.marywarrick.com/home'}/>
      </div>)
  }
}

export default Projects
