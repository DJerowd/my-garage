import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './Styles.css';

function Form({users}) {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [user, setUser] = useState({
        email: 'administrador@email.com',
        password: 'adm123'
    });

    // FUNÇÃO PARA ALTERAR DADOS DO USUÁRIO.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    // FUNÇÃO PARA REALIZAR O LOGIN DE USUÁRIO.
    const handleLogin = (e) => {
        const foundUser = users.find(u => u.email === user.email);
        e.preventDefault();
        if (!foundUser) {
            toast.error('E-mail não encontrado');
            setError('E-mail não encontrado');
            return;
        }
        if (foundUser.password !== user.password) {
            toast.error('Senha incorreta!');
            setError('Senha incorreta!');
            return;
        }

        const loggedInUser = JSON.stringify({
            id: foundUser.id,
            role: foundUser.role,
            username: foundUser.username,
            email: foundUser.email,
            password: foundUser.password
        });
        localStorage.setItem('loggedInUser', loggedInUser);
        
        setError('');
        navigate('/');
    };


  return (
    <form onSubmit={handleLogin}>

        <label>
            E-mail
            <input type="email" name="email" onChange={handleChange} value={user.email} required/>
        </label>

        <label>
            Senha
            <input type="password" name="password" onChange={handleChange} value={user.password} required/>
            <div>Esqueceu a senha?</div>
        </label>
        
        {error ? <h4 className='error'>{error}</h4> : null}

        <div className='buttonsBox'>
            <button className='btnLogin' type='submit'>Fazer login</button>
            <Link to="/register">Não possui conta? Criar conta</Link>
        </div>

    </form>
  );
}

export default Form;