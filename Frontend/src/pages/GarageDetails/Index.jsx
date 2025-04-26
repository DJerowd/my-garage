import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
import { getLoggedInUser } from '../../utils/auth.js';

import useGarageById from '../../hooks/Garages/useGaragesById.jsx';
import useCharactersById from '../../hooks/Characters/useGaragesById.jsx';
import useVehiclesByGarageId from '../../hooks/Vehicles/useVehiclesByGarageId.jsx';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from '../../components/Loading/Index.jsx';

import '../../Styles/layout.css';
import '../../Styles/garage.css';
import '../../Styles/vehicle.css';
import '../../Styles/details.css';

function GarageDetails() {
  const [load, setLoad] = useState(false);
  const { id } = useParams();
  const { garage, setUpdateList:setUpdateListGarage, setGarageId, loading:loadingGarage, errors:errorsGarage } = useGarageById();
  const { character, setUpdateList:setUpdateListCharacter, setCharacterId, loading:loadingCharacter, errors:errorsCharacter } = useCharactersById();
  const { vehiclesByGarageId, setUpdateVehicleListByGarageId, setVehicleByGarageId, loading:loadingVehicles, errors:errorsVehicles } = useVehiclesByGarageId();
  const loggedInUser = getLoggedInUser();
  const navigate = useNavigate();

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
        setCharacterId(characterId);
        setUpdateListCharacter(prev => !prev);
        setVehicleByGarageId(garage[0].id)
        setUpdateVehicleListByGarageId(prev => !prev);
      }
    }
  }, [garage]);

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
  if (loadingVehicles || loadingGarage || loadingCharacter || !garage || !character) { 
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

              <h3>Informações da Propriedade</h3>
              <dl>
                <dt>Tipo:</dt>
                <dd>{garage.slot}</dd>

                <dt>Dono:</dt>
                {character[0] ?
                  <dd>{character[0].username}</dd>
                : 
                  <dd>{garage.characterId}</dd>
                }

                <dt>Localização:</dt>
                <dd>{garage.location}</dd>

                <dt>Preço:</dt>
                <dd>${garage.price}</dd>

                <dt>Capacidade Máxima:</dt>
                <dd>{vehiclesByGarageId.length}/{garage.capacity}</dd>
              </dl>
            </section>

          </main>
        ))}

        {(vehiclesByGarageId != '') 
        ? 
          <aside>
            {vehiclesByGarageId.map((vehicle, index) => (
              <section className="vehicle-item" onClick={() => handleVehicleDetails(vehicle.id)}>
                <h3 className="article-title-overlay">{`${vehicle.manufacturer} ${vehicle.model}`}</h3>
                <a className='vehicle-preview'>
                <img src={`/vehicle_preview/${vehicle.model}.png`} alt={`${vehicle.model}`} onError={(e) => {e.target.onerror = null; e.target.src = '/default.png'; }}/>
                  <b>{index + 1}</b>
                </a>
              </section>
            ))}
          </aside>
        :
          <h3>
            Essa garagem não possuí nenhum veículo
          </h3>
        }
        
      </div>

      <Footer/>
    </div>
  );
};
    
export default GarageDetails;