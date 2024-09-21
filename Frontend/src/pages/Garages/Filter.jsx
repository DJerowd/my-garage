import { React, useState } from 'react';
import useCharacters from '../../hooks/useCharacters';

function Filter({ setGarageByCharacterId, setUpdateGarageListByCharacterId }) {
  const { characters, setUpdateCharacterList } = useCharacters();
  const [ character, setCharacter ] = useState([]);

  const handleChange = (e) => {
    const selectedCharacter = JSON.parse(e.target.value);
    setCharacter(e.target.value);
    setGarageByCharacterId(selectedCharacter.id)
    setUpdateGarageListByCharacterId(prevState => !prevState);
  };

  return (
    <div>
      <h3>
        Personagem:

        <select name="character" onChange={handleChange} value={character}>
          <option value="0">Selecione um personagem</option>
          {characters.map((character, index) => (
            <option key={character.value} value={JSON.stringify(character)}>
              {index + 1} - {character.username}
            </option>
          ))}
        </select>
      </h3>
    </div>
  );
}

export default Filter;