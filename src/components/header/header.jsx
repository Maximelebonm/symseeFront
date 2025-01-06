import './header.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MemoLogoHeader from '../SvgComponent/logoheader/logoHeader';
import { ToggleSwitch } from '../uiElements/toggleSwitch/toggleSwitch';
import { IoIosArrowDown } from "react-icons/io";


export const Header =()=>{
    const [isActive, setIsActive] = useState(false);
    const [isMobile,setIsMobile] = useState(window.innerWidth<= 760);

    const toggleActive = () => {
        setIsActive(!isActive);
    }



    useEffect(()=>{
                const nav = document.querySelectorAll('#headerNav .headerItem');
                nav.forEach(item => {
                    item.addEventListener('click', function() {
                        nav.forEach((item)=>{
                            item.classList.remove('active')
                        })    
                        this.classList.add('active')
                    });
                });
    },[])
    
    window.addEventListener('resize', () => {
        const width = window.innerWidth; // Largeur de la fenêtre
        if (width <= 760) {
            setIsMobile(true)
        }   else{
            setIsMobile(false)
        }
      });
    const activeItem = () => {
        const clickedItem = window.innerWidth;
        if(clickedItem <= 760){
            toggleActive() 
        }
      
    }

    return (
        <nav id='headerContainer' className={isActive ? 'active' : ''}>
              <div>
                <div id='icons' onClick={toggleActive}>

                </div>
            </div>
        <div id='headerLogoContainer' className=''>
             <Link to='/'><MemoLogoHeader/> </Link>
        </div>
            <ul id='headerNav' onClick={activeItem}>
                <Link to='/'>
                    <li className='headerItem' onClick={activeItem}>
                        ACCEUIL 
                    </li>
                </Link>
                <Link to='/organisation'>
                    <li className='headerItem' onClick={activeItem}>
                        NOS ACTIONS
                    </li>
                </Link>
                {/* {!isMobile ?
                <li className='headerItem hasSubmenu'>
                <Link to='/about'><span className='headerItem'>NOS ACTIONS<IoIosArrowDown /></span></Link>
                    <ul className={`submenu`}>
                        <Link to='/about'><li onClick={activeItem}>NOS ACTIONS</li></Link>
                        <Link to='/gemapi'><li onClick={activeItem}>GEMAPI</li></Link>
                    </ul>
                </li> : 
                <>
                    <Link to='/about'><li onClick={activeItem} className='headerItem'>À PROPOS DE NOUS</li></Link>
                    <Link to='/gemapi'><li onClick={activeItem} className='headerItem'>GEMAPI</li></Link>
                </>   
             } */}
                <Link to='/organisation'>
                    <li className='headerItem' onClick={activeItem}>
                        ORGANISATION
                    </li>
                </Link>
                <Link to="/commune">
                    <li className='headerItem' onClick={activeItem}>
                        TERRITOIRE
                    </li>
                </Link>
                <Link to='/contact'>
                    <li className='headerItem' onClick={activeItem}>
                        CONTACT
                    </li>
                </Link>
                <Link to="/AppelDoffre">
                    <li className='headerItem' onClick={activeItem}>
                        APPEL D'OFFRE
                    </li>
                </Link>
            </ul>
            <ToggleSwitch/>
        </nav>
    )
}