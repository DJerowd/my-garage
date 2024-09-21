import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';
import 'react-toastify/dist/ReactToastify.css';
import useCharacters from '../../hooks/useCharacters';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form';
import List from './List';
import './Styles.css';

function Personagem() {
  const { characters, setUpdateCharacterList } = useCharacters();
  const loggedInUser = getLoggedInUser();

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
          <div className='form-character'>
            <Form 
              characters={characters} 
              setUpdateCharacterList={setUpdateCharacterList} 
            />
          </div>
        </main>

        <aside className='aside-character'>
          <div className='list-character'>
            <List 
              characters={characters} 
              setUpdateCharacterList={setUpdateCharacterList}
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