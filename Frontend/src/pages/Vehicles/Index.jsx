import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import { getLoggedInUser } from '../../utils/auth.js';
import useCharacters from '../../hooks/useCharacters';
import useGarages from '../../hooks/useGarages';
import useVehicles from '../../hooks/useVehicles';
import useVehiclesByGarageId from '../../hooks/useVehiclesByGarageId';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form';
import Filter from './Filter';
import List from './List';
import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

function Veiculo() {
  const { characters, setUpdateCharacterList } = useCharacters();
  const { garages, setUpdateGarageList } = useGarages();
  const { vehicles, setUpdateVehicleList } = useVehicles();
  const { vehiclesByGarageId, setUpdateVehicleListByGarageId, setVehicleByGarageId } = useVehiclesByGarageId();
  const loggedInUser = getLoggedInUser();

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
              characters={characters}
              garages={garages}
              setUpdateVehicleList={setUpdateVehicleList}
              setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
            />
          </div>
        </main>
        <aside className='aside-car'>
          <div className='filter-car'>
            <Filter 
              garages={garages}
              setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
              setVehicleByGarageId={setVehicleByGarageId}
            />
          </div>

          <div className='list-car'>
            <List 
              vehiclesByGarageId={vehiclesByGarageId}
              setUpdateVehicleListByGarageId={setUpdateVehicleListByGarageId}
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