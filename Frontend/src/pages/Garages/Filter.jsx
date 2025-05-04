import { React, useState } from 'react';

import '../../Styles/layout.css';
import '../../Styles/grid.css';

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
    <div className="filter">
      <select className='list-select' name="character" onChange={handleChange} value={character}>
        <option value="0">SELECIONE UM PERSONAGEM</option>
        {charactersByUserId.map((character, index) => (
          <option key={character.value} value={JSON.stringify(character)}>
            {index + 1} - {character.username}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;