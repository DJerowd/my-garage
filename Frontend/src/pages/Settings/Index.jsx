import { React } from 'react';
import { getLoggedInUser } from '../../utils/auth.js';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../Styles/layout.css';
import '../../Styles/settings.css';

function Settings() {
  const loggedInUser = getLoggedInUser();

  if (!loggedInUser) {
    return (
    <div className='container'>
      <Header />
      <div className='content content-settings'>

      <main>
        Faça login para acessar essa página.
      </main>

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