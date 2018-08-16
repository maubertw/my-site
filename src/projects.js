import React, { Component } from 'react'
import ProjectDisplay from './projectDisplay'
import projects from './projectData'


class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedProject: projects['codeMap']
    }
  }

  handleClick = (event, projectName) => {

    this.setState({
      selectedProject: projects[projectName]
    })
  }

  render() {
    return (
      <div id='projects'>

          <div className='projectPreviews'>
            <div className='buttonGroup'>
              <button className='previewButtons' onClick={(e) => this.handleClick(e, 'codeMap')} >code map</button>
              <button className='previewButtons' onClick={(e) => this.handleClick(e, 'candyCrushers')} >candy crushers</button>
              <button className='previewButtons' onClick={(e) => this.handleClick(e, 'wordsInMotion')} >words in motion</button>
            </div>


          <ProjectDisplay project={this.state.selectedProject}/>
          </div>


      </div>
);
}
}

export default Projects;





 {/* <h2 className='contentHeadersBlack'>Code Map</h2><br/> */}
              {/* <p className='regularTextBlack'>reccomendation based storage for your code learning resources</p>
              </div> */}


               {/* <div className='previewBox' onClick={(e) => this.handleClick(e, 'candyCrushers')}>
              <h2 className='contentHeadersBlack'>Candy Crushers</h2><br/>
              <p className='regularTextBlack'>e-commerce site for broken candy</p>
              </div>

              <div className='previewBox' onClick={(e) => this.handleClick(e, 'wordsInMotion')}>
              <h2 className='contentHeadersBlack'>Words in Motion</h2><br/>
              <p className='regularTextBlack'>CSS animations with the Oxford English Dictionary</p>
            </div> */}
