import { React } from 'react';
import { getLoggedInUser } from '../../utils/auth.js';
import { FaStar } from "react-icons/fa6";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Styles.css';

function Profile() {
  const loggedInUser = getLoggedInUser();

  if (!loggedInUser) {
    return (
    <div className='container-profile'>
      <Header />
      <div className='content-profile'>
        Faça login para acessar essa página.
      </div>
      <Footer/>
    </div>
    );
  }

  return (
    <div className='container-profile'>
      <Header />
      <main className='content-profile'>

        <div>
          <a className='banner'></a>
          
          <h2>Nome: {loggedInUser.username} {loggedInUser.role == 1 ? <FaStar /> : <FaStar style={{display: 'none'}}/>}</h2>
          <h3>@{loggedInUser.id}</h3>
          <h3>Email: {loggedInUser.email}</h3>
          <h3>Senha: {loggedInUser.password}</h3>
        </div>

      </main>

      <Footer/>
    </div>
  );
}

export default Profile;