import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List from './List';
import './Styles.css';

function Garagem() {
  return (
    <div className='container-garage'>
      <Header />

      <div className='content-garage'>
        <main className='list-garage'><List/></main>
      </div>

      <Footer/>
    </div>
  );
};

export default Garagem;