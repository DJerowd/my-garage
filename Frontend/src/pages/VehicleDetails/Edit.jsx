import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";

import axios from 'axios';
import colors from '../../data/colors.json';
import rims from '../../data/rims.json';
import windows from '../../data/windows.json';
import licensePlates from '../../data/license-plates.json';

import '../../Styles/layout.css';
import '../../Styles/grid.css';
import '../../Styles/responsive.css';

function Edit({ setUpdateListVehicle, setShowEdit, editingVehicle, setEditingVehicle }) {
    const [filteredRims, setFilteredRims] = useState([]);

    // FUNÇÃO PARA INSERIR DADOS DO VEÍCULO NA VARIAVEL.
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'rimsType') {
            setFilteredRims(rims[e.target.value] || []);
            setEditingVehicle(prevState => ({
                ...prevState,
                [name]: value
        }));
        } else if (name === 'plate') {
            let newValue = value.toUpperCase();
            newValue = newValue.substring(0, 8);
            setEditingVehicle(prevState => ({
                ...prevState,
                [name]: newValue
            }));
        } else {
            setEditingVehicle(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
  
    // FUNÇÃO PARA EDITAR DADOS DO PERSONAGEM
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!editingVehicle.primaryColor || !editingVehicle.secundaryColor || !editingVehicle.pearlescentColor || !editingVehicle.interiorColor || !editingVehicle.dashboardColor || !editingVehicle.rimColor || !editingVehicle.rimsType || !editingVehicle.rims || !editingVehicle.windows || !editingVehicle.plateModel|| !editingVehicle.plate) {
            toast.warn(`Todos os campos devem ser preenchidos!`);
        } else {
            const confirm = window.confirm("Tem certeza de que deseja editar as informações do veículo?");
            if (!confirm) {
                return;
            } else {
                await axios
                .put("http://localhost:8800/vehicles/" + editingVehicle.id, {
                    primaryColor: editingVehicle.primaryColor,
                    secundaryColor: editingVehicle.secundaryColor,
                    pearlescentColor: editingVehicle.pearlescentColor,
                    interiorColor: editingVehicle.interiorColor,
                    dashboardColor: editingVehicle.dashboardColor,
                    rimColor: editingVehicle.rimColor,
                    rimsType: editingVehicle.rimsType,
                    rims: editingVehicle.rims,
                    windows: editingVehicle.windows,
                    plateModel: editingVehicle.plateModel,
                    plate: editingVehicle.plate,
                })
                .then(({ data }) => {
                    toast.success(`Veículo salva!`);
                    setShowEdit(false);
                    setUpdateListVehicle(prevState => !prevState);
                })
                .catch(({ data }) => {
                    toast.error(`Erro ao salvar veículo ${JSON.stringify(data)}!`)
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

                <h2>Editar Veículo:</h2>

                <label>
                    Cor Primaria: 
                    <select className='list-select' id="select-primaryColor" name="primaryColor" style={{color: editingVehicle.primaryColor}} onChange={handleChange} value={editingVehicle.primaryColor} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione uma cor</option>
                        {colors.map((color, index) => (
                        <option key={index} value={color.hex} style={{color:`${color.hex}`}}>
                            {index + 1} - {color.name}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Cor Secundaria: 
                    <select className='list-select' id="select-secundaryColor" name="secundaryColor" style={{color: editingVehicle.secundaryColor}} onChange={handleChange} value={editingVehicle.secundaryColor} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione uma cor</option>
                        {colors.sort((a, b) => a.name.localeCompare(b.name)).map((color, index) => (
                        <option key={index} value={color.hex} style={{color:`${color.hex}`}}>
                            {index + 1} - {color.name}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Cor do Perolado: 
                    <select className='list-select' id="select-pearlescentColor" name="pearlescentColor" style={{color: editingVehicle.pearlescentColor}} onChange={handleChange} value={editingVehicle.pearlescentColor} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione uma cor</option>
                        {colors.map((color, index) => (
                        <option key={index} value={color.hex} style={{color:`${color.hex}`}}>
                            {index + 1} - {color.name}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Cor do Interior: 
                    <select className='list-select' id="select-interiorColor" name="interiorColor" style={{color: editingVehicle.interiorColor}} onChange={handleChange} value={editingVehicle.interiorColor} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione uma cor</option>
                        {colors.map((color, index) => (
                        <option key={index} value={color.hex} style={{color:`${color.hex}`}}>
                            {index + 1} - {color.name}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Cor dos Detalhes: 
                    <select className='list-select' id="select-dashboardColor" name="dashboardColor" style={{color: editingVehicle.dashboardColor}} onChange={handleChange} value={editingVehicle.dashboardColor} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione uma cor</option>
                        {colors.map((color, index) => (
                        <option key={index} value={color.hex} style={{color:`${color.hex}`}}>
                            {index + 1} - {color.name}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Cor das Rodas: 
                    <select className='list-select' id="select-rimColor" name="rimColor" style={{color: editingVehicle.rimColor}} onChange={handleChange} value={editingVehicle.rimColor} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione uma cor</option>
                        {colors.map((color, index) => (
                        <option key={index} value={color.hex} style={{color:`${color.hex}`}}>
                            {index + 1} - {color.name}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Tipo das rodas:
                    <select className='list-select' id="select-rimsType" name="rimsType" onChange={handleChange} value={editingVehicle.rimsType} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione um tipo de rodas</option>
                        {Object.keys(rims).map((rimType, index) => (
                        <option key={index} value={rimType}>
                            {index + 1} - {rimType}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Rodas:
                    <select className='list-select' id="select-rims" name="rims" onChange={handleChange} value={editingVehicle.rims} disabled={!editingVehicle.manufacturer || !editingVehicle.model || !editingVehicle.rimsType} required>
                        <option value="">Selecione um modelo de rodas</option>
                        {filteredRims.map((rim, index) => (
                        <option key={index} value={rim.model}>
                            {index + 1} - {rim.model}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Vidros:
                    <select className='list-select' id="select-windows" name="windows" onChange={handleChange} value={editingVehicle.windows} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione um modelo de rodas</option>
                        {windows.map((window, index) => (
                        <option key={index} value={window.name}>
                            {index + 1} - {window.name}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Modelo da Placa:
                    <select className='list-select' id="select-plateModel" name="plateModel" onChange={handleChange} value={editingVehicle.plateModel} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required>
                        <option value="">Selecione um modelo de placa</option>
                        {licensePlates.map((plate, index) => (
                        <option key={index} value={plate.id}>
                            {index + 1} - {plate.name}
                        </option>
                        ))}
                    </select>
                </label>

                <label>
                    Placa:
                    <input className='list-input' type="text" name="plate" onChange={handleChange} minLength={7} value={editingVehicle.plate} disabled={!editingVehicle.manufacturer || !editingVehicle.model} required/>
                </label>

                <button type="submit" className='form-btn'>Salvar</button>

            </form>
        </div>
    );
}
  
export default Edit;