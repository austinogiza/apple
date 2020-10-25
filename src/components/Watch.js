import React, { Component } from 'react'
import pc from '../images/watch.jpg'
import title from '../images/title.png'

class Watch extends Component {
    render() {
        return (
            <div className="Watch">

            <div className="container">

                <h1><img src={title} alt=""/></h1>
                <p>The future of health is on your wrist.</p>
                <a href="">Learn more </a>
{/* <figure className="hero_pc"></figure> */}
                <img src={pc} alt="" className="hero_pc"/>
                {/* <figure className="hero_pc"></figure> */}
                {/* <img src={mobile} alt="" className="hero_mobile"/> */}

                <figure className="hero_mobile"></figure>

            </div>
        </div>
        )
    }
}


export default Watch;