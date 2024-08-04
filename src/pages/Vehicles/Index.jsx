import React from 'react';
import Header from '../../components/Header';
import Form from './Form';
import manufacturers from '../../data/manufacturers.json';
import models from '../../data/models.json';
import './Styles.css';

function Veiculo() {
  return (
    <div className='container'>
      <Header />

      <div className='content'>

        <div className='car-list'>
          <Form marcas={manufacturers} modelos={models} />
        </div>

      </div>;
    </div>
  );
};

export default Veiculo;