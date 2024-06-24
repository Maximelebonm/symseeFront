import './header.css';
import { useState } from 'react';
import { useEffect } from 'react';
import MemoLogoSymsee from '../SvgComponent/logoheader/logo';
import { Link } from 'react-router-dom';
import MemoLogoHeader from '../SvgComponent/logoheader/logoHeader';
import { ToggleSwitch } from '../uiElements/toggleSwitch/toggleSwitch';



export const Header =()=>{

    const [isActive, setIsActive] = useState(false);
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
    const activeItem = (e) => {
    console.log(window.innerWidth)
        const clickedItem = window.innerWidth;
 
        if(clickedItem <= 780){
            console.log('pass')
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
                        Acceuil 
                    </li>
                </Link>
                <Link to='/about'>
                    <li className='headerItem' onClick={activeItem}>
                        A propos de nous
                    </li>
                </Link>
                <Link to='/actualites'>
                    <li className='headerItem' onClick={activeItem}>
                        actualités
                    </li>
                </Link>
                <Link to='/contact'>
                    <li className='headerItem' onClick={activeItem}>
                        Contact
                    </li>
                </Link>
            </ul>
            <ToggleSwitch/>
        </nav>
    )
}