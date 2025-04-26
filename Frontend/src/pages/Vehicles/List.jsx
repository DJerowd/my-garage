import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEdit, FaTrash } from "react-icons/fa";
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
      <table>
        {/* HEADER DA TABELA */}
        <th id='vehicles-list'>
        <td id="index"></td>
        <td id="vehicle">Veículo</td>
        <td id="color">Cores do Veículo</td>
        <td id="plate">Placa</td>
        <td id="btn"></td>
        </th>
        {/* DADOS DA TABELA */}
        <tr id='none-list'>
          <td>Nenhum veículo encontrado.</td>
        </tr>
      </table>
    );
  }

  return (
    <table>
      {/* HEADER DA TABELA */}
      <th id='vehicles-list'>
        <td id="index"></td>
        <td id="vehicle">Veículo</td>
        <td id="color">Cores do Veículo</td>
        <td id="plate">Placa</td>
        <td id="btn"></td>
      </th>
      {/* DADOS DA TABELA */}
      {currentVehicles.map((vehicle, index) => (
        <tr key={vehicle.id} id='vehicles-list' onClick={() => handleVehicleDetails(vehicle.id)}>
          <td id="index">{index + 1 + ((currentPage - 1) * itemsPerPage)}</td>
          <td id="vehicle">{`${vehicle.manufacturer} ${vehicle.model}`}</td>
          <td id="color">
          {['primaryColor', 'secundaryColor', 'pearlescentColor', 'interiorColor', 'dashboardColor', 'rimColor'].map(colorKey => (
            <span
              style={{ background: vehicle[colorKey]}}
            ></span>
          ))}
          </td>
          <td id="plate">{`${vehicle.plate}`}</td>
          <td id="btn">
            <button onClick={() => handleEdit(vehicle.id)}>
              <FaRegEdit/>
            </button>
            <button onClick={() => handleDelete(vehicle.id)}>
              <FaTrash/>
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default List;