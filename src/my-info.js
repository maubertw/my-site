import React, { Component } from 'react'
import lorumIpsum from './images/lorum-ipsum3.svg'




class MyInfo extends Component {

  copyEmail = () => {
    let copyText = document.getElementById("email")
    copyText.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div className='welcome' >
            <div className='lorumIpsum'>
                <img src={lorumIpsum} />
            </div>
            <div className='card' >
                <h1 className='myName'> Mary Warrick</h1>
                <div className='logosAndLinks'>

               <a href="https://www.linkedin.com/in/mary-warrick-1a21a7b4/"> <i class="fab fa-linkedin" ></i></a>
                <a href="https://github.com/maubertw"> <i class="fab fa-github" ></i></a>
                <div className='tooltip'><span className='tooltiptext'>copy mary's email to clipboard</span>
                <i class="fas fa-envelope" onClick={(e) => this.copyEmail(e)} ></i>


                </div>
                </div>

                <input type="text" value="meaubertw@gmail.com" id="email"></input>
                <p className='regularTextBlack'>full stack software developer,<br/>
                typography enthusiast,<br/>
                oyster shucker,<br/>
                bonvivant.</p>
            </div>
          </div>);
    }


}

export default MyInfo;



