import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
import { getLoggedInUser } from '../../utils/auth.js';

import useVehiclesById from '../../hooks/Vehicles/useVehiclesById';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import '../../Styles/layout.css';
import '../../Styles/vehicle.css';

function VehicleDetails() {
  const { id } = useParams();
  const { vehicle, setUpdateList, loading, errors, setVehicleId } = useVehiclesById();
  const loggedInUser = getLoggedInUser();
  const navigate = useNavigate();

  // CARREGA DADOS DO USUÁRIO
  useEffect(() => {
    const fetchVehicle = async () => {
      setVehicleId(id)
    };
    fetchVehicle();
    setUpdateList(prevState => !prevState);
  }, [loading]);

  // TELA DE LOADING
  if (loading) { return ( <div>carregando</div> ); }

  // TELA DE VEHICULO INEXISTENTE
  if (!loading && errors) { 
    return (
      <div className='container'>
        <Header/>
        <div className='content content-profile'>

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
            </section>
          
            <section>
              {/* <h3>{JSON.stringify(vehicle)}</h3> */}
              <dl>
                <dt>Personagem:</dt>
                <dd>{vehicle.characterId}</dd>

                <dt>Garagem:</dt>
                <dd>{vehicle.garageId}</dd>
                
                <dt>Tipo de rodas:</dt>
                <dd>{vehicle.rimsType}</dd>

                <dt>Modelo de rodas:</dt>
                <dd>{vehicle.rims}</dd>

                <dt>Vidros:</dt>
                <dd>{vehicle.windows}</dd>

                <dt>Placas:</dt>
                <dd>{vehicle.plate}</dd>
              </dl>
            </section>
              
          </main>
        ))}
        
      </div>

      <Footer/>
    </div>
  );
};
    
export default VehicleDetails;