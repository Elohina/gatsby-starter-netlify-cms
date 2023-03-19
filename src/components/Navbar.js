import React, { useState } from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

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
        {/* <div className="navbar-brand"> */}
        {/* <Link to="/" className="navbar-item" title="Logo">
            Quinze
          </Link> */}
        {/* Hamburger menu */}
        {/* <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button> */}
        {/* </div> */}
        <ul
          className={` navbar-start has-text-centered`}
          style={{ height: '100%' }}
        >
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          <li className='navbar-item'>
            <Link
              className='navbar-item'
              style={{
                padding: '0px',
                borderLeft: '1px solid #da0c25',
                paddingLeft: '5rem',
                paddingRight: '5rem',
              }}
              to='/about'
            >
              espacios
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              className='navbar-item'
              style={{
                padding: '0px',
                borderLeft: '1px solid #da0c25',
                paddingLeft: '5rem',
                paddingRight: '5rem',
              }}
              to='/products'
            >
              dimensiones
            </Link>
          </li>
          <li className='navbar-item'>
            <Link
              className='navbar-item'
              style={{
                padding: '0px',
                borderLeft: '1px solid #da0c25',
                borderRight: '1px solid #da0c25',
                paddingLeft: '5rem',
                paddingRight: '5rem',
              }}
              to='/blog'
            >
              tiempos
            </Link>
          </li>
          {/* <li className='navbar-item' style={{ padding: '0px', borderLeft: '1px solid #da0c25'}}> */}
          {/* <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link> */}
          {/* </li> */}
          {/* <li className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
