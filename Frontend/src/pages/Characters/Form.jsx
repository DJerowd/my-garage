import { React, useState } from 'react';
import './Styles.css';

function Form() {
  const [username, setUsername] = useState('');
  const [reputation, setReputation] = useState(1);
  const [createDate, setCreateDate] = useState('');

  // Função de registrar personagem
  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Personagem salvo!`);

    setUsername('');
    setReputation(0);
    setCreateDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            Nome: 
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
            RP:
            <input type="number" value={reputation} onChange={(e) => setReputation(e.target.value)} min="1" max={"9999"} required />
        </label>
        <label>
            Data de Criação:
            <input type="date" value={createDate} onChange={(e) => setCreateDate(e.target.value)} required />
        </label>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '8px'}}>
          <button style={{paddingInline: '4px'}} type="submit">Adicionar Novo Personagem</button>
        </div>
    </form>
  );
}

export default Form;