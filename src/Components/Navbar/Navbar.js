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
        <Fade top delay={1000}>
        <IconContext.Provider value={{color: '#fff'}}>
            <nav className='navbar'>
                <ul className='nav-menu-items'>
                    {NavbarData.map((item,index) => {
                        return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <p1 className='text'>{item.title}</p1>
                            </Link>
                        </li>
                        
                        );
                    })}
                </ul>
                </nav>
            </IconContext.Provider>
            </Fade>
            </div>
        </>
    )
}

export default Navbar;