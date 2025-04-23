import { getLoggedInUser } from '../../utils/auth.js';
import { Link, useLocation } from 'react-router-dom';
import { IoHome, IoSettingsSharp, IoBody, IoCar, IoLogOut, IoLogIn, IoPersonAdd } from "react-icons/io5";
import { FaUser, FaWarehouse } from "react-icons/fa6";

import '../../Styles/components/dropdown.css';

function Menu(){
    const loggedInUser = getLoggedInUser();
    const location = useLocation();

    const logoff = () => {
        localStorage.setItem('loggedInUser', null);
    };

    if (!loggedInUser) {
        return (
            <div></div>
        );
    }

    return (
        <div className='dropdown'>
            {/* {loggedInUser.role == 1 ? 
                <Link style={{color:"#FF0000"}} to="/restrict_area">*Area Restrita*</Link>
            : 
                <></>
            } */}
            <Link to="/home" className={(location.pathname === "/home") ? 'active' : ''}>
                <IoHome className='iconMenu'/>Home
            </Link>
            <Link to="/user_profile" className={(location.pathname === "/user_profile") ? 'active' : ''}>
                <FaUser className='iconMenu'/>Perfil
            </Link>
            <Link to="/settings" className={(location.pathname === "/settings") ? 'active' : ''}>
                <IoSettingsSharp className='iconMenu'/>Configurações
            </Link>
            <Link to="/characters" className={(location.pathname === "/characters") ? 'active' : ''}>
                <IoBody className='iconMenu'/>Personagens
            </Link>
            <Link to="/garages" className={(location.pathname === "/garages") ? 'active' : ''}>
                <FaWarehouse className='iconMenu'/>Garagens
            </Link>
            <Link to="/vehicles" className={(location.pathname === "/vehicles") ? 'active' : ''}>
                <IoCar className='iconMenu'/>Veículos
            </Link>
            <Link to="/signin" onClick={logoff} >
                <IoLogOut className='iconMenu'/>Sair
            </Link>
        </div>
    )
}

export default Menu;