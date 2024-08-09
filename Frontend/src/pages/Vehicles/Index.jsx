import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form';
import Filter from './Filter';
import List from './List';
import './Styles.css';

function Veiculo() {
  return (
    <div className='container-car'>
      <Header />

      <div className='content-car'>
        <main className='form-car'><Form/></main>
        <aside>
          <div className='filter-car'><Filter/></div>
          <div className='list-car'><List/></div>
        </aside>
      </div>

      <Footer/>
    </div>
  );
};

export default Veiculo;