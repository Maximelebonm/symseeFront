import './header.css';
import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MemoLogoHeader from '../SvgComponent/logoheader/logoHeader';
import { ToggleSwitch } from '../uiElements/toggleSwitch/toggleSwitch';
import { useAuthContext } from '../../screens/authContext';
import { IoIosArrowDown } from "react-icons/io";
import { useRef } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const closeTimeoutRef = useRef(null);

    const { userDetails } = useAuthContext();
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
        setOpenSubmenu(null);
    }, [location]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 780);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    const handleNavClick = () => {
        if (isMobile) setIsMenuOpen(false);
        setOpenSubmenu(null); // ferme aussi sur desktop après un clic
    };

    const handleSubmenuToggle = useCallback((menu) => {
        if (isMobile) {
            setOpenSubmenu(prev => (prev === menu ? null : menu));
        }
    }, [isMobile]);

    // Desktop hover handlers
    const handleMouseEnter = (menu) => {
        if (isMobile) return;
        clearTimeout(closeTimeoutRef.current);
        setOpenSubmenu(menu);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        setOpenSubmenu(null);
    };

    const handleParentClick = (e, menu) => {
    if (isMobile) {
        e.preventDefault(); // empêche la navigation
        handleSubmenuToggle(menu);
    } else {
        handleNavClick(); // comportement normal desktop
    }
};

    const isActive = (path) => location.pathname === path ? 'headerItem active' : 'headerItem';

    return (
        <nav id="headerContainer" className={isMenuOpen ? 'active' : ''}>
            <button
                id="icons"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMenuOpen}
            />

            <div id="headerLogoContainer">
                <Link to="/"><MemoLogoHeader /></Link>
            </div>

            <ul id="headerNav">
                <li>
                    <Link to="/" className={isActive('/')} onClick={handleNavClick}>
                        ACCUEIL
                    </Link>
                </li>

<li
    className="hasSubmenu"
    onMouseEnter={() => handleMouseEnter('actions')}
    onMouseLeave={handleMouseLeave}
>
    <div className="submenuTrigger">
        <Link
            to="/actions"
            className="headerItem"
            onClick={(e) => handleParentClick(e, 'actions')}
        >
            NOS ACTIONS
        </Link>
        {isMobile && (
            <button
                className={`arrowBtn ${openSubmenu === 'actions' ? 'open' : ''}`}
                onClick={() => handleSubmenuToggle('actions')}
                aria-label="Afficher sous-menu Nos Actions"
                tabIndex={-1} // évite double tab-stop, le lien suffit
            >
                <IoIosArrowDown />
            </button>
        )}
    </div>
    <ul className={`submenu ${openSubmenu === 'actions' ? 'open' : ''}`}>
        <li>
            <Link to="/actions" className="headerItem" onClick={handleNavClick}>
                NOS ACTIONS
            </Link>
        </li>
        <li>
            <Link to="/actualites" className="headerItem" onClick={handleNavClick}>
                ACTUALITÉS
            </Link>
        </li>
    </ul>
</li>


{/* LE SYMSEE */}
<li
    className="hasSubmenu"
    onMouseEnter={() => handleMouseEnter('symsee')}
    onMouseLeave={handleMouseLeave}
>
    <div className="submenuTrigger">
        <Link
            to="/organisation"
            className="headerItem"
            onClick={(e) => handleParentClick(e, 'symsee')}
        >
            LE SYMSEE
        </Link>
        {isMobile && (
            <button
                className={`arrowBtn ${openSubmenu === 'symsee' ? 'open' : ''}`}
                onClick={() => handleSubmenuToggle('symsee')}
                aria-label="Afficher sous-menu Le Symsee"
                tabIndex={-1}
            >
                <IoIosArrowDown />
            </button>
        )}
    </div>
    <ul className={`submenu ${openSubmenu === 'symsee' ? 'open' : ''}`}>
        <li>
            <Link to="/organisation" className="headerItem" onClick={handleNavClick}>
                ORGANISATION
            </Link>
        </li>
        <li>
            <Link to="/communes" className="headerItem" onClick={handleNavClick}>
                TERRITOIRE
            </Link>
        </li>
    </ul>
</li>

                <li>
                    <Link to="/contact" className={isActive('/contact')} onClick={handleNavClick}>
                        CONTACT
                    </Link>
                </li>

                <li>
                    <Link to="/appeldoffres" className={isActive('/appeldoffres')} onClick={handleNavClick}>
                        APPELS D'OFFRES
                    </Link>
                </li>

                <li>
                    <Link to="/documents" className={isActive('/documents')} onClick={handleNavClick}>
                        DOCUMENTS
                    </Link>
                </li>

                {userDetails?.role?.[0]?.name === 'administrator' && (
                    <li>
                        <Link to="/panel" className={isActive('/panel')} onClick={handleNavClick}>
                            PANEL
                        </Link>
                    </li>
                )}
            </ul>

            <ToggleSwitch />
        </nav>
    );
};