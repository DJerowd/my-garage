import { React, useState } from 'react';

function Filter({ setIds, charactersByUserId, setGarageByCharacterId, setUpdateGarageListByCharacterId }) {
  const [ character, setCharacter ] = useState([]);

  const handleChange = (e) => {
    const selected = JSON.parse(e.target.value);
    setCharacter(e.target.value);
    setGarageByCharacterId(selected.id)
    setUpdateGarageListByCharacterId(prevState => !prevState);
    setIds({
      characterId: selected.id
    });
  };

  return (
    <div>
      <h3>
        Personagem:

        <select name="character" onChange={handleChange} value={character}>
          <option value="0">Selecione um personagem</option>
          {charactersByUserId.map((character, index) => (
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