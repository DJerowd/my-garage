import { React } from 'react';

import '../../Styles/layout.css';
import '../../Styles/grid.css';

function List({ garagesByCharacterId, setUpdateGarageListByCharacterId, currentPage, itemsPerPage }) {

    // OBTÉM OS USUÁRIOS PARA A PÁGINA ATUAL
    const currentGarages = garagesByCharacterId.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    //  LISTA VAZIA PARA SER EXIBIDA QUANDO NÃO HOUVER NENHUMA GARAGEM NO PERSONAGEM SELECIONADO.
    if (JSON.stringify(garagesByCharacterId) == '[]') {
        return (
            <table>
                {/* HEADER DA TABELA */}
                <th id='garages-list'>
                    <td id="index"></td>
                    <td id="slot">Slot</td>
                    <td id="property">Propriedade</td>
                    <td id="ocupation">Ocup.</td>
                    <td id="capacity">Capac.</td>
                </th>
                {/* DADOS DA TABELA */}
                <tr id='none-list'>
                    <td>Nenhuma garagem encontrada.</td>
                </tr>
            </table>
        );
    }

    return (
        <table>
            {/* HEADER DA TABELA */}
            <th id='garages-list'>
                <td id="index"></td>
                <td id="slot">Slot</td>
                <td id="property">Propriedade</td>
                <td id="ocupation">Ocup.</td>
                <td id="capacity">Capac.</td>
            </th>
            {/* DADOS DA TABELA */}
            {currentGarages.map((garage, index) => (
                <tr key={garage.id} id='garages-list'>
                    <td id="index">{index + 1}</td>
                    <td id="slot">{garage.slot}</td>
                    <td id="property">{garage.property}</td>
                    <td id="ocupation">{garage.ocupation}</td>
                    <td id="capacity">{garage.capacity}</td>
                </tr>
            ))}
        </table>
    );
}

export default List;