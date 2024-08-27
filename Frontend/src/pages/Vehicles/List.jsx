import { React } from 'react';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';

function List({ vehicles, setUpdateVehicleList, selectedGarage }) {
  
  // FUNÇÃO PARA EDITAR O VEÍCULO.
  const handleEdit = (id) => {
    toast.success(`Veículo ${id} editado!`);
  };

  // FUNÇÃO PARA EXCLUIR O VEICULO.
  const handleDelete = async (id) => {
    const confirm = window.confirm("Tem certeza de que deseja excluir este veículo? Todas as informações serão perdidas.");
    if (!confirm) {
      toast.error(`Exclusão cancelada!`);
      return;
    } else {
      await axios
      .delete("http://localhost:8800/vehicles/" + id)
      .then(({ data }) => {
        setUpdateVehicleList(prevState => !prevState);
        toast.success(`Veículo ${id} excluido!`);
      })
      .catch(({ data }) => toast.error(data)
      );
    }
  };

  return (
    <div>
      <h3>
        <span></span>
        <span1>Veículo</span1>
        <span2>Cores do Veículo</span2>
        <span3>Placa</span3>
        <span4>{selectedGarage}</span4>
      </h3>
      <ul>
          {vehicles.map((vehicle, index) => (
          <div key={vehicle.id}>
              <span>{index + 1}</span>
              <span1>{`${vehicle.manufacturer} ${vehicle.model}`}</span1>
              <span2>
              {['primaryColor', 'secundaryColor', 'pearlescentColor', 'interiorColor', 'dashboardColor', 'rimColor'].map(colorKey => (
                <colorBlock
                  key={colorKey}
                  className="colorblock"
                  style={{ backgroundColor: vehicle[colorKey]}}
                />
              ))}
              </span2>
              <span3>{`${vehicle.plate}`}</span3>
              <span4>
                <button style={{backgroundColor: '#0000', borderColor: '#0000'}} onClick={() => handleEdit(vehicle.id)}>
                  <FaRegEdit style={{width: '50%', height: '50%' }}/>
                </button>
                <button style={{backgroundColor: '#0000', borderColor: '#0000'}} onClick={() => handleDelete(vehicle.id)}>
                  <FaTrash style={{width: '50%', height: '50%' }}/>
                </button>
              </span4>
          </div>
          ))}
      </ul>
    </div>
  );
}

export default List;