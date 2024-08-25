import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form';
import List from './List';
import './Styles.css';

function Personagem() {

  return (
    <div className='container-character'>
      <Header />

      <div className='content-character'>
        <main className='form-character'><Form/></main>
        <aside className='list-character'><List/></aside>
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
}

export default Personagem;