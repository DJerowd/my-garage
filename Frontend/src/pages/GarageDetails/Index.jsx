import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
import { getLoggedInUser } from '../../utils/auth.js';

import useGarageById from '../../hooks/Garages/useGaragesById.jsx';
import useCharactersById from '../../hooks/Characters/useGaragesById.jsx';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from '../../components/Loading/Index.jsx';

import '../../Styles/layout.css';
import '../../Styles/garage.css';

function GarageDetails() {
  const { id } = useParams();
  const { garage, setUpdateList:setUpdateListGarage, setGarageId, loading:loadingGarage, errors:errorsGarage } = useGarageById();
  const { character, setUpdateList:setUpdateListCharacter, setCharacterId, loading:loadingCharacter, errors:errorsCharacter } = useCharactersById();
  const loggedInUser = getLoggedInUser();
  const navigate = useNavigate();

  // CARREGA DADOS DA GARAGEM
  // useEffect(() => {
  //   const fetchGarage = async () => {
  //     setGarageId(id)
  //   };
  //   fetchGarage();
  //   setUpdateListGarage(prevState => !prevState);
  // }, [loadingGarage]);

   // CARREGA DADOS DA GARAGEM
   useEffect(() => {
    setGarageId(id);
    setUpdateListGarage(prev => !prev);
  }, [loadingGarage]);

  // CARREGA DADOS DO PERSONAGEM QUANDO A GARAGEM FOR CARREGADA
  useEffect(() => {
    if (garage.length > 0) {
      const characterId = garage[0].characterId;
      if (characterId) {
        setCharacterId(characterId);
        setUpdateListCharacter(prev => !prev);
      }
    }
  }, [garage]);

  // TELA DE LOADING
  if (loadingGarage || loadingCharacter || !garage || !character) { 
    return (
      <div className='container'>
        <Header />
          <Loading/>
        <Footer/>
      </div> 
    ); 
  }

  // TELA DE GARAGEM INEXISTENTE
  if (!loadingGarage && errorsGarage != null) { 
    return (
      <div className='container'>
        <Header/>
        <div className='content content-garage'>

            <h2>{errorsGarage}</h2>
            <h3>A garagem de ID: {id} não foi encontrada.</h3>

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
          <main key={garage.id}> 
          
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

                <dt>Ocupação atual:</dt>
                <dd>{garage.ocupation}</dd>

                <dt>Capacidade Máxima:</dt>
                <dd>{garage.capacity}</dd>
              </dl>
            </section>
              
          </main>
        ))}
        
      </div>

      <Footer/>
    </div>
  );
};
    
export default GarageDetails;