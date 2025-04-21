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
  const { vehicle, setUpdateList, setVehicleId, loading, errors } = useVehiclesById();
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
              
              <h3>{vehicle.characterId} - {vehicle.garageId} - {vehicle.model} </h3>

              <div className="vehicle-colors">
                <h3>Cores do veículo:</h3>

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
              
              <dl>
                <dt>Rodas:</dt>
                <dd>{vehicle.rimsType} - {vehicle.rims}</dd>

                <dt>Vidro:</dt>
                <dd>{vehicle.windows}</dd>

                <dt>Placa:</dt>
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