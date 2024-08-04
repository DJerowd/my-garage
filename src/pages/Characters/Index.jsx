import { React, useState } from 'react';
import Header from '../../components/Header';
import './Styles.css';
import { CharacterProvider } from './Context';

function Personagem({ onAdd }) {
  const [nome, setNome] = useState('');
  const [reputation, setReputation] = useState(1);
  const [createDate, setCreateDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      nome,
      reputation,
      createDate,
    });
    setNome('');
    setReputation(1);
    setCreateDate('');
  };

  return (
    <div className='container'>
      <Header />
      <div className='content'>

        <form className='form' onSubmit={handleSubmit}>
          <label>
            Nome: 
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required /><br/>
          </label>
          <label>
            Nível:
            <input type="number" value={reputation} onChange={(e) => setReputation(e.target.value)} min="1" max={"9999"} required /><br/>
          </label>
          <label>
            Data de Criação:
            <input type="date" value={createDate} onChange={(e) => setCreateDate(e.target.value)} required /><br/><br/>
          </label>
          <button type="submit">Adicionar Novo Personagem</button>
          <CharacterProvider/>
        </form>
        
        <aside className='list'>
          <div>RP - Nome - Data de Criação</div>
          <div>{reputation} {nome} {createDate}</div>
        </aside>

      </div>
    </div>
  );
}

export default Personagem;