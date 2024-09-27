import { React, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';

import useCharactersByUserId from '../../hooks/Characters/useCharactersByUserId.jsx';
import useGaragesByCharacterId from '../../hooks/Garages/useGaragesByCharacterId.jsx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from './Filter.jsx';
import Form from './Form.jsx';
import List from './List.jsx';

import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

function Garagem() {
  const loggedInUser = getLoggedInUser();
  const { charactersByUserId, setUpdateCharactersListByUserId } = useCharactersByUserId();
  const { garagesByCharacterId, setUpdateGarageListByCharacterId, setGarageByCharacterId } = useGaragesByCharacterId();
  const [ids, setIds] = useState({
    characterId: ""
  });

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
    <div className='container-garage'>
      <Header />
      <div className='content-garage'>


      <main className='main-garage'>
        <div className='title-garage'>
          Adicionar Garagens:
        </div>

        <div className='form-garage'>
          <Form 
            ids={ids}
            garagesByCharacterId={garagesByCharacterId} 
            setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId} 
          />
        </div>

      </main>

      <aside className='aside-garage'>
        <div className='filter-garage'>
          <Filter 
            setIds={setIds}
            charactersByUserId={charactersByUserId}
            setGarageByCharacterId={setGarageByCharacterId} 
            setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId} 
          />
        </div>

        <div className='list-garage'>
          <List
            garagesByCharacterId={garagesByCharacterId}
            setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId}
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
};

export default Garagem;