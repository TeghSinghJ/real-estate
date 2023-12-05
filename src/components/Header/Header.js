import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened,setMenuOpened] = useState(false)
  const getMenuStyle=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
        <img src="./logo.png" width={100} alt="logo"/>
        <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
        <div className='flexCenter h-menu' style={getMenuStyle(menuOpened)}>
        <a href="">Residencies</a>
        <a href="">Our Value</a>
        <a href="">Contact us</a>
        <a href="">Get Started</a>
        <a href=""><button className='button'>Contact Us</button></a>
    </div></OutsideClickHandler>
        
        <div className='menu-icon'>
          <BiMenuAltRight size={30} onClick={()=>setMenuOpened((prev)=>!prev)}/>
        </div>
        </div>
        
    </section>
  )
}

export default Header
