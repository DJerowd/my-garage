import { React } from 'react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import '../../Styles/layout.css';

function VehicleDetails() {
    return (
        <div className='container'>
          <Header/>

          <div className='content'>
            <h1>Detalhes do veículo:</h1>
          </div>

          <Footer/>
        </div>
      );
    };
    
    export default VehicleDetails;