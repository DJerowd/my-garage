import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios';
import manufacturers from '../../data/manufacturers.json';
import colors from '../../data/colors.json';
import rims from '../../data/rims.json';
import windows from '../../data/windows.json';
import licensePlates from '../../data/license-plates.json';

import '../../Styles/layout.css';
import '../../Styles/grid.css';

function Form({ ids, garageLimit, charactersByUserId, garagesByCharacterId, setUpdateVehicleListByGarageId, increaseOccupation, errorsCharacters, errorsGarages, errorsVehicles }) {
  const [vehicle, setVehicle] = useState({
    manufacturer: '',
    model: '',
    primaryColor: '',
    secundaryColor: '',
    pearlescentColor: '',
    interiorColor: '',
    dashboardColor: '',
    rimColor: '',
    rimsType: '',
    rims: '',
    windows: '',
    plateModel: '',
    plate: ''
  });
  const [models, setModels] = useState([]);
  const [filteredRims, setFilteredRims] = useState([]);

  // CARREGAR OS MODELOS DE VEÍCULOS DA API A PARTIR DA MONTADORA SELECIONADA.
  useEffect(() => {
    if (vehicle.manufacturer) {
      axios.get(`https://gta.vercel.app/api/vehicles/manufacturer/${vehicle.manufacturer}/vehicles`)
      .then(response => {
        const modelNames = Object.keys(response.data)
        setModels(modelNames);
      })
      .catch(error => console.error('Erro ao buscar modelos:', error)
      );
    }
  }, [vehicle.manufacturer]);

  // FUNÇÃO PARA INSERIR DADOS DO VEÍCULO NA VARIAVEL.
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rimsType') {
      setFilteredRims(rims[e.target.value] || []);
      setVehicle(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else if (name === 'plate') {
      let newValue = value.toUpperCase();
      newValue = newValue.substring(0, 8);
      setVehicle(prevState => ({
        ...prevState,
        [name]: newValue
      }));
    } else {
      setVehicle(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  // FUNÇÃO PARA SALVAR AS INFORMAÇÕES DE VEÍCULO NO BANCO DE DADOS.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (garageLimit) {
      toast.warn(`Limite da garagem atingido!`);
    } else if (!ids.characterId || !ids.garageId) {
      toast.warn(`Selecione uma garagem primeiro!`);
    } else if (!vehicle.manufacturer || !vehicle.model || !vehicle.primaryColor || !vehicle.secundaryColor || !vehicle.pearlescentColor || !vehicle.interiorColor || !vehicle.dashboardColor || !vehicle.rimColor || !vehicle.rimsType || !vehicle.rims || !vehicle.windows || !vehicle.plate) {
      toast.warn(`Todos os campos devem ser preenchidos!`);
    } else {
      await axios
      .post("http://localhost:8800/vehicles", {
        characterId: ids.characterId,
        garageId: ids.garageId,
        manufacturer: vehicle.manufacturer,
        model: vehicle.model,
        primaryColor: vehicle.primaryColor,
        secundaryColor: vehicle.secundaryColor,
        pearlescentColor: vehicle.pearlescentColor,
        interiorColor: vehicle.interiorColor,
        dashboardColor: vehicle.dashboardColor,
        rimColor: vehicle.rimColor,
        rimsType: vehicle.rimsType,
        rims: vehicle.rims,
        windows: vehicle.windows,
        plateModel: vehicle.plateModel,
        plate: vehicle.plate,
      })
      .then(({ data }) => {
        setUpdateVehicleListByGarageId(prevState => !prevState);
        increaseOccupation(ids.garageId);
        toast.success(`Veículo salvo!`);
      })
      .catch(({ data }) =>
        toast.error(`Erro ao salvar veículo!`)
      );
      setVehicle({
        characterId: ids.characterId,
        garageId: ids.garageId,
        manufacturer: '',
        model: '',
        primaryColor: '',
        secundaryColor: '',
        pearlescentColor: '',
        interiorColor: '',
        dashboardColor: '',
        rimColor: '',
        rimsType: '',
        rims: '',
        windows: '',
        plateModel: '',
        plate: ''
      });
    }
  };

  if (!ids.characterId || !ids.garageId) {
    return (
        <form onSubmit={handleSubmit}>
            <h3>Primeiro selecione uma garagem</h3>
        </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>

      <label>
        Marca:
        <select id="select-select-manufacturer" name="manufacturer" onChange={handleChange} value={vehicle.manufacturer} disabled={!ids.characterId || !ids.garageId} required>
          <option value="">Selecione uma marca</option>
          {manufacturers.map((manufacturer, index) => (
            <option key={index} value={manufacturer.brand}>
              {index + 1} - {manufacturer.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Modelo:
        <select id="select-model" name="model" onChange={handleChange} value={vehicle.model} disabled={!vehicle.manufacturer} required>
          <option value="">Selecione um modelo</option>
          {models.map((model, index) => (
            <option key={index} value={model}>
              {index + 1} - {model.charAt(0).toUpperCase() + model.slice(1)}
            </option>
          ))}
        </select>
      </label>


      <label>
        Cor Primaria: 
        <select id="select-primaryColor" name="primaryColor" style={{color: vehicle.primaryColor}} onChange={handleChange} value={vehicle.primaryColor} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <select id="select-secundaryColor" name="secundaryColor" style={{color: vehicle.secundaryColor}} onChange={handleChange} value={vehicle.secundaryColor} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <select id="select-pearlescentColor" name="pearlescentColor" style={{color: vehicle.pearlescentColor}} onChange={handleChange} value={vehicle.pearlescentColor} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <select id="select-interiorColor" name="interiorColor" style={{color: vehicle.interiorColor}} onChange={handleChange} value={vehicle.interiorColor} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <select id="select-dashboardColor" name="dashboardColor" style={{color: vehicle.dashboardColor}} onChange={handleChange} value={vehicle.dashboardColor} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <select id="select-rimColor" name="rimColor" style={{color: vehicle.rimColor}} onChange={handleChange} value={vehicle.rimColor} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <select id="select-rimsType" name="rimsType" onChange={handleChange} value={vehicle.rimsType} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <select id="select-rims" name="rims" onChange={handleChange} value={vehicle.rims} disabled={!vehicle.manufacturer || !vehicle.model || !vehicle.rimsType} required>
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
        <select id="select-windows" name="windows" onChange={handleChange} value={vehicle.windows} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <select id="select-plateModel" name="plateModel" onChange={handleChange} value={vehicle.plateModel} disabled={!vehicle.manufacturer || !vehicle.model} required>
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
        <input type="text" name="plate" onChange={handleChange} minLength={7} value={vehicle.plate} disabled={!vehicle.manufacturer || !vehicle.model} required/>
      </label>

      <button type="submit" disabled={!vehicle.manufacturer || !vehicle.model}>Salvar Veículo</button>
    </form>
  );
}

export default Form;