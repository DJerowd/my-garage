import { React, useState } from 'react';
import garages from '../../database/garages.json';

function Filter() {
    const [garage, setGarage] = useState([]);

    const handleChange = (e) => {
        setGarage(e.target.value);
      };
  
  return (
    <div>
      <h3>
        Garagem:
        <select name="garage" onChange={handleChange} value={garage}>
          <option value="">Selecione uma garagem</option>
          {garages.map(garage => (
            <option key={garage.value} value={garage.id}>{garage.property} {garage.capacity}/{garage.ocupation}</option>
          ))}
        </select>
      </h3>
    </div>
  );
}

export default Filter;