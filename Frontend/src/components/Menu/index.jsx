import { Link } from 'react-router-dom';
import { getLoggedInUser } from '../../utils/auth.js';
import { IoHome, IoSettingsSharp, IoBody, IoCar, IoLogOut } from "react-icons/io5";
import { FaUser, FaWarehouse } from "react-icons/fa6";

import '../../Styles/components/dropdown.css';

function Menu(){
    const loggedInUser = getLoggedInUser();

    return (
        <div className='dropdown'>
            {/* {loggedInUser.role == 1 ? 
                <Link style={{color:"#FF0000"}} to="/restrict_area">*Area Restrita*</Link>
            : 
                <></>
            } */}
                <Link to="/home"><IoHome className='iconMenu'/>Home</Link>

                <Link to="/user_profile"><FaUser className='iconMenu'/>Perfil</Link>

                <Link to="/settings"><IoSettingsSharp className='iconMenu'/>Configurações</Link>

                <Link to="/characters"><IoBody className='iconMenu'/>Personagens</Link>

                <Link to="/garages"><FaWarehouse className='iconMenu'/>Garagens</Link>

                <Link to="/vehicles"><IoCar className='iconMenu'/>Veículos</Link>

                <Link to="/login"><IoLogOut className='iconMenu'/>Sair</Link>

        </div>
    )
}

export default Menu;