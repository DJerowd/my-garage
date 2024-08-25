import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filter from './Filter';
import List from './List';
import './Styles.css';

function Garagem() {
  return (
    <div className='container-garage'>
      <Header />

      <div className='content-garage'>
        <div className='filter-garage'><Filter/></div>
        <div className='list-garage'><List/></div>
      </div>

      <Footer/>
    </div>
  );
};

export default Garagem;