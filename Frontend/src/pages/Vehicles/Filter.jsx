import { React, useState } from 'react';

function Filter({ garages, setSelectedGarage }) {
  const [ garage, setGarage ] = useState([]);

  const handleChange = (e) => {
    const selectedGarage = JSON.parse(e.target.value);
    setGarage(selectedGarage);
    setSelectedGarage(selectedGarage.id)
  };
  
  return (
    <div>
      Garagem:
      <select name="garage" onChange={handleChange}>
        <option value="">Selecione uma garagem</option>
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