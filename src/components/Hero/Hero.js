import React from 'react';
import './Hero.css'
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                <div className='flexColStart hero-left'>
                    <div className='hero-title'>
                        <div className='orange-circle'></div>
                        <motion.h1
                        transition={
                            {
                                duration:3,
                                type:"spring"
                            }
                        }
                        animate={{y:0,opacity:1}}
                        initial={{y:"2rem",opacity:0}}>
                            Discover<br />Most suitable property </motion.h1>
                    </div>
                    <div className='flexColStart hero-description'>
                        <span className='secondaryText'>Find a variety of properties that suit you very easily.</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className='flexCenter search-bar'>
                    <HiLocationMarker color='var(--blue)' size={25}/>
                    <input type="text"/>
                    <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats'>
                        <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={7800} end={10000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={100} end={600}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={10} end={125} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                        </div>
                    </div>
                </div>
                <motion.div className='flexCenter hero-right'
                initial={{x:"7rem",opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{
                    duration:2,
                    type:"spring"
                }}
                >
                    <div className='image-container'>
                        <img src='../hero-image.png' alt="hero-banner" />
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

export default Hero;
