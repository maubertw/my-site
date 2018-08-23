import React, { Component } from 'react'

const words = ['mary', 'is', 'the', 'best']


class Test extends Component {
   constructor(){
     super()
     this.state = {
       ind : 0
     }
     this.reset = this.reset.bind(this)
   }



   reset = () => {
     setInterval(function(){
      console.log('index', this.state.ind)
          if(this.state.ind === 3){
          this.setState({
            ind: 0
          })
        } else {
          this.state.ind = this.state.ind++
        }
      }, 100);
    }


   componentDidMount(){
    this.reset()
  }


   render(){
     return(
       <p>{words[this.state.ind]}</p>
     )
   }


}


export default Test
