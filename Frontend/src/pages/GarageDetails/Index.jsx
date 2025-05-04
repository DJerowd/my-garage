import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { getLoggedInUser } from '../../utils/auth.js';
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';

import useGarageById from '../../hooks/Garages/useGaragesById.jsx';
import useVehiclesByGarageId from '../../hooks/Vehicles/useVehiclesByGarageId.jsx';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from '../../components/Loading/Index.jsx';
import Edit from './Edit.jsx';

import '../../Styles/layout.css';
import '../../Styles/garage.css';
import '../../Styles/vehicle.css';
import '../../Styles/details.css';

function GarageDetails() {
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const { garage, setUpdateList:setUpdateListGarage, setGarageId, loading:loadingGarage, errors:errorsGarage } = useGarageById();
  const { vehiclesByGarageId, setUpdateVehicleListByGarageId, setVehicleByGarageId, loading:loadingVehicles, errors:errorsVehicles } = useVehiclesByGarageId();
  const loggedInUser = getLoggedInUser();
  const navigate = useNavigate();

  // MODAL DE EDIÇÃO
  const [showEdit, setShowEdit] = useState(false);
  const [editingGarage, setEditingGarage] = useState(null);

   // CARREGA DADOS DA GARAGEM
   useEffect(() => {
    setGarageId(id);
    setUpdateListGarage(prev => !prev);
    setLoad(true);
  }, [load]);

  // CARREGA DADOS DO PERSONAGEM QUANDO A GARAGEM FOR CARREGADA
  useEffect(() => {
    if (garage.length > 0) {
      const characterId = garage[0].characterId;
      if (characterId) {
        setVehicleByGarageId(garage[0].id)
        setUpdateVehicleListByGarageId(prev => !prev);
      }
    }
  }, [garage]);

  // FUNÇÃO PARA EDITAR A GARAGEM.
  const handleEdit = () => {
    setShowEdit(true);
    setEditingGarage(garage[0]);
  };

  // FUNÇÃO PARA EXCLUIR A GARAGEM.
  const handleDelete = async (id) => {
    const confirm = window.confirm("Tem certeza de que deseja excluir esta garagem? Todas as informações serão perdidas.");
    if (!confirm) {
      toast.error(`Exclusão cancelada!`);
      return;
    } else {
      await axios
      .delete("http://localhost:8800/garages/" + id)
      .then(({ data }) => {
        navigate(-1);
        setUpdateListVehicle(prevState => !prevState);
      })
      .catch(({ data }) => toast.error(data)
      );
    }
  };

  // DIRECIONA PARA A PAGINA DE DETALHES DO VEÍCULO SELECIONADO.
  const handleVehicleDetails = (id) => {
    navigate(`/vehicle/${id}`);
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
  if (loadingVehicles || loadingGarage) { 
    return (
      <div className='container'>
        <Header />
          <Loading/>
        <Footer/>
      </div> 
    ); 
  }

  // TELA DE GARAGEM INEXISTENTE
  if (!loadingGarage && garage == '') { 
    return (
      <div className='container'>
        <Header/>
        <div className='content content-garage'>
            <h2 className='error'>A garagem não pode ser encontrada.</h2>
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className='container'>
      <Header/>
      <div className='content content-garage'>

        {garage.map((garage, index) => (
          <main key={garage.id} className='details'> 
          
            <section>
              <h2>{`${garage.property}`}</h2>

              <a className='img-preview garage-preview'>
                <img src={`/garage_preview/${garage.property}.jpg`} alt={`${garage.id}`} onError={(e) => {e.target.onerror = null; e.target.src = '/garage_preview/default.png'; }}/>
              </a>

              <h3>Informações da Propriedade</h3>
              <dl>
                <dt>Dono:</dt>
                <dd>{garage.username}</dd>

                <dt>Tipo:</dt>
                <dd>{garage.slot}</dd>

                <dt>Localização:</dt>
                <dd>{garage.location}</dd>

                <dt>Preço:</dt>
                <dd>${garage.price}</dd>

                <dt>Capacidade Máxima:</dt>
                <dd>{vehiclesByGarageId.length}/{garage.capacity}</dd>
              </dl>

              <div>
                <button className='details-btn' onClick={() => handleEdit()}>
                  <FaRegEdit/>Editar
                </button>
                <button className='details-btn' onClick={() => handleDelete(garage.id)}>
                  <FaTrash/>Excluir
                </button>
              </div>
            </section>

          </main>
        ))}

        {(vehiclesByGarageId != '') 
        ? 
          <aside>
            {vehiclesByGarageId.map((vehicle, index) => (
              <section className="item vehicle-item" onClick={() => handleVehicleDetails(vehicle.id)}>
                <a className='img-preview vehicle-preview'>
                  <img src={`/vehicle_preview/${vehicle.model}.png`} alt={`${vehicle.model}`} onError={(e) => {e.target.onerror = null; e.target.src = '/vehicle_preview/default.png'; }}/>
                </a>
                <h3 className="article-title-overlay">{`${vehicle.manufacturer} ${vehicle.model}`}</h3>
              </section>
            ))}
          </aside>
        :
          <h3 className='error'>Essa garagem não possuí nenhum veículo</h3>
        }

        {showEdit && 
          <Edit 
            setUpdateListGarage={setUpdateListGarage}
            setShowEdit={setShowEdit} 
            editingGarage={editingGarage} 
            setEditingGarage={setEditingGarage}
          />
        }
        
      </div>
      <ToastContainer 
        className='toastContainer' 
        autoClose={3000} 
        limit={7}
        hideProgressBar={true}
        position="bottom-left" 
        theme="dark"
      />

      <Footer/>
    </div>
  );
};
    
export default GarageDetails;