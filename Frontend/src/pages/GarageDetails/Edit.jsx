import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";

import axios from 'axios';
import properties from '../../data/properties.json';

import '../../Styles/layout.css';
import '../../Styles/responsive.css';

function Edit({ setUpdateListGarage, setShowEdit, editingGarage, setEditingGarage }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == 'property') {
            if (value == '') {
                setEditingGarage(prevState => ({
                    ...prevState,
                    property: "",
                    capacity: 0,
                    location: "",
                    price: ""
                }));
            }
            const property = JSON.parse(value);
            setEditingGarage(prevState => ({
                ...prevState,
                property: property.name,
                capacity: property.capacity,
                location: property.location,
                price: property.price
            }));
        }
    };

    // FUNÇÃO PARA EDITAR DADOS DO PERSONAGEM
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!editingGarage.slot || !editingGarage.property || !editingGarage.capacity || !editingGarage.location || !editingGarage.price) {
            toast.warn(`Todos os campos devem ser preenchidos!`);
        } else {
            const confirm = window.confirm("Tem certeza de que deseja editar as informações da garagem?");
            if (!confirm) {
                return;
            } else {
                await axios
                .put("http://localhost:8800/garages/" + editingGarage.id, {
                    property: editingGarage.property,
                    capacity: editingGarage.capacity,
                    location: editingGarage.location,
                    price: editingGarage.price,
                })
                .then(({ data }) => {
                    toast.success(`Garagem salva!`);
                    setShowEdit(false);
                    setUpdateListGarage(prevState => !prevState);
                })
                .catch(({ data }) => {
                    toast.error(`Erro ao salvar garagem ${JSON.stringify(data)}!`)
                });
            }
        }
    };
    
    return (
        <div className='content-modal'>
            <form onSubmit={handleSubmit}>
                
                <div className='btn-bar'>
                    <button type='button' className='close-btn' onClick={() => setShowEdit(false)}><IoClose/></button>
                </div>

                <h2>Editar Garagem:</h2>

                <label>
                    Propriedade:
                    <select className='list-select' id="select-property" name="property" onChange={handleChange}>
                        <option value="">Nenhum</option>
                        {properties[editingGarage.slot] && properties[editingGarage.slot].map((property, index) => (
                            <option key={property.value} value={JSON.stringify(property)}>
                                {index + 1} - [{property.capacity} vagas] {property.name}
                            </option>
                        ))}
                    </select>
                </label>

                <button type="submit" className='form-btn'>Salvar</button>

            </form>
        </div>
    );
}
  
export default Edit;