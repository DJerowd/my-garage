import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import axios from 'axios';

import '../../Styles/layout.css';
import '../../Styles/grid.css';

function List({ ids, vehiclesByGarageId, setUpdateVehicleListByGarageId, decreaseOccupation, currentPage, itemsPerPage }) {
  const navigate = useNavigate();

  // OBTÉM OS USUÁRIOS PARA A PÁGINA ATUAL
  const currentVehicles = vehiclesByGarageId.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        decreaseOccupation(ids.garageId);
        setUpdateVehicleListByGarageId(prevState => !prevState);
        toast.success(`Veículo ${id} excluido!`);
      })
      .catch(({ data }) => toast.error(data)
      );
    }
  };

  // DIRECIONA PARA A PAGINA DE DETALHES DO VEÍCULO SELECIONADO.
  const handleVehicleDetails = (id) => {
    navigate(`/vehicle/${id}`);
  };

  //  LISTA VAZIA PARA SER EXIBIDA QUANDO NÃO HOUVER NENHUM VEICULO NA GARAGEM SELECIONADA.
  if (JSON.stringify(vehiclesByGarageId) == '[]') {
    return (
      <table className='table'>
          <h3 className='error'>Nenhum veículo encontrado.</h3>
      </table>
    );
  }

  return (
    <table className='table'>

      <div className='list' style={{gridTemplateColumns: `repeat(calc(${itemsPerPage} / 2), 1fr)`}}>
        {currentVehicles.map((vehicle, index) => (
          <section key={vehicle.id} className="item vehicle-item" onClick={() => handleVehicleDetails(vehicle.id)}>
            <a className='img-preview vehicle-preview'>
              <img src={`/vehicle_preview/${vehicle.model}.png`} alt={`${vehicle.model}`} onError={(e) => {e.target.onerror = null; e.target.src = '/vehicle_preview/default.png'; }}/>
              <b>{vehicle.plate}</b>
            </a>
            <h3>{`${vehicle.manufacturer} ${vehicle.model}`}</h3>
          </section>
        ))}
      </div>
    </table>
  );
}

export default List;