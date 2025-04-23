import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
import { getLoggedInUser } from '../../utils/auth.js';

import useVehiclesById from '../../hooks/Vehicles/useVehiclesById';
import useGarageById from '../../hooks/Garages/useGaragesById.jsx';
import useCharactersById from '../../hooks/Characters/useGaragesById.jsx';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from '../../components/Loading/Index.jsx';
import plateModels from '../../data/license-plates.json';

import '../../Styles/layout.css';
import '../../Styles/vehicle.css';
import { toast } from 'react-toastify';

function VehicleDetails() {
  const { id } = useParams();
  const { vehicle, setUpdateList:setUpdateListVehicle, setVehicleId, loading:loadingVehicle, errors:errorsVehicle } = useVehiclesById();
  const { garage, setUpdateList:setUpdateListGarage, setGarageId, loading:loadingGarage, errors:errorsGarage } = useGarageById();
  const { character, setUpdateList:setUpdateListCharacter, setCharacterId, loading:loadingCharacter, errors:errorsCharacter } = useCharactersById();
  const loggedInUser = getLoggedInUser();
  const navigate = useNavigate();

  // CARREGA DADOS DO VEÍCULO
  useEffect(() => {
    const fetchVehicle = async () => {
      setVehicleId(id)
    };
    fetchVehicle();
    setUpdateListVehicle(prevState => !prevState);
  }, [loadingVehicle]);

  // CARREGA DADOS DO PERSONAGEM E GARAGEM QUANDO O VEÍCULO FOR CARREGADO
    useEffect(() => {
      if (vehicle.length > 0) {
        const characterId = vehicle[0].characterId;
        const garageId = vehicle[0].garageId;
        if (characterId) {
          setCharacterId(characterId);
          setUpdateListCharacter(prev => !prev);
        }
        if (garageId) {
          setGarageId(garageId);
          setUpdateListGarage(prev => !prev);
        }
      }
    }, [vehicle]);

    // DEFINE A COR DO TEXTO DA PLACA
    const getPlateTextColor = (plateModelId) => {
      if (plateModelId === 3 || plateModelId === 4 || plateModelId === 10 || plateModelId === 11) return "#DDC25A";
      if (plateModelId === 6 || plateModelId === 12) return "#FFFFFF";
      if (plateModelId === 5) return "#000000";
      return "#25295F";
    };

  // TELA DE LOADING
  if (loadingVehicle) { return (
    <div className='container'>
      <Header />
        <Loading/>
      <Footer/>
    </div> 
  );  }

  // TELA DE VEHICULO INEXISTENTE
  if (!loadingVehicle && errorsVehicle) { 
    return (
      <div className='container'>
        <Header/>
        <div className='content content-vehicle'>

            <h2>{errors}</h2>
            <h3>O vehiculo de ID: {id} não foi encontrado.</h3>

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
          <main key={vehicle.id}> 

            <section>

              <h2>{`${vehicle.manufacturer} ${vehicle.model}`}</h2> 
              <a className='vehicle-preview'></a>

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
              </div>
          
              <h3>Informações de Veículo</h3>
              <dl>
                <dt>Dono:</dt>
                {character[0] ? 
                  <dd>{character[0].username}</dd>
                : 
                  <dd>{vehicle.characterId}</dd>
                }

                <dt>Garagem:</dt>
                {garage[0] ? 
                  <dd>{garage[0].property}</dd>
                : 
                  <dd>{vehicle.garageId}</dd>
                }

                <dt>Rodas:</dt>
                <dd>{vehicle.rimsType} - {vehicle.rims}</dd>

                <dt>Vidro:</dt>
                <dd>{vehicle.windows}</dd>
              </dl>

              <label>
                Placa:
                <a id="license-plate" className="license-plate">
                  <img src={plateModels[vehicle.plateModel].image} alt="Smiley face"/> 
                  <span className="plate-text" style={{ color: getPlateTextColor(vehicle.plateModel) }}>{vehicle.plate}</span>
                </a>
              </label>

            </section>
              
          </main>
        ))}
        
      </div>

      <Footer/>
    </div>
  );
};
    
export default VehicleDetails;