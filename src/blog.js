import React, { Component } from 'react'
import blerbs from './blerb-data'



const Blerb = (props) => {
  const {title, description, link, date} = props.blerb
  return(
    <a href={link}>
        <div className='blerb'>
            <div className='blerbHeader'>
            <p>{title}</p>
            </div>
            <p>{date} - {description}</p>
        </div>
    </a>
  )
}


class Blog extends Component {
  render(){
    return (
      <div className='blog'>
        {
          blerbs.map(blerb => {
            return <Blerb blerb={blerb} />
          })
        }
      </div>
    )
  }
}


export default Blog
