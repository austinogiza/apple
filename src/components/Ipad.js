import React, { Component } from 'react'
import pc from '../images/hero_2.jpg'
import mobile from '../images/mobile_2.jpg'

class Ipad extends Component {
    render() {
        return (
          <div className="Ipad">

              <div className="container">
                  <h1>iPad Air</h1>
                  <p>Powerful. Colorful. Wonderful.</p>
                  <a href="">Learn More</a>
                  <img src={pc} alt="" className="hero_pc"/>
                  
                   <img src={mobile} alt="" className="hero_mobile"/>
              </div>
          </div>
        )
    }
}


export default Ipad;