import { React, useState, useEffect } from 'react';
import axios from 'axios';
import garages from '../../database/garages.json';
import manufacturers from '../../data/manufacturers.json';
import colors from '../../data/colors.json';
import rimsTypes from '../../data/rimsTypes.json';
import rims from '../../data/rims.json';
import './Styles.css';

function Form() {
  const [veiculo, setVeiculo] = useState({
    garage: '',
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
    plate: '',
    description: ''
  });

  const [models, setModels] = useState([]);

  useEffect(() => {
    if (veiculo.manufacturer) {
      axios.get(`https://gta.vercel.app/api/vehicles/manufacturer/${veiculo.manufacturer}/vehicles`)
        .then(response => {
          const modelNames = Object.keys(response.data)
          setModels(modelNames);
        })
        .catch(error => console.error('Erro ao buscar modelos:', error));
    }
  }, [veiculo.manufacturer]);


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'plate') {
      let newValue = value.toUpperCase();
      newValue = newValue.substring(0, 8);
      setVeiculo(prevState => ({
        ...prevState,
        [name]: newValue
      }));

    } else {
      setVeiculo(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(veiculo);
    // Aqui você pode adicionar a lógica para enviar os dados para um backend ou salvar localmente
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <h3>Adicionar Novo Veículo:</h3>

      <label>
        Garagem:
        <select name="garage" onChange={handleChange} value={veiculo.garage}>
          <option value="">Selecione uma garagem</option>
          {garages.map(garage => (
            <option key={garage.value} value={garage.id}>{garage.property} {garage.capacity}/{garage.ocupation}</option>
          ))}
        </select>
      </label>

      <label>
        Marca:
        <select name="manufacturer" onChange={handleChange} value={veiculo.manufacturer} disabled={!veiculo.garage}>
          <option value="">Selecione uma marca</option>
          {manufacturers.map((manufacturer, index) => (
            <option key={index} value={manufacturer}>{manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1)}</option>
          ))}
        </select>
      </label>

      <label>
        Modelo:
        <select name="model" onChange={handleChange} value={veiculo.model} disabled={!veiculo.garage || !veiculo.manufacturer}>
          <option value="">Selecione um modelo</option>
          {models.map((model, index) => (
            <option key={index} value={model}>{model.charAt(0).toUpperCase() + model.slice(1)}</option>
          ))}
        </select>
      </label>

      <h3 style={{textAlign: 'center'}}>__________________________________________</h3>

      <label>
        Cor Primaria: 
        <select style={{borderColor: veiculo.primaryColor}} name="primaryColor" onChange={handleChange} value={veiculo.primaryColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor Secundaria: 
        <select style={{borderColor: veiculo.secundaryColor}} name="secundaryColor" onChange={handleChange} value={veiculo.secundaryColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor do Interior: 
        <select style={{borderColor: veiculo.interiorColor}} name="interiorColor" onChange={handleChange} value={veiculo.interiorColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor dos Detalhes: 
        <select style={{borderColor: veiculo.dashboardColor}} name="dashboardColor" onChange={handleChange} value={veiculo.dashboardColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <label>
        Cor das Rodas: 
        <select style={{borderColor: veiculo.rimColor}} name="rimColor" onChange={handleChange} value={veiculo.rimColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>
          <option value="">Selecione uma cor</option>
          {colors.map((color, index) => (
            <option key={index} value={color.hex}>{color.id} {color.description}</option>
          ))}
        </select>
      </label>

      <h3 style={{textAlign: 'center'}}>__________________________________________</h3>

      <label>
        Tipo das rodas:
        <select name="rimsType" onChange={handleChange} value={veiculo.rimsType} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>
          <option value="">Selecione um tipo de rodas</option>
          {rimsTypes.map((rim, index) => (
            <option key={index} value={rim.type}>{rim.type}</option>
          ))}
        </select>
      </label>

      <label>
        Rodas:
        <select name="rimsType" onChange={handleChange} value={veiculo.rimsType} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>
          <option value="">Selecione um modelo de rodas</option>
          {rims.map((rim, index) => (
            <option key={index} value={rim.id}>{rim.type} - {rim.model}</option>
          ))}
        </select>
      </label>

      <h3 style={{textAlign: 'center'}}>__________________________________________</h3>

      <label>
        Placa:
        <input type="text" name="plate" onChange={handleChange} value={veiculo.plate} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}/>
      </label>

      {/* <label className='form-car'>
        Descrição:
        <textarea name="description" onChange={handleChange} value={veiculo.description}disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}></textarea>
      </label> */}

      <h3 style={{textAlign: 'center'}}>__________________________________________</h3>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '8px', marginBottom: '10px'}}>
        <button style={{paddingInline: '4px'}} type="submit" disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>Salvar Veículo</button>
      </div>
    </form>
  );
}

export default Form;