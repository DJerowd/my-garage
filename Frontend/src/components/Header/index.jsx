import { useState } from 'react';
import { getLoggedInUser } from '../../utils/auth.js';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaSquareGithub, FaSquareYoutube  } from "react-icons/fa6";
import { IoLogIn, IoPersonAdd } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

import logo from '../../assets/Sunshine-Garage.png';

import Dropdown from '../Dropdown';

import '../../Styles/components/header.css';
import '../../Styles/responsive.css';

function Header(){
    const loggedInUser = getLoggedInUser();
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    if (!loggedInUser) {
        return (
            <header>
                <a href="http://localhost:5173/home" target="_self" rel="noopener noreferrer">
                    <img src={logo} alt="GTA Logo" />
                </a>
            
                {showMenu && <Dropdown/>}

                <a>
                    <Link to="/signin" title='Entrar' className={(location.pathname === "/signin") ? 'details-btn active' : 'details-btn'}>
                        <IoLogIn  className='sign-icon'/>Entrar
                    </Link>
                    <Link to="/signup" title='Cadastrar' className={(location.pathname === "/signup") ? 'details-btn active' : 'details-btn'}>
                        <IoPersonAdd  className='sign-icon'/>Cadastrar
                    </Link>
                </a>
            </header>
        );
    }

    return (
        <header>

            <a href="http://localhost:5173/home" target="_self" rel="noopener noreferrer">
                <img src={logo} alt="GTA Logo" className="logo" />
            </a>
            
            {showMenu && <Dropdown/>}

            <button className='menu-btn' onClick={toggleMenu}><FaBars className='headerIcon'/></button>


        </header>
    )
}

export default Header;