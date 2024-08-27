import { React, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Styles.css';

function Form({ characters, setUpdateCharacterList }) {
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
        username: character.username,
        reputation: character.reputation,
        createDate: character.createDate,
      })
      .then(({ data }) => {
        setUpdateCharacterList(prevState => !prevState);
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
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
          RP:
          <input type="number" value={character.reputation} onChange={(e) => setCharacter({ ...character, reputation: e.target.value })} min="1" max={"9999"} />
      </label>

      <label>
          Nome: 
          <input type="text" value={character.username} onChange={(e) => setCharacter({ ...character, username: e.target.value })} />
      </label>

      <label>
          Data de Criação:
          <input type="date" value={character.createDate} onChange={(e) => setCharacter({ ...character, createDate: e.target.value })} />
      </label>

      <a style={{justifyContent: 'center', marginTop: '10px', marginBottom: '8px'}}>
        <button style={{paddingInline: '4px'}} type="submit">Adicionar Novo Personagem</button>
      </a>
    </form>
  );
}

export default Form;