import { React } from 'react';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';

function List({ vehiclesByGarageId, setUpdateVehicleListByGarageId }) {
  
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
        setUpdateVehicleListByGarageId(prevState => !prevState);
        toast.success(`Veículo ${id} excluido!`);
      })
      .catch(({ data }) => toast.error(data)
      );
    }
  };

  // DIRECIONAR PARA A PAGINA DE DETALHES DO VEÍCULO SELECIONADO.
  const handleVehicleDetails = (vehicle) => {
    // history.push(`/vehicle/${vehicleId}`);
    toast.warn(vehicle)
  };

  //  LISTA VAZIA PARA SER EXIBIDA QUANDO NÃO HOUVER NENHUM VEICULO NA GARAGEM SELECIONADA.
  if (JSON.stringify(vehiclesByGarageId) == '[]') {
    return (
      <div>
      <h3>
        <a></a>
        <a>Veículo</a>
        <a>Cores do Veículo</a>
        <a>Placa</a>
        <a></a>
      </h3>
      <ul>
        <div>
          <a></a>
          <a>Nenhum veículo.</a>
          <a></a>
          <a></a>
          <a></a>
        </div>
      </ul>
    </div>
    );
  }

  return (
    <div>
      <h3>
        <a></a>
        <a>Veículo</a>
        <a>Cores do Veículo</a>
        <a>Placa</a>
        <a></a>
      </h3>

      <ul>
          {vehiclesByGarageId.map((vehicle, index) => (
          <div key={vehicle.id}  onClick={() => handleVehicleDetails(JSON.stringify(vehicle))} >
              <a /*style={{background:'#f005'}}*/>{index + 1}</a>
              <a /*</div>style={{background:'#0f05'}}*/>{`${vehicle.manufacturer} ${vehicle.model}`}</a>
              <a /*style={{background:'#00f5'}}*/>
              {['primaryColor', 'secundaryColor', 'pearlescentColor', 'interiorColor', 'dashboardColor', 'rimColor'].map(colorKey => (
                <colorBlock
                  key={colorKey}
                  className="colorblock"
                  style={{ background: vehicle[colorKey]}}
                />
              ))}
              </a>
              <a /*style={{background:'#ff05'}}*/>{`${vehicle.plate}`}</a>
              <a /*style={{background:'#f0f5'}}*/>
                <button onClick={() => handleEdit(vehicle.id)}>
                  <FaRegEdit/>
                </button>
                <button onClick={() => handleDelete(vehicle.id)}>
                  <FaTrash/>
                </button>
              </a>
          </div>
          ))}
      </ul>
    </div>
  );
}

export default List;