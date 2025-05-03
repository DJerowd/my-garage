import { React, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

import useCharactersByUserId from '../../hooks/Characters/useCharactersByUserId.jsx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/Index.jsx';
import Pagination from '../../components/Pagination/Index.jsx';
import Form from './Form.jsx';
import List from './List.jsx';
import Edit from './Edit.jsx';

import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/layout.css';
import '../../Styles/grid.css';
import '../../Styles/responsive.css';

function Personagem() {
  const { charactersByUserId, setUpdateCharactersListByUserId, loading, errors } = useCharactersByUserId();
  const loggedInUser = getLoggedInUser();

  // PAGINAÇÃO
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // MODAL DE ADICIONAR
  const [showAdd, setShowAdd] = useState(false);

  // MODAL DE EDIÇÃO
  const [showEdit, setShowEdit] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState(null);

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
  if (loading) { 
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
            Personagens:
            <button className="add-btn" onClick={() => setShowAdd(true)}>
              <span>Novo</span>
              <FaPlus />
            </button>
          </h2>

          <List 
            charactersByUserId={charactersByUserId}
            setUpdateCharactersListByUserId={setUpdateCharactersListByUserId}
            currentPage={currentPage} 
            itemsPerPage={itemsPerPage}
            setShowAdd={setShowAdd}
            setShowEdit={setShowEdit}
            setEditingCharacter={setEditingCharacter}
          />

          <Pagination 
            itens={charactersByUserId} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            itemsPerPage={itemsPerPage} 
          />
        </main>

        {showAdd &&
          <Form 
            setUpdateCharactersListByUserId={setUpdateCharactersListByUserId} 
            loggedInUser={loggedInUser} 
            setShowAdd={setShowAdd} 
          />
        }

        {showEdit && 
          <Edit 
            setUpdateCharactersListByUserId={setUpdateCharactersListByUserId} 
            setShowEdit={setShowEdit} 
            editingCharacter={editingCharacter} 
            setEditingCharacter={setEditingCharacter}
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
}

export default Personagem;