import React from 'react';
import Header from '../../components/Header';
import List from './List';
import './Styles.css';

function Garagem() {
  return (
    <div className='container-home'>
      <Header />

      <div className='content'>

        <div className='list'>
          <List/>
        </div>

      </div>
    </div>
  );
};

export default Garagem;