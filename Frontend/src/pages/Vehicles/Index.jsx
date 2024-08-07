import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form';
import './Styles.css';

function Veiculo() {
  return (
    <div className='container-car'>
      <Header />

      <div className='content-car'>
        <div className='list-car'>
          <Form/>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Veiculo;