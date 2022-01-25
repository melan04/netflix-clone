import React, { useEffect, useState, useCallback } from "react";
import './Nav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Nav() {

    /*détecte la transition pour scroller */

    const [navBlack, setNavBlack] = useState(false); /* detecte la nav bar quand on scrolle */
    const [toggleMenu, setToggleMenu] = useState(false);

    const transitionNav = useCallback(() => {
        return setNavBlack(window.scrollY > 100); // vérifie au niveau de la fenetre qu'on est au dessus de 100
      }, []);

    useEffect(() => {
        document.addEventListener('scroll', transitionNav);

        return () => {
          document.removeEventListener('scroll', transitionNav);
        }
      }, [transitionNav]);

    const handleClick = () => {
        console.log(toggleMenu);
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    };

    /* scroll */
    /* scroll */

    return (
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : " nav--transparent"} ${toggleMenu && "show"}`}>
            <button className='nav__burger' onClick={handleClick} >
                <MenuIcon />
            </button>
            <img src='./images/logo.png' className="nav__logo" alt="Netflix" />
            <nav className='nav__links'>
                <a href='/' className='nav__link'>
                    Accueil
                </a>
                <a href='/' className='nav__link'>
                    Séries
                </a>
                <a href='/' className='nav__link'>
                    Films
                </a>
            </nav>
            <div className="nav__actions">
                <a href="/" className="nav__action">
                    <SearchIcon />
                </a>
                <a href="/" className="nav__action">
                    DIRECT
                </a>
                <a href="/" className="nav__action">
                    <CardGiftcardIcon />
                </a>
                <a href="/" className="nav__action">
                    <NotificationsIcon />
                </a>

                <a href="/" className="nav__action">
                    <img src='./images/avatar.png' className="nav__avatar" alt='avatar par défaut' />
                </a>
            </div>
        </div>
    );
}

export default Nav;
