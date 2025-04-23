import { useState } from 'react';
import { getLoggedInUser } from '../../utils/auth.js';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaSquareGithub, FaSquareYoutube  } from "react-icons/fa6";
import { IoLogIn } from "react-icons/io5";
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
                <section>
                    <a href="http://localhost:5173/home" target="_self" rel="noopener noreferrer">
                        <img src={logo} alt="GTA Logo" />
                    </a>
                </section>
                <main>
                    <div>
                        <a href="https://www.linkedin.com/in/djerowd-moreschi/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin title='Linkedin' alt='Linkedin'/>
                        </a>
                        <a href="https://github.com/DJerowd/my-garage" target="_blank" rel="noopener noreferrer">
                            <FaSquareGithub title='Github' alt='Github'/>
                        </a>
                        <a href="https://www.youtube.com/@DJ_Moreschi" target="_blank" rel="noopener noreferrer">
                            <FaSquareYoutube title='Youtube' alt='Youtube'/>
                        </a>
                    </div>
                    <div>
                    </div>
                </main>
                <section>
                    <Link to="/signin" className={(location.pathname === "/signin") ? 'active' : ''}>
                        <IoLogIn  className='iconMenu'/>Entrar
                    </Link>
                </section>

                {showMenu && <Dropdown/>}

            </header>
        );
    }

    return (
        <header>

            <section>
            <a href="http://localhost:5173/home" target="_self" rel="noopener noreferrer">
                    <img src={logo} alt="GTA Logo" className="logo" />
                </a>
            </section>

            <main>

                <div>
                    <a href="https://www.linkedin.com/in/djerowd-moreschi/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin title='Linkedin' alt='Linkedin'/>
                    </a>
                    <a href="https://github.com/DJerowd/my-garage" target="_blank" rel="noopener noreferrer">
                        <FaSquareGithub title='Github' alt='Github'/>
                    </a>
                    <a href="https://www.youtube.com/@DJ_Moreschi" target="_blank" rel="noopener noreferrer">
                        <FaSquareYoutube title='Youtube' alt='Youtube'/>
                    </a>
                </div>

                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/characters">Personagens</Link>
                    <Link to="/garages">Garagens</Link>
                    <Link to="/vehicles">Veículos</Link>
                </div>
                
            </main>

            <section>
                <button className='menuIcon' onClick={toggleMenu}><FaBars className='headerIcon'/></button>
            </section>

            {showMenu && <Dropdown/>}

        </header>
    )
}

export default Header;