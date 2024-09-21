import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './Styles.css';

function VehicleDetails() {
    return (
        <div className='container-car-details'>
          <Header/>

          <div className='content-car-details'>
            <h1>Detalhes do veículo:</h1>
          </div>

          <Footer/>
        </div>
      );
    };
    
    export default VehicleDetails;