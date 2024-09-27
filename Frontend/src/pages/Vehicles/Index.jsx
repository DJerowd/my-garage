import { React, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';

import useCharactersByUserId from '../../hooks/Characters/useCharactersByUserId.jsx';
import useGaragesByCharacterId from '../../hooks/Garages/useGaragesByCharacterId.jsx';
import useVehiclesByGarageId from '../../hooks/Vehicles/useVehiclesByGarageId.jsx';
import useGarageOccupation from '../../hooks/Garages/useGarageOccupation.jsx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from './Filter.jsx';
import Form from './Form.jsx';
import List from './List.jsx';

import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

function Veiculo() {
  const loggedInUser = getLoggedInUser();
  const { charactersByUserId, setUpdateCharactersListByUserId } = useCharactersByUserId();
  const { garagesByCharacterId, setUpdateGarageListByCharacterId, setGarageByCharacterId } = useGaragesByCharacterId();
  const { vehiclesByGarageId, setUpdateVehicleListByGarageId, setVehicleByGarageId } = useVehiclesByGarageId();
  const { increaseOccupation, decreaseOccupation, loading, error } = useGarageOccupation();
  const [ids, setIds] = useState({
    characterId: "",
    garageId: ""
  });

  if (!loggedInUser) {
    return (
      <div className='container-car'>
        <Header />
        <div className='content-car'>
          Faça login para acessar essa página.
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className='container-car'>
      <Header />
      <div className='content-car'>

        <main className='main-car'>
          <div className='title-car'>
            Adicionar Veículo:
          </div>

          <div className='form-car'>
            <Form 
              ids={ids}
              charactersByUserId={charactersByUserId}
              garagesByCharacterId={garagesByCharacterId}
              setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
              increaseOccupation={increaseOccupation}
            />
          </div>
        </main>
        <aside className='aside-car'>
          <div className='filter-car'>
            <Filter 
              setIds={setIds}
              charactersByUserId={charactersByUserId}
              garagesByCharacterId={garagesByCharacterId}
              setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId}
              setGarageByCharacterId={setGarageByCharacterId}
              setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
              setVehicleByGarageId={setVehicleByGarageId}
            />
          </div>

          <div className='list-car'>
            <List 
              ids={ids}
              vehiclesByGarageId={vehiclesByGarageId}
              setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
              decreaseOccupation={decreaseOccupation}
            />
          </div>
        </aside>

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

export default Veiculo;