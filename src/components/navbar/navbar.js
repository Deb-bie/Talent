import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import Logo from '../../assets/logo/logo.svg';
import {CloseOutlined, MenuOutlined} from '@material-ui/icons';


import './navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


  return (
    <nav className="navbar">
        <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    <img src={Logo} alt='logo' />
                </Link>

                <div className="navbar-icon" onClick={handleClick}>
                    {click ? <CloseOutlined /> : <MenuOutlined />}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' activeClass="active" className="nav-link" onClick={handleClick}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link exact to='about' 
                        activeClass="active" className="nav-link" onClick={handleClick} >
                            About Us
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link exact to='courses' activeClass="active" className="nav-link" onClick={handleClick}>
                            Courses
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link exact to='contact-us' activeClass="active" className="nav-link" onClick={handleClick}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

    </nav>
  )
}

export default Navbar;














