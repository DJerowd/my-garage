import { React } from 'react';
import { ToastContainer } from 'react-toastify';

import useUsers from '../../hooks/Users/useUsers.jsx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form';

import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

function Login() {
  const { users, setUpdateUserList } = useUsers();

  return (
    <div className='container-login'>
      <Header/>

      <div className='content-login'>
        <main>
          <div className='title-login'>
            <h2>Fazer login:</h2>
            <h3>Faça login ou crie uma conta.</h3>
          </div>

          <div className='form-login'>
            <Form users={users} />
          </div>
        </main>

        <ToastContainer 
          className='toastContainer' 
          autoClose={3000} 
          limit={7}
          hideProgressBar={true}
          position="bottom-left" 
          theme="dark"
        />
      </div>

      <Footer/>
    </div>
  );
}

export default Login;