import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';

import axios from 'axios';

import '../../Styles/layout.css';
import '../../Styles/grid.css';

function List({ ids, vehiclesByGarageId, setUpdateVehicleListByGarageId, decreaseOccupation }) {
  const navigate = useNavigate();

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
    toast(`Veículo ${id}!`);
  };

  //  LISTA VAZIA PARA SER EXIBIDA QUANDO NÃO HOUVER NENHUM VEICULO NA GARAGEM SELECIONADA.
  if (JSON.stringify(vehiclesByGarageId) == '[]') {
    return (
      <table>
        {/* HEADER DA TABELA */}
        <th id='vehicles-list'>
          <td></td>
          <td>Placa</td>
          <td>Veículo</td>
          <td>Cores do Veículo</td>
          <td></td>
        </th>
        {/* DADOS DA TABELA */}
        <tr id='none-list'>
          <td>Nenhum veículo.</td>
        </tr>
      </table>
    );
  }

  return (
    <table>
      {/* HEADER DA TABELA */}
      <th id='vehicles-list'>
        <td></td>
        <td>Veículo</td>
        <td>Cores do Veículo</td>
        <td>Placa</td>
        <td></td>
      </th>
      {/* DADOS DA TABELA */}
      {vehiclesByGarageId.map((vehicle, index) => (
        <tr key={vehicle.id} id='vehicles-list' onClick={() => handleVehicleDetails(vehicle.id)}>
          <td>{index + 1}</td>
          <td>{`${vehicle.manufacturer} ${vehicle.model}`}</td>
          <td>
          {['primaryColor', 'secundaryColor', 'pearlescentColor', 'interiorColor', 'dashboardColor', 'rimColor'].map(colorKey => (
            <colorBlock
              key={colorKey}
              className="colorblock"
              style={{ background: vehicle[colorKey]}}
            />
          ))}
          </td>
          <td>{`${vehicle.plate}`}</td>
          <td>
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