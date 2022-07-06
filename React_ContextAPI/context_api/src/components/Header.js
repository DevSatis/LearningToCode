import React from 'react';
import {Link} from 'react-router-dom';
import './Styles.css';

const Header = () => {
  return (
    <div>
    <span className='header'>React Contetxt API Learning!</span>
    <ul className='nav'>
        <li>
            <Link to='/'>Home Page</Link>
        </li>
        <li>
            <Link to='/cart'> Cart Page</Link>
        </li>
        
    </ul>
    </div>
  )
}

export default Header;

