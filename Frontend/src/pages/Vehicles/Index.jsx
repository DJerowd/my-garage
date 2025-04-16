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
import '../../Styles/layout.css';
import '../../Styles/grid.css';

function Veiculo() {
  const loggedInUser = getLoggedInUser();
  const { charactersByUserId, setUpdateCharactersListByUserId } = useCharactersByUserId();
  const { garagesByCharacterId, setUpdateGarageListByCharacterId, setGarageByCharacterId } = useGaragesByCharacterId();
  const { vehiclesByGarageId, setUpdateVehicleListByGarageId, setVehicleByGarageId } = useVehiclesByGarageId();
  const { increaseOccupation, decreaseOccupation, loading, error } = useGarageOccupation();
  const [garageLimit, setGarageLimit] = useState(false);
  const [ids, setIds] = useState({
    characterId: 0,
    garageId: 0
  });

  if (!loggedInUser) {
    return (
      <div className='container'>
        <Header />
        <div className='content'>
          Faça login para acessar essa página.
        </div>
        <Footer/>
      </div>
    );
  }

  return (
    <div className='container'>
      <Header />
      <div className='content content-grid'>

        <main>
          <h2>Adicionar Veículo:</h2>
          
          <Form 
            ids={ids}
            garageLimit={garageLimit}
            charactersByUserId={charactersByUserId}
            garagesByCharacterId={garagesByCharacterId}
            setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
            increaseOccupation={increaseOccupation}
          />
        </main>

        <aside>
          <Filter 
            className='filter'
            setIds={setIds}
            setGarageLimit={setGarageLimit}
            charactersByUserId={charactersByUserId}
            garagesByCharacterId={garagesByCharacterId}
            setUpdateGarageListByCharacterId={setUpdateGarageListByCharacterId}
            setGarageByCharacterId={setGarageByCharacterId}
            setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
            setVehicleByGarageId={setVehicleByGarageId}
          />

          <List 
            ids={ids}
            vehiclesByGarageId={vehiclesByGarageId}
            setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
            decreaseOccupation={decreaseOccupation}
          />
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