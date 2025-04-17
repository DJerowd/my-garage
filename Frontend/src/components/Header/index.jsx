import { useState } from 'react';
import { getLoggedInUser } from '../../utils/auth.js';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaSquareGithub, FaSquareYoutube  } from "react-icons/fa6";
import { FaHome, FaCar, FaClipboardList, FaUser, FaBars } from "react-icons/fa";
import logo from '../../assets/icon.png';
import Menu from '../Menu';

import '../../Styles/components/header.css'

function Header(){
    const loggedInUser = getLoggedInUser();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    if (!loggedInUser) {
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
                        <Link to="/signin">Entrar</Link>
                        <Link to="/signup">Cadastrar</Link>
                    </div>
                </main>
                <section>
                    <button disabled ><h3 className='menuIcon'>Menu<FaBars className='headerIcon'/></h3></button>
                </section>

                {showMenu && <Menu/>}

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
                <button onClick={toggleMenu}><h3 className='menuIcon'>Menu<FaBars className='headerIcon'/></h3></button>
            </section>

            {showMenu && <Menu/>}

        </header>
    )
}

export default Header;