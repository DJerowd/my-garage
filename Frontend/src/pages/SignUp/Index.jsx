import { React } from 'react';
import { ToastContainer } from 'react-toastify';

import useUsers from '../../hooks/Users/useUsers.jsx';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Form from './Form.jsx';

import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/layout.css';

function Register() {
    const { users, setUpdateUserList } = useUsers();

    return (
        <div className='container'>
            <Header/>

            <div className='content content-sign'>

                <main className='sign'>
                    
                    <div className='title'>
                        <h2>Registre-se:</h2>
                    </div>
                    
                    <Form users={users} setUpdateUserList={setUpdateUserList}/>

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

export default Register;