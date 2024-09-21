import { Link } from 'react-router-dom';
// import { getLoggedInUser } from '../../utils/auth.js';
import './Styles.css';

function Menu(){
    // const loggedInUser = getLoggedInUser();

    return (
        <div className='menu'>
            {/* {loggedInUser.role == 1 ? <h4><Link to="/restrict_area">Area Restrita</Link></h4> : <></>} */}
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/characters">Personagens</Link></h4>
            <h4><Link to="/garages">Garagens</Link></h4>
            <h4><Link to="/vehicles">Veículos</Link></h4>
            <h4><Link to="/user_profile">Perfil</Link></h4>
            <h4><Link to="/settings">Configurações</Link></h4>
            <h4><Link to="/login">Sair</Link></h4>
        </div>
    )
}

export default Menu;