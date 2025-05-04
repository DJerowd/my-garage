import { React, useEffect, useState } from 'react';

import '../../Styles/layout.css';
import '../../Styles/grid.css';
import '../../Styles/responsive.css';

function Filter({ setIds, vehiclesByGarageId, setGarageLimit, charactersByUserId, garagesByCharacterId, setUpdateGarageListByCharacterId, setGarageByCharacterId, setUpdateVehicleListByGarageId, setVehicleByGarageId }) {
  const [ character, setCharacter ] = useState(0);
  const [ garage, setGarage ] = useState(0);

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

  // DEFINE SE A GARAGEM ATINGIU O LIMITE OU NÃO
  useEffect(() => {
    if (vehiclesByGarageId.length == garage.capacity) {
      setGarageLimit(true);
    } else {
      setGarageLimit(false);
    }
  }, [vehiclesByGarageId]);
  
  return (
    <div className="filter">
      <select className='list-select' name="character" onChange={handleChange}>
        <option value="0">SELECIONE UM PERSONAGEM</option>
        {charactersByUserId.map((character, index) => (
          <option key={character.value} value={JSON.stringify(character)}>
            {index + 1} - {character.username}
          </option>
        ))}
      </select>

      <select className='list-select' name="garage" onChange={handleChange} disabled={!character}>
        <option value="0">SELECIONE UMA GARAGEM</option>
        {garagesByCharacterId.map((garage, index) => (
          <option key={garage.value} value={JSON.stringify(garage)}>
            {index + 1} - {garage.property}
          </option>
        ))}
      </select>

      <a>{garage.ocupation !== undefined ? `${vehiclesByGarageId.length}/${garage.capacity}` : '0/00'}</a>
    </div>
  );
}

export default Filter;