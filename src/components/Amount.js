import React, { Component } from 'react'
import pc from '../images/hero_3.jpg'


class Amount extends Component {
    render() {
        return (
         <div className="Amount">

             <div className="container">
             <h1>iPhone 11</h1>
                   <p>Just the right amount of everything.</p>
                   <a href="">Learn more </a>

                   {/* <img src={pc} alt="" className="hero_pc"/> */}
          <div className="hero_pc"></div>
             </div>
         </div>
        )
    }
}

export default Amount;
