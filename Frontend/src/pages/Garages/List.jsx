import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar } from "react-icons/fa";

import '../../Styles/layout.css';
import '../../Styles/grid.css';

function List({ garagesByCharacterId, currentPage, itemsPerPage }) {
    const navigate = useNavigate();

    // OBTÉM OS USUÁRIOS PARA A PÁGINA ATUAL
    const currentGarages = garagesByCharacterId.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // DIRECIONA PARA A PAGINA DE DETALHES DO VEÍCULO SELECIONADO.
    const handleGarageDetails = (id) => {
        navigate(`/garage/${id}`);
        toast(`Garagem ${id}!`);
    };

    //  LISTA VAZIA PARA SER EXIBIDA QUANDO NÃO HOUVER NENHUMA GARAGEM NO PERSONAGEM SELECIONADO.
    if (JSON.stringify(garagesByCharacterId) == '[]') {
        return (
            <table className='table'>
                <h3 className='error'>Nenhuma garagem encontrada.</h3>
            </table>
        );
    }

    return (
        <table className='table'>
            <div className='list' style={{gridTemplateColumns: `repeat(calc(${itemsPerPage} / 2), 1fr)`}}>
            {currentGarages.map((garage, index) => (
                <section key={garage.id} className="item garage-item" onClick={() => handleGarageDetails(garage.id)}>
                    <a className='img-preview garage-preview'>
                        <img src={`/garage_preview/${garage.property}.jpg`} alt={`${garage.id}`} onError={(e) => {e.target.onerror = null; e.target.src = '/garage_preview/default.png'; }}/>
                        <b><FaCar className='icon'/>{garage.capacity}</b>
                    </a>
                    <h3>{garage.property}</h3>
                </section>
            ))}
            </div>
        </table>
    );
}

export default List;