import { React } from 'react';
import { getLoggedInUser } from '../../utils/auth.js';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../Styles/layout.css';
import '../../Styles/settings.css';

function Settings() {
  const loggedInUser = getLoggedInUser();

  // TELA LOGIN NECESSÁRIO
  if (!loggedInUser) {
    return (
      <div className='container'>
        <Header />
        <div className='content'>
          <h2>Faça <Link to="/signin">login</Link> para acessar essa página.</h2>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className='container'>
      <Header />
      <div className='content content-settings'>

        <main>
          <h2>Configurações:</h2>
        </main>

      </div>
      <Footer/>
    </div>
  );
}

export default Settings;