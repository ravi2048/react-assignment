import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Cart from '../../assets/carts.png';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div className='links'>
        <Link className='link' to='/'>
          Mobiles
        </Link>
        <Link className='link' to='/'>
          fashion
        </Link>
        <Link className='link' to='/'>
          beauty
        </Link>
        <Link className='link' to='/'>
          grocery
        </Link>
        <Link className='link' to='/'>
          laptops
        </Link>
        <Link className='cart-link' to='/cart'>
          <img src={Cart} alt='logo'/>
        </Link>
      </div>
    </div>
  );
}
