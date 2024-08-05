import { React, useState } from 'react';
import './Styles.css';

function Form({ onAdd }) {
  const [username, setUsername] = useState('');
  const [reputation, setReputation] = useState(1);
  const [createDate, setCreateDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      username,
      reputation,
      createDate,
    });
    setUsername('');
    setReputation(1);
    setCreateDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Nome: 
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /><br/>
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
    </form>
  );
}

export default Form;