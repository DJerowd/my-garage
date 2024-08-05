import React from 'react';
import Header from '../../components/Header';
import Form from './Form';
import manufacturers from '../../data/manufacturers.json';
import models from '../../data/models.json';
import './Styles.css';
import Footer from '../../components/Footer';

function Veiculo() {
  return (
    <div className='container-car'>
      <Header />

      <div className='content-car'>
        <div className='list-car'>
          <Form manufacturers={manufacturers} models={models} />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Veiculo;