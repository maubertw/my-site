import React, { Component } from 'react'
import REACT from './images/react.png'
import REDUX from './images/redux.png'
import EXPRESS from './images/express.png'
import SEQUELIZE from './images/sequelize.png'
import NODE from './images/node.png'
import NEO4J from './images/neo4j.png'
import CSS3 from './images/css.png'
import codeMapPhoto from './images/codeMap.png'
import candyCrushersPhoto from './images/candyCrushers.png'

const techCodeMap = [NEO4J, REACT, REDUX, NODE, EXPRESS]
const techCandyCrushers = [REACT, REDUX, NODE, EXPRESS, SEQUELIZE]
const techWordsInMotion = [CSS3, REACT, NODE, EXPRESS]





class ProjectDisplay extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {name, description, media, link} = this.props.project
    let tech
    let photo
    if(name === 'Code Map'){
      tech = techCodeMap
      photo = codeMapPhoto
    }else if(name === 'Candy Crushers'){
      tech = techCandyCrushers
      photo = candyCrushersPhoto
    }else{
      tech = techWordsInMotion
    }

      return (
        <div className='projectDisplayBox'>

        <div className='projectText'>
          <h1 className='contentHeadersRed'>{name}</h1>
          <p className='regularTextBlack'>{description}</p>
        </div>

        <div className='projectElements'>
          <div className='linkPhotoBox' >
          {
            name === 'Words In Motion' ?
            <iframe className='projectImg' width="560" height="315" src="https://www.youtube.com/embed/4fVmH_u-8ic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            : <span><img className='projectImg' src={photo} />
            <a className='linkCentered' href={link}>{`Click here to visit ${name}`}</a></span>
          }
            </div>
            <div className='techIcons'>
              <h2>Technologies used:</h2>
              {
                tech.map((item) => {
                  return <img src={item} key={item} className="logo" />
                })
              }
            </div>
        </div>


        </div>);

  }


  // wordsInMotionDisplay (){
  //  return (
  //   <iframe width="560" height="315" src="https://www.youtube.com/embed/4fVmH_u-8ic" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  //  )
  // }

  // imageDisplay () {
  //   return (

  //   )
  // }




}

export default ProjectDisplay;


