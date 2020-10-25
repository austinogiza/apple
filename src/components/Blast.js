import React, { Component } from 'react'
import pc from '../images/desktop.jpg'

class Blast extends Component {
    render() {
        return (
            <div className="Blast">

            <div className="container">

                <h1>iPhone 12</h1>
                <p>Blast past fast.</p>
                <a href="">Learn more </a>
{/* <figure className="hero_pc"></figure> */}
                {/* <img src={pc} alt="" className="hero_pc"/> */}
                <figure className="hero_pc"></figure>
                {/* <img src={mobile} alt="" className="hero_mobile"/> */}

                <figure className="hero_mobile"></figure>

                <div className="grid"><h1>iPhone 12 mini</h1>
                <p>Pre-order starting at 5:00 a.m. <br/>PST on 11.6 <br/>Available 11.13</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Blast;
