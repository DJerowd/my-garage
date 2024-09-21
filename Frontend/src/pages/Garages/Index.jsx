import { React, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';
import 'react-toastify/dist/ReactToastify.css';
import useGaragesByCharacterId from '../../hooks/useGaragesByCharacterId';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from './Filter';
import Form from './Form';
import './Styles.css';

function Garagem() {
  const [ selectedCharacter, setSelectedCharacter ] = useState([]);
  const { garagesByCharacterId, setUpdateGarageListByCharacterId, setGarageByCharacterId } = useGaragesByCharacterId();
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
    <div className='container-garage'>
      <Header />

      <div className='content-garage'>
        <div className='filter-garage'><Filter setGarageByCharacterId={setGarageByCharacterId} setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId} /></div>
        <div className='list-garage'><Form garagesByCharacterId={garagesByCharacterId} setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId} /></div>
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