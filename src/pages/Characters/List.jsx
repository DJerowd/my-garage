import React from 'react';
import { useCharacter } from './Context';

function List() {
  const { characters, deleteCharacter, toggleAtivo } = useCharacter

  return (
    <ul>
      {characters.map(character => (
        <li key={character.id}>
          {character.nome} - Nível: {character.reputation} - Data de Criação: {character.createDate}
          <button onClick={() => toggleAtivo(character.id)}>
            {character.ativo ? 'Desativar' : 'Ativar'}
          </button>
          <button onClick={() => deleteCharacter(character.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}

export default List;