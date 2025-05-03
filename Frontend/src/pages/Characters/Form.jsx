import { React, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';

import axios from 'axios';

import '../../Styles/layout.css';
import '../../Styles/grid.css';
import '../../Styles/responsive.css';

function Form({ setUpdateCharactersListByUserId, loggedInUser, setShowAdd }) {
  const [character, setCharacter] = useState({
    username: '',
    reputation: 0,
    createDate: ''
  });

  
  // FUNÇÃO PARA INSERIR DADOS DO PERSONAGEM NA VARIAVEL.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!character.username || !character.reputation || !character.createDate) {
      toast.warn(`Todos os campos devem ser preenchidos!`);
    } else {
      await axios
      .post("http://localhost:8800/characters", {
        userId: loggedInUser.id,
        username: character.username,
        reputation: character.reputation,
        createDate: character.createDate,
      })
      .then(({ data }) => {
        setUpdateCharactersListByUserId(prevState => !prevState);
        toast.success(`Personagem ${character.username} ${character.reputation} ${character.createDate} salvo!`);
      })
      .catch(({ data }) => 
        toast.error(`Erro ao salvar personagem ${data}!`
      ));
      setCharacter({
        username: '',
        reputation: 0,
        createDate: ''
      });
      setShowAdd(false);
    }
  };

  return (
    <div className='content-modal'>
      <form onSubmit={handleSubmit}>

        <button type='button' className='close-btn' onClick={() => setShowAdd(false)}><IoClose/></button>

        <h2>Adicionar Personagem:</h2>
        
        <label>
            RP:
            <input className='list-input' type="number" value={character.reputation} onChange={(e) => setCharacter({ ...character, reputation: e.target.value })} min="1" max={"9999"} />
        </label>

        <label>
            Nome: 
            <input className='list-input' type="text" value={character.username} onChange={(e) => setCharacter({ ...character, username: e.target.value })} />
        </label>

        <label>
            Data de Criação:
            <input className='list-input' type="date" value={character.createDate} onChange={(e) => setCharacter({ ...character, createDate: e.target.value })} />
        </label>

        <button className='form-btn' type="submit">Salvar Personagem</button>
      </form>
    </div>
  );
}

export default Form;