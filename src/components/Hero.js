import React, { Component } from 'react'
import pc from '../images/hero.jpg'
import mobile from '../images/mobile_1.jpg'
class Hero extends Component {
    render() {
        return (
           <div className="Hero">

               <div className="container">

                   <h1>iPhone SE</h1>
                   <p>Lots to love. Less to spend.</p>
                   <a href="">Learn more </a>

                   <img src={pc} alt="" className="hero_pc"/>
                   {/* <figure className="hero_pc"></figure> */}
                   <img src={mobile} alt="" className="hero_mobile"/>
               </div>
           </div>
        )
    }
}


export default Hero;