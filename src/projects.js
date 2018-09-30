import React, { Component } from 'react'
import ProjectDisplay from './project-display';
import Icons from './language-icons'
import projects from './project-data'
import html from './images/logos/html.png'
import css from './images/logos/css.png'
import express from './images/logos/express.png'
import javascript from './images/logos/javascript.png'
import neo4j from './images/logos/neo4j.png'
import node from './images/logos/node.png'
import react from './images/logos/react.png'
import redux from './images/logos/redux.png'
import sequelize from './images/logos/sequelize.png'

class Projects extends Component {
  render(){
    return(
      <div className='projects'>
        <ProjectDisplay name={'Code Map'} projectData={projects.codeMap} link={'http://code-map.herokuapp.com/'} icons={[neo4j, node, express, react, redux, html, css]}/>
        <ProjectDisplay name={'Candy Crushers'} projectData={projects.candyCrushers} link={'https://candy-crushers.herokuapp.com/'} icons={[sequelize, node, express, react, redux, html, css]}/>
        <div className='projects displayBox'>
          <p className='projectHeader'>Words in Motion</p>
          <iframe width="350" height="197" src="https://www.youtube.com/embed/4fVmH_u-8ic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <br/>
          <iframe width="350" height="197" src="https://www.youtube.com/embed/kLjX4C3Tj-M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <span>
            <p>{projects.wordsInMotion.main}</p>
          </span>
          <Icons icons={[react, css, html]} />
        </div>
        <ProjectDisplay name={'Personal Website'} projectData={projects.personalSite} link={'www.marywarrick.com/home'} icons={[react, css, html]}/>
      </div>)
  }
}

export default Projects
