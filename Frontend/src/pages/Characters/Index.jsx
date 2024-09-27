import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';

import useCharactersByUserId from '../../hooks/Characters/useCharactersByUserId.jsx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form.jsx';
import List from './List.jsx';

import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

function Personagem() {
  const loggedInUser = getLoggedInUser();
  const { charactersByUserId, setUpdateCharactersListByUserId } = useCharactersByUserId();

  if (!loggedInUser) {
    return (
      <div className='container-car'>
        <Header />
        <div className='content-car'>
          Faça login para acessar essa página.
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className='container-character'>
      <Header />
      <div className='content-character'>

        <main className='main-character'>
          <div className='title-character'>
            Adicionar Novo Personagem:
          </div>

          <div className='form-character'>
            <Form 
              setUpdateCharactersListByUserId={setUpdateCharactersListByUserId}
              loggedInUser={loggedInUser}
            />
          </div>
        </main>

        <aside className='aside-character'>
          <div className='list-character'>
            <List 
              charactersByUserId={charactersByUserId}
              setUpdateCharactersListByUserId={setUpdateCharactersListByUserId}
            />
          </div>
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