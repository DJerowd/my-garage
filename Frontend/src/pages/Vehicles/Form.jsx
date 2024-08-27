import { React, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import manufacturers from '../../data/manufacturers.json';
import colors from '../../data/colors.json';
import rims from '../../data/rims.json';
import windows from '../../data/windows.json';
import './Styles.css';

function Form({ characters, garages, setUpdateVehicleList }) {
  const [vehicle, setVehicle] = useState({
    characterId: '',
    garageId: '',
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
    if (!vehicle.characterId || !vehicle.garageId || !vehicle.manufacturer || !vehicle.model || !vehicle.primaryColor || !vehicle.secundaryColor || !vehicle.pearlescentColor || !vehicle.interiorColor || !vehicle.dashboardColor || !vehicle.rimColor || !vehicle.rimsType || !vehicle.rims || !vehicle.windows || !vehicle.plate) {
      toast.warn(`Todos os campos devem ser preenchidos!`);
    } else {
      await axios
      .post("http://localhost:8800/vehicles", {
        characterId: vehicle.characterId,
        garageId: vehicle.garageId,
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
        plate: vehicle.plate,
      })
      .then(({ data }) => {
        setUpdateVehicleList(prevState => !prevState);
        toast.success(`Veículo salvo!`);
      })
      .catch(({ data }) =>
        toast.error(`Erro ao salvar veículo!`)
      );
      setVehicle({
        characterId: vehicle.characterId,
        garageId: vehicle.garageId,
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
        plate: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adicionar Novo Veículo:</h3>

      <line style={{textAlign: 'center'}}>___________________________________________________</line>
      
      <label>
        Personagem:
        <select name="characterId" onChange={handleChange} required>
          <option value="">Selecione um personagem</option>
          {characters.map((character, index) => (
            <option key={character.value} value={character.id}>
              {index + 1} - {character.username}
            </option>
          ))}
        </select>
      </label>

      <label>
        Garagem:
        <select name="garageId" onChange={handleChange} disabled={!vehicle.characterId} required>
          <option value="">Selecione uma garagem</option>
          {garages.map((garage, index) => (
            <option key={garage.value} value={garage.id}>
              {garage.property} ({garage.ocupation}|{garage.capacity})
            </option>
          ))}
        </select>
      </label>

      <line style={{textAlign: 'center'}}>___________________________________________________</line>

      <label>
        Marca:
        <select name="manufacturer" onChange={handleChange} value={vehicle.manufacturer} disabled={!vehicle.garageId} required>
          <option value="">Selecione uma marca</option>
          {manufacturers.map((manufacturer, index) => (
            <option key={index} value={manufacturer}>{manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1)}</option>
          ))}
        </select>
      </label>

      <label>
        Montadora:
        <select name="model" onChange={handleChange} value={vehicle.model} disabled={!vehicle.garageId || !vehicle.manufacturer} required>
          <option value="">Selecione um modelo</option>
          {models.map((model, index) => (
            <option key={index} value={model}>{model.charAt(0).toUpperCase() + model.slice(1)}</option>
          ))}
        </select>
      </label>

      <line style={{textAlign: 'center'}}>___________________________________________________</line>

      <label>
        Cor Primaria: 
        <select style={{borderColor: vehicle.primaryColor}} name="primaryColor" onChange={handleChange} value={vehicle.primaryColor} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor Secundaria: 
        <select style={{borderColor: vehicle.secundaryColor}} name="secundaryColor" onChange={handleChange} value={vehicle.secundaryColor} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor do Perolado: 
        <select style={{borderColor: vehicle.pearlescentColor}} name="pearlescentColor" onChange={handleChange} value={vehicle.pearlescentColor} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor do Interior: 
        <select style={{borderColor: vehicle.interiorColor}} name="interiorColor" onChange={handleChange} value={vehicle.interiorColor} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor dos Detalhes: 
        <select style={{borderColor: vehicle.dashboardColor}} name="dashboardColor" onChange={handleChange} value={vehicle.dashboardColor} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor das Rodas: 
        <select style={{borderColor: vehicle.rimColor}} name="rimColor" onChange={handleChange} value={vehicle.rimColor} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <line style={{textAlign: 'center'}}>___________________________________________________</line>

      <label>
        Tipo das rodas:
        <select name="rimsType" onChange={handleChange} value={vehicle.rimsType} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required>
          <option value="">Selecione um tipo de rodas</option>
          {Object.keys(rims).map((rimType, index) => (
            <option key={index} value={rimType}>{rimType}</option>
          ))}
        </select>
      </label>

      <label>
        Rodas:
        <select name="rims" onChange={handleChange} value={vehicle.rims} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model || !vehicle.rimsType} required>
          <option value="">Selecione um modelo de rodas</option>
          {filteredRims.map((rim, index) => (
            <option key={index} value={rim.model}>{rim.model}</option>
          ))}
        </select>
      </label>

      <label>
        Vidros:
        <select name="windows" onChange={handleChange} value={vehicle.windows} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required>
          <option value="">Selecione um modelo de rodas</option>
          {windows.map((window, index) => (
            <option key={index} value={window}>{window}</option>
          ))}
        </select>
      </label>

      <line style={{textAlign: 'center'}}>___________________________________________________</line>

      <label>
        Placa:
        <input type="text" name="plate" onChange={handleChange} value={vehicle.plate} disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model} required/>
      </label>

      <line style={{textAlign: 'center'}}>___________________________________________________</line>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '8px', marginBottom: '10px'}}>
        <button style={{paddingInline: '4px'}} type="submit" disabled={!vehicle.garageId || !vehicle.manufacturer || !vehicle.model}>Salvar Veículo</button>
      </div>

    </form>
  );
}

export default Form;