import React, { Component } from 'react'
import logo from '../images/logo.svg'

class Header extends Component {
    render() {
        return (
           <header>

<nav>

    <div className="burger">
<div className="container">
<span></span>
<span></span>
</div>
      
    </div>
<div className="logo">
    <img src={logo} alt=""/>
</div>

<div className="nav_cover">
<ul className="nav_links">
    <li>Mac</li>
    <li>iPad</li>
    <li>iPhone</li>
    <li>Music</li>
    <li>Support</li>
    <li>Where To Buy</li>
</ul>

</div>

<div className="search"></div>

</nav>
           </header>
        )
    }
}


export default Header;