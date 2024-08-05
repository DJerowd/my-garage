import { React } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form';
import List from './List';
import { CharacterProvider } from './Context';
import './Styles.css';

function Personagem() {

  return (
    <div className='container-character'>
      <Header />

      <div className='content-character'>
        <main className='form-character'><Form/></main>
        <aside className='list-character'><List/></aside>
      </div>
      
      <Footer/>
    </div>
  );
}

export default Personagem;