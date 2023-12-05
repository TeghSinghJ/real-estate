import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className="paddings innerWidth flexCenter f-container">
                <div className='flexColStart f-left'>
                    <img src='./logo2.png' alt="logo" width={120}/>
                    <span className='secondaryText'>
                        Our vision is to provide places to all people<br/>
                        for better living.
                    </span>
                </div>
                <div className='flexColStart f-right'>
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>143 Warangal, Telanagana , India</span>
                    <div className='flexCenter f-menu'>
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer