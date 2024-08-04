import { Link } from 'react-router-dom';
import './Styles.css';

function Header(){
    return (
        <header>
            <h2>MyGarage</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/characters">Personagens</Link>
                <Link to="/garages">Garagens</Link>
                <Link to="/vehicles">Veículos</Link>
            </div>
        </header>
    )
}

export default Header;