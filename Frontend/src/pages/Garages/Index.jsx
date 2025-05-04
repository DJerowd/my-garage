import { React, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

import useCharactersByUserId from '../../hooks/Characters/useCharactersByUserId.jsx';
import useGaragesByCharacterId from '../../hooks/Garages/useGaragesByCharacterId.jsx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/Index.jsx';
import Pagination from '../../components/Pagination/Index.jsx';
import Filter from './Filter.jsx';
import Form from './Form.jsx';
import List from './List.jsx';

import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/layout.css';
import '../../Styles/grid.css';

function Garagem() {
  const loggedInUser = getLoggedInUser();
  const { charactersByUserId, setUpdateCharactersListByUserId, loading:loadingCharacters , errors:errorsCharacters } = useCharactersByUserId();
  const { garagesByCharacterId, setUpdateGarageListByCharacterId, setGarageByCharacterId, loading:loadingGarages, errors:errorsGarages } = useGaragesByCharacterId();
  const [ids, setIds] = useState({
    characterId: ""
  });

  // PAGINAÇÃO
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // MODAL DE ADICIONAR
  const [showAdd, setShowAdd] = useState(false);

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

  // TELA DE LOADING
  if (loadingCharacters || loadingGarages) { 
    return (
      <div className='container'>
        <Header />
          <Loading/>
        <Footer/>
      </div> 
    ); 
  }

  return (
    <div className='container'>
      <Header />
      <div className='content content-display'>

        <main>

          <h2>
            Garagens:
            <button className="add-btn" onClick={() => setShowAdd(true)}>
              <span>Novo</span>
              <FaPlus />
            </button>
          </h2>

          <Filter 
            setIds={setIds}
            charactersByUserId={charactersByUserId}
            setGarageByCharacterId={setGarageByCharacterId} 
            setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId} 
          />

          <List
            garagesByCharacterId={garagesByCharacterId}
            currentPage={currentPage} 
            itemsPerPage={itemsPerPage}
          />

          <Pagination 
            itens={garagesByCharacterId} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            itemsPerPage={itemsPerPage} 
          />
        </main>

        {showAdd &&
          <Form 
            ids={ids}
            garagesByCharacterId={garagesByCharacterId} 
            setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId} 
            setShowAdd={setShowAdd}
          />
        }
      
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