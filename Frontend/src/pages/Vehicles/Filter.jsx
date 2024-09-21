import { React, useState } from 'react';

function Filter({ garages, setUpdateVehicleListByGarageId, setVehicleByGarageId }) {
  const [ character, setCharacter ] = useState([]);
  const [ garage, setGarage ] = useState([]);

  // ATUALIZA A LISTA DE VEÍCULOS DE ACORDO COM A GARAGEM SELECIONADA.
  const handleChange = (e) => {
    const selectedGarage = JSON.parse(e.target.value);
    setGarage(selectedGarage);
    setVehicleByGarageId(selectedGarage.id)
    setUpdateVehicleListByGarageId(prevState => !prevState);
  };
  
  return (
    <div>
      Personagem:
      <select name="character" onChange={handleChange}>
        <option value="0">Selecione um personagem</option>
        {garages.map((character, index) => (
          <option key={character.value} value={JSON.stringify(character)}>
            {index + 1} - {character.property}
          </option>
        ))}
      </select>

      Garagem:
      <select name="garage" onChange={handleChange}>
        <option value="0">Selecione uma garagem</option>
        {garages.map((garage, index) => (
          <option key={garage.value} value={JSON.stringify(garage)}>
            {index + 1} - {garage.property}
          </option>
        ))}
      </select>

      <a>{garage.ocupation !== undefined ? `${garage.ocupation}/${garage.capacity}` : '0/00'}</a>
    </div>
  );
}

export default Filter;