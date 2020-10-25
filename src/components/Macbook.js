import React, { Component } from 'react';
import img from '../images/logo_light.png'
import ipad from '../images/ipad.png'


class Macbook extends Component {
    render() {
        return (
      <div className="Macbook">


          <div className="container">

              <div className="mac_grid new_ipad">
        
           <div className="mac_wrapper">
           <h1><img src={ipad} alt=""/></h1>
                  <p>Delightfully capable. <br/> Surprisingly affordable.</p>
                  <a href="" className='mac_link'>Learn More</a>
           </div>
                

              </div>
              <div className="mac_grid power">
              <div className="mac_wrapper">
                  <h1>MacBook Pro</h1>
                  <p>Power. Moves.</p>
                  <a href="" className='mac_link'>Learn More</a>
                  </div>
  
              </div>
              <div className="mac_grid imac">
              <div className="mac_wrapper">
                  <h1>iMac</h1>
                  <p>The all-in-one for all.</p>
                  <a href="" className='mac_link'>Learn More</a>
                  </div>
                 
              </div>
              <div className="mac_grid arcade">
              <div className="mac_wrapper">
                  <h1><img src={img} alt=""/></h1>
                  <p>Calling all players. <br/> Hundreds of worlds. Zero ads.</p>
                  <a href="" className='arcade_link'>Learn More</a>
                  </div>
              </div>
          </div>
      </div>
        )
    }
}



export default Macbook;