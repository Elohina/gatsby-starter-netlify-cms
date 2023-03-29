import React, { useState } from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className='navbar is-transparent'
      role='navigation'
      aria-label='main-navigation'
      style={{
        color: '#da0c25',
        borderBottom: '2px solid #da0c25',
        width: '100%',
      }}
    >
      <div style={{ margin: '0 auto' }}>
        <ul
          className={` navbar-start has-text-centered`}
          style={{ height: '100%' }}
        >
          <li className='navbar-item'>
            <Link
              className='navbar-item'
              style={{
                padding: '0px',
                paddingLeft: '5rem',
                paddingRight: '5rem',
              }}
            >
              espacios
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              className='navbar-item'
              style={{
                padding: '0px',
                paddingLeft: '5rem',
                paddingRight: '5rem',
              }}
            >
              dimensiones
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              className='navbar-item last'
              style={{
                padding: '0px',
                paddingLeft: '5rem',
                paddingRight: '5rem',
              }}
            >
              tiempos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
