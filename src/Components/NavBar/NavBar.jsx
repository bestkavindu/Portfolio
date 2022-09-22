import React from 'react'
import Toggle from '../Toggle/Toggle'
import "./NavBar.css"
import {Link} from 'react-scroll'

function NavBar() {
  return (
    <div>
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Kavindu</div>
                 <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <Link spy={true} to='NavBar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                        <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                        <li>Contact</li>
                        </Link>
                    </ul>
                </div>
                <button className='button'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar