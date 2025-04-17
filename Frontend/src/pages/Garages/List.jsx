import { React } from 'react';

import '../../Styles/layout.css';
import '../../Styles/grid.css';

function List({ garagesByCharacterId, setUpdateGarageListByCharacterId }) {

    //  LISTA VAZIA PARA SER EXIBIDA QUANDO NÃO HOUVER NENHUMA GARAGEM NO PERSONAGEM SELECIONADO.
    if (JSON.stringify(garagesByCharacterId) == '[]') {
        return (
            <table>
                {/* HEADER DA TABELA */}
                <th id='garages-list'>
                    <td></td>
                    <td>Slot</td>
                    <td>Propriedade</td>
                    <td>Ocup.</td>
                    <td>Capac.</td>
                </th>
                {/* DADOS DA TABELA */}
                <tr id='none-list'>
                    <td>Nenhuma garagem.</td>
                </tr>
            </table>
        );
    }

    return (
        <table>
            {/* HEADER DA TABELA */}
            <th id='garages-list'>
                <td></td>
                <td>Slot</td>
                <td>Propriedade</td>
                <td>Ocup.</td>
                <td>Capac.</td>
            </th>
            {/* DADOS DA TABELA */}
            {garagesByCharacterId.map((garage, index) => (
                <tr key={garage.id} id='garages-list'>
                    <td>{index + 1}</td>
                    <td>{garage.slot}</td>
                    <td>{garage.property}</td>
                    <td>{garage.ocupation}</td>
                    <td>{garage.capacity}</td>
                </tr>
            ))}
        </table>
    );
}

export default List;