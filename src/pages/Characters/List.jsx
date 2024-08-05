import { React, useEffect, useState } from 'react';
import characters from '../../data/characters.json';

function List() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('../../data/characters.json')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Erro ao carregar os jogadores:', error));
  }, []);

  return (
    <div>
      <h2>Personagens:</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {character.rp} - {character.username} - Criado em: {character.dataCriacao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;