import { React, useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCharacters from '../../hooks/useCharacters';
import useGarages from '../../hooks/useGarages';
import useVehicles from '../../hooks/useVehicles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form';
import Filter from './Filter';
import List from './List';
import './Styles.css';

function Veiculo() {
  const { characters, setUpdateCharacterList } = useCharacters();
  const { garages, setUpdateGarageList } = useGarages();
  const { vehicles, setUpdateVehicleList } = useVehicles();
  const [ selectedGarage, setSelectedGarage ] = useState([]);

  return (
    <div className='container-car'>
      <Header />

      <div className='content-car'>
        <main className='form-car'>
          <Form 
            characters={characters}
            garages={garages}
            setUpdateVehicleList={setUpdateVehicleList}
          />
        </main>

        <aside>
          <div className='filter-car'>
            <Filter 
              garages={garages}
              setSelectedGarage={setSelectedGarage}
            />
          </div>
          <div className='list-car'>
            <List 
              vehicles={vehicles} 
              setUpdateVehicleList={setUpdateVehicleList}
              selectedGarage={selectedGarage}
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