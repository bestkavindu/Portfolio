import React from 'react'
import Wave from '../../img/wave.png'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Fb from '@iconscout/react-unicons/icons/uil-facebook'
import GitHub from '@iconscout/react-unicons/icons/uil-github'



const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>bestkavindu@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Fb color='white' size='3rem'/>
                <GitHub color='white' size='3rem'/>

            </div>
        </div>
    </div>
  )
}

export default Footer