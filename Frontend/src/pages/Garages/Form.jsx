import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios';
import properties from '../../data/properties.json';

import './Styles.css';

function Form({ ids, garagesByCharacterId, setUpdateGarageListByCharacterId }) {
    const [slot, setSlot] = useState('arena');
    const [garage, setGarage] = useState({
        characterId: '',
        slot: '',
        property: '',
        ocupation: 0,
        capacity: 0,
        location: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name == 'slot') {
            setSlot(value);
            setGarage(prevState => ({
                ...prevState,
                [name]: value
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
        const { name, value } = e.target;
        e.preventDefault();
        if (!ids.characterId) {
            toast.warn(`Selecione uma garagem primeiro!`);
        } else if ( !garage.slot || !garage.property || !garage.capacity || !garage.location || !garage.price ) {
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Tipo de Propriedade:
                    <select name="slot" onChange={handleChange}>
                        <option value="">Nenhum</option>
                        {Object.keys(properties).map((property) => (
                            <option key={property} value={property}>
                                {property}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Agência:
                    <select name="property" onChange={handleChange}>
                        <option value="">Nenhum</option>
                        {properties.agency.map((property) => (
                            <option key={property.value} value={JSON.stringify(property)}>
                                ({property.capacity} vagas) {property.property}
                            </option>
                        ))}
                    </select>
                </label>

                <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                    <button style={{paddingInline: 10}} type="submit">Salvar</button>
                </div>
            </form>
            
            <h4>{garage.characterId}</h4>
            <h4>{garage.slot}</h4>
            <h4>{garage.property}</h4>
            <h4>{garage.ocupation}</h4>
            <h4>{garage.capacity}</h4>
            <h4>{garage.location}</h4>
            <h4>{garage.price}</h4>
            {ids.characterId}
        </div>
    );
}

export default Form;