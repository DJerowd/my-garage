import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios';
import properties from '../../data/properties.json';

import '../../Styles/layout.css';
import '../../Styles/grid.css';

function Form({ ids, garagesByCharacterId, setUpdateGarageListByCharacterId }) {
    const [slot, setSlot] = useState('arena');
    const [garage, setGarage] = useState({
        characterId: '',
        slot: '',
        property: '',
        ocupation: '0',
        capacity: 0,
        location: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name == 'slot') {
            setSlot(value);
            setGarage(prevState => ({
                characterId: ids.characterId,
                slot: value,
                property: "",
                ocupation: 0,
                capacity: 0,
                location: "",
                price: ""
            }));
        } 
        if (name == 'property') {
            if (value == '') {
                setGarage(prevState => ({
                    ...prevState,
                    property: "",
                    capacity: 0,
                    location: "",
                    price: ""
                }));
            }
            const property = JSON.parse(value);
            setGarage(prevState => ({
                ...prevState,
                property: property.property,
                capacity: property.capacity,
                location: property.location,
                price: property.price
            }));
        }
    };

    const handleSubmit = async (e) => {
        const existingGarage = garagesByCharacterId.find(garage => garage.slot === slot);
        e.preventDefault();
        if (!ids.characterId) {
            toast.warn(`Selecione uma garagem primeiro!`);
        } else if (existingGarage) {
            toast.error(`Já existe uma garagem com o slot ${JSON.stringify(garage.slot)}!`);
        } else if ( !garage.slot || !garage.property || !garage.capacity || !garage.location ) {
            toast.warn(`Todos os campos devem ser preenchidos!`);
        } else {
            await axios
            .post("http://localhost:8800/garages", {
                characterId: ids.characterId,
                slot: garage.slot,
                property: garage.property,
                ocupation: garage.ocupation,
                capacity: garage.capacity,
                location: garage.location,
                price: garage.price
            })
            .then(({ data }) => {
            setUpdateGarageListByCharacterId(prevState => !prevState);
            toast.success(`Garagem salva!`);
            })
            .catch(({ data }) =>
            toast.error(`Erro ao salvar garagem!`)
            );
            setGarage({
                characterId: ids.characterId,
                slot: "",
                property: "",
                capacity: 0,
                location: "",
                price: ""
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Tipo de Propriedade:
                <select name="slot" value={garage.slot} onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {Object.keys(properties).map((property, index) => (
                        <option key={property} value={property}>
                            {index + 1} - {property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Propriedade:
                <select name="property" onChange={handleChange} disabled={!slot}>
                    <option value="">Nenhum</option>
                    {properties[slot] && properties[slot].map((property, index) => (
                        <option key={property.value} value={JSON.stringify(property)}>
                            {index + 1} - [{property.capacity} vagas] {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <button type="submit">Salvar Garagem</button>
        </form>
    );
}

export default Form;