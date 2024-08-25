import { React, useState } from 'react';
import useGarages from '../../hooks/useGarages';

function Filter() {
  const { garages, setUpdateGarageList } = useGarages();
  const [ garage, setGarage ] = useState([]);

  const handleChange = (e) => {
    const selectedGarage = JSON.parse(e.target.value);
    setGarage(selectedGarage);
  };
  
  return (
    <div>
      <h3>
        Garagem:

        <select name="garage" onChange={handleChange}>
          <option value="">Selecione uma garagem</option>
          {garages.map((garage, index) => (
            <option key={garage.value} value={JSON.stringify(garage)}>
              {index + 1} - {garage.property}
            </option>
          ))}
        </select>

        <a>{garage.ocupation} / {garage.capacity}</a>
      </h3>
    </div>
  );
}

export default Filter;