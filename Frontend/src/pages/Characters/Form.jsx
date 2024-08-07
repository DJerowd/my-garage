import { React, useState } from 'react';
import './Styles.css';

function Form() {
  const [username, setUsername] = useState('');
  const [reputation, setReputation] = useState(1);
  const [createDate, setCreateDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setUsername('');
    setReputation(1);
    setCreateDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <label className='form-character-imput'>
            Nome: 
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label className='form-character-imput'>
            RP:
            <input type="number" value={reputation} onChange={(e) => setReputation(e.target.value)} min="1" max={"9999"} required />
        </label>
        <label className='form-character-imput'>
            Data de Criação:
            <input type="date" value={createDate} onChange={(e) => setCreateDate(e.target.value)} required />
        </label>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '6px'}}>
          <button type="submit">Adicionar Novo Personagem</button>
        </div>
    </form>
  );
}

export default Form;