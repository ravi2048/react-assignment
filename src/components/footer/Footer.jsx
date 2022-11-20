import React from 'react'
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <Link to='/'>
        <img src={Logo} alt='footer-logo'/>
      </Link>
      <span>Made with 🧡 and <b>ReactJs</b></span>
    </div>
  )
}
