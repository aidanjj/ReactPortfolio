import React from 'react';
import ReactDOM from 'react-dom/client';
import Image from '../../Components/Image/Image';
import {ImageData} from './ImageData.js';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import ParticleAnimation from 'react-particle-animation'
import Example from './Example'
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.css'
import 'animate.css';
import { render } from '@testing-library/react';

function Home(){
    return (
        <>
        <ParticleAnimation/>
        <div className='introduction-container'>
        <div className='introduction'>
        <Fade left duration={1500}>
            <h1>Hi,</h1>
        </Fade>
        <Fade left duration={1500} delay={1500}>
            <h1>I'm Albert Edmundson.</h1>
        </Fade>
        </div>
        <div className='photo-container'>
            <Zoom duration={4000} delay={3000}>
                <img src={require("../../assets/albert.png")} alt='' className='photo'/>
            </Zoom>
        </div>
        </div>
    <div>
        <div className='image-container'>
            {ImageData.map((item,index) => {
                return(
                    <li key={index} className='image-list'>
                        <Zoom fraction={.5}>
                        <img src={require('../../assets/' + item.name + '.png')} alt='' className='image'/>
                        </Zoom>
                    </li>
                );
            })}
        </div>
        
    </div>
    </>
    );
}
export default Home;