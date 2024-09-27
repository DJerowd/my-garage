import { React } from 'react';
import './Styles.css';
import { toast } from 'react-toastify';

function List({ garagesByCharacterId, setUpdateGarageListByCharacterId }) {

  return (
    <div>
        <h3>
            <a></a>
            <a>Slot</a>
            <a>Propriedade</a>
            <a>Ocup.</a>
            <a>Capac.</a>
        </h3>

        <ul>
            {garagesByCharacterId.map((garage, index) => (
                <div key={garage.id}>
                    <a>{index + 1}</a>
                    <a>{garage.slot}</a>
                    <a>{garage.property}</a>
                    <a>{garage.ocupation}</a>
                    <a>{garage.capacity}</a>
                </div>
            ))}
        </ul>
    </div>
  );
}

export default List;