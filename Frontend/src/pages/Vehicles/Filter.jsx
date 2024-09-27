import { React, useState } from 'react';

function Filter({ setIds, charactersByUserId, garagesByCharacterId, setUpdateGarageListByCharacterId, setGarageByCharacterId, setUpdateVehicleListByGarageId, setVehicleByGarageId }) {
  const [ character, setCharacter ] = useState([]);
  const [ garage, setGarage ] = useState([]);

  // ATUALIZA A LISTA DE VEÍCULOS DE ACORDO COM A GARAGEM SELECIONADA.
  const handleChange = (e) => {
    const { name, value } = e.target;
    const selected = JSON.parse(e.target.value);

    if (name === 'character') {
      setCharacter(selected);
      setGarage(0);
      setGarageByCharacterId(selected.id);
      setVehicleByGarageId(0);
      if (value == 0) {
        setIds({
          characterId: "",
          garageId: ""
        });
      } else {
        setIds({
          characterId: selected.id,
          garageId: ""
        });
      }
    }

    if (name === 'garage') {
      setGarage(selected);
      setVehicleByGarageId(selected.id);
      if (value == 0) {
        setIds({
          characterId: character.id,
          garageId: ""
        });
      } else {
        setIds({
          characterId: character.id,
          garageId: selected.id
        });
      }
    }

    setUpdateGarageListByCharacterId(prevState => !prevState);
    setUpdateVehicleListByGarageId(prevState => !prevState);
  };
  
  return (
    <div>
      Personagem:
      <select name="character" onChange={handleChange}>
        <option value="0">Selecione um personagem</option>
        {charactersByUserId.map((character, index) => (
          <option key={character.value} value={JSON.stringify(character)}>
            {index + 1} - {character.username}
          </option>
        ))}
      </select>

      Garagem:
      <select name="garage" onChange={handleChange}>
        <option value="0">Selecione uma garagem</option>
        {garagesByCharacterId.map((garage, index) => (
          <option key={garage.value} value={JSON.stringify(garage)}>
            {index + 1} - {garage.property}
          </option>
        ))}
      </select>

      <a>{garage.ocupation !== undefined ? `${garage.ocupation}/${garage.capacity}` : '0/00'}</a>
      {JSON.stringify(garagesByCharacterId[(garage.id - 1)])}

    </div>
  );
}

export default Filter;