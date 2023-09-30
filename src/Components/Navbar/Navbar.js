import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {NavbarData} from './NavbarData';
import {IconContext} from 'react-icons';
import Fade from 'react-reveal/Fade';
import './Navbar.css';

function Navbar(){
    return (
        <>
        <div className='nav'>
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className='navbar'>
                <ul className='nav-menu-items'>
                    {NavbarData.map((item,index) => {
                        return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <h2 className='text'>{item.title}</h2>
                            </Link>
                        </li>
                        
                        );
                    })}
                </ul>
                </nav>
            </IconContext.Provider>
            </div>
        </>
    )
}

export default Navbar;