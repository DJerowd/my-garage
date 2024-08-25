import { React, useState } from 'react';
import useCharacters from '../../hooks/useCharacters';

function Filter() {
  const { characters, setUpdateCharacterList } = useCharacters();
  const [ character, setCharacter ] = useState([]);

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  return (
    <div>
      <h3>
        Personagem: {character}

        <select name="character" onChange={handleChange} value={character}>
          <option value="">Selecione um personagem</option>
          {characters.map((character, index) => (
            <option key={character.value} value={character.id}>
              {index + 1} - {character.username}
            </option>
          ))}
        </select>
      </h3>
    </div>
  );
}

export default Filter;