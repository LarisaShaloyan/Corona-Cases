import React from 'react';
import './navBar.css'
import Logo from '../assets/images/logo.svg'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

function Navbar(props) {
    return (
        <div>
            <header className="header" >
                <div className="container">

                    <a href="google.com" className="logo">
                        <img src={Logo} width="199" height="50" alt="Covid-19 home"/>
                    </a>

                    <nav className="navbar" >
                        <ul className="navbar-list">

                            <li className="navbar-item" >Home
                                {/*<a href="google.com" className="navbar-link" >Home</a>*/}
                            </li>

                            <li className="navbar-item">About
                                {/*<a href="google.com" className="navbar-link" >About</a>*/}
                            </li>

                            <li className="navbar-item">Prevention
                                {/*<a href="google.com" className="navbar-link" >Prevention</a>*/}
                            </li>

                            <li className="navbar-item"> Blog
                                {/*<a href="google.com" className="navbar-link" >Blog</a>*/}
                            </li>

                            <li className="navbar-item"> Shop
                                {/*<a href="google.com" className="navbar-link" >Shop</a>*/}
                            </li>

                            <li className="navbar-item"> Contact
                                {/*<a href="google.com" className="navbar-link" >Contact</a>*/}
                            </li>

                        </ul>
                    </nav>

                    <button className="nav-toggle-btn" aria-label="toggle menu" >
                        <MdOutlineMenu className="menu" />
                        <IoMdCloseCircle className="close" />
                    </button>

                    <a href="google.com" className="btn btn-primary">Are You Sick</a>

                </div>
            </header>


        </div>
    );
}

export default Navbar;