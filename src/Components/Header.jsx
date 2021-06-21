import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className='name'>
                <h1><span>First website</span> Using React.js and Bootstrap</h1>
                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, consequuntur!</p>
                <a href="#" className="cv-btn">Download</a>
            </div>
        </div>
    )
}

export default Header
