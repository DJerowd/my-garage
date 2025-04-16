import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';

import useCharactersByUserId from '../../hooks/Characters/useCharactersByUserId.jsx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form.jsx';
import List from './List.jsx';

import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/layout.css';
import '../../Styles/grid.css';

function Personagem() {
  const loggedInUser = getLoggedInUser();
  const { charactersByUserId, setUpdateCharactersListByUserId } = useCharactersByUserId();

  if (!loggedInUser) {
    return (
      <div className='container'>
        <Header />
        <div className='content'>
          Faça login para acessar essa página.
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className='container'>
      <Header />
      <div className='content content-grid'>

        <main>
          <h2>Adicionar Personagem:</h2>
          <Form 
            setUpdateCharactersListByUserId={setUpdateCharactersListByUserId}
            loggedInUser={loggedInUser}
          />
        </main>

        <aside>
          <List 
            charactersByUserId={charactersByUserId}
            setUpdateCharactersListByUserId={setUpdateCharactersListByUserId}
          />
        </aside>

      </div>
      <ToastContainer 
        className='toastContainer' 
        autoClose={3000} 
        limit={7}
        hideProgressBar={true}
        position="bottom-left" 
        theme="dark"
      />
      <Footer/>
    </div>
  );
}

export default Personagem;