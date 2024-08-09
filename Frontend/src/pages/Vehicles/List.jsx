import { React } from 'react';
import cars from '../../database/cars.json';

function List() {
  
  return (
    <div>
      <h3>
        <span1>Veículo</span1>
        <span2>Cores do Veículo</span2>
        <span3>Placa</span3>
        <span4>Rodas</span4>
      </h3>
      <ul>
          {cars.map(car => (
          <div key={cars.id}>
              <span1>{`${car.manufacturer} ${car.model}`}</span1>
              <span2>
              {['primaryColor', 'secundaryColor', 'pearlescentColor', 'interiorColor', 'dashboardColor', 'rimColor'].map(colorKey => (
                <div
                  key={colorKey}
                  className="color-block"
                  style={{ backgroundColor: car[colorKey], border: '1px outset #fff', marginBlock: '2px' }}
                />
              ))}
              </span2>
              <span3>{`${car.plate}`}</span3>
              <span4>{`${car.rimsType} ${car.rims}`}</span4>
          </div>
          ))}
      </ul>
    </div>
  );
}

export default List;