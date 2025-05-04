import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { getLoggedInUser } from '../../utils/auth.js';

import axios from 'axios';

import useVehiclesById from '../../hooks/Vehicles/useVehiclesById';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from '../../components/Loading/Index.jsx';
import plateModels from '../../data/license-plates.json';
import Edit from './Edit.jsx';

import '../../Styles/layout.css';
import '../../Styles/vehicle.css';
import '../../Styles/details.css';

function VehicleDetails() {
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const { vehicle, setUpdateList:setUpdateListVehicle, setVehicleId, loading:loadingVehicle, errors:errorsVehicle } = useVehiclesById();
  const loggedInUser = getLoggedInUser();
  const navigate = useNavigate();

  // MODAL DE EDIÇÃO
  const [showEdit, setShowEdit] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);

  // CARREGA DADOS DO VEÍCULO
  useEffect(() => {
    setVehicleId(id)
    setUpdateListVehicle(prevState => !prevState);
    setLoad(true);
  }, [load]);

  // FUNÇÃO PARA EDITAR O VEÍCULO.
  const handleEdit = () => {
    setShowEdit(true);
    setEditingVehicle(vehicle[0]);
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
        setUpdateListVehicle(prevState => !prevState);
        navigate(-1);
      })
      .catch(({ data }) => toast.error(data)
      );
    }
  };

  // DEFINE A COR DO TEXTO DA PLACA
  const getPlateTextColor = (plateModelId) => {
    if (plateModelId === 3 || plateModelId === 4 || plateModelId === 10 || plateModelId === 11) return "#DDC25A";
    if (plateModelId === 6 || plateModelId === 12) return "#FFFFFF";
    if (plateModelId === 5) return "#000000";
    return "#25295F";
  };

  // TELA LOGIN NECESSÁRIO
  if (!loggedInUser) {
    return (
      <div className='container'>
        <Header />
        <div className='content'>
          <h2>Faça <Link to="/signin">login</Link> para acessar essa página.</h2>
        </div>
        <Footer/>
      </div>
    );
  }

  // TELA DE LOADING
  if (loadingVehicle) { return (
    <div className='container'>
      <Header />
        <Loading/>
      <Footer/>
    </div> 
  );  }

  // TELA DE VEHICULO INEXISTENTE
  if (!loadingVehicle && vehicle == '' && errorsVehicle) { 
    return (
      <div className='container'>
        <Header/>
        <div className='content content-vehicle'>
          <h2 className='error'>{errorsVehicle}</h2>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className='container'>
      <Header/>
      <div className='content content-vehicle'>

        {vehicle.map((vehicle, index) => (
          <main key={vehicle.id} className='details'> 

            <section>
              <h2>{`${vehicle.manufacturer} ${vehicle.model}`}</h2> 
              
              <a className='img-preview vehicle-preview'>
                <img src={`/vehicle_preview/${vehicle.model}.png`} alt={`${vehicle.model}`} onError={(e) => {e.target.onerror = null; e.target.src = '/vehicle_preview/default.png'; }}/>
              </a>

              <h3>Cores do veículo</h3>
              <div className="vehicle-colors">

                <label className="color-box">
                  Primária:
                  <span style={{ backgroundColor: vehicle.primaryColor }}></span>
                </label>

                <label className="color-box">
                  Secundária:
                  <span style={{ backgroundColor: vehicle.secundaryColor }}></span>
                </label>

                <label>
                  Perolado:
                  <span style={{ backgroundColor: vehicle.pearlescentColor }}></span>
                </label>

                <label>
                  Interior:
                  <span style={{ backgroundColor: vehicle.interiorColor }}></span>
                </label>

                <label>
                  Detalhes:
                  <span style={{ backgroundColor: vehicle.dashboardColor }}></span>
                </label>

                <label>
                  Rodas:
                  <span style={{ backgroundColor: vehicle.rimColor }}></span>
                </label>
              </div>
          
              <h3>Informações do Veículo</h3>
              <dl>
                <dt>Dono:</dt>
                  <dd>{vehicle.username}</dd>

                <dt>Garagem:</dt>
                  <dd>{vehicle.property}</dd>

                <dt>Rodas:</dt>
                <dd>{vehicle.rimsType} - {vehicle.rims}</dd>

                <dt>Vidro:</dt>
                <dd>{vehicle.windows}</dd>
              </dl>

              <a id="license-plate" className="license-plate">
                <img src={plateModels[vehicle.plateModel].image}/> 
                <span className="plate-text" style={{ color: getPlateTextColor(vehicle.plateModel) }}>{vehicle.plate}</span>
              </a>

              <div>
                <button className='details-btn' onClick={() => handleEdit()}>
                  <FaRegEdit/>Editar
                </button>
                <button className='details-btn' onClick={() => handleDelete(vehicle.id)}>
                  <FaTrash/>Excluir
                </button>
              </div>
                
            </section>
              
          </main>
        ))}
        
        {showEdit && 
          <Edit 
            setUpdateListVehicle={setUpdateListVehicle}
            setShowEdit={setShowEdit} 
            editingVehicle={editingVehicle} 
            setEditingVehicle={setEditingVehicle}
          />
        }

      </div>

      <Footer/>
    </div>
  );
};
    
export default VehicleDetails;