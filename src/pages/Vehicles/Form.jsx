import React, { useState } from 'react';
import garages from '../../data/garages.json';
import './Styles.css';

function Form({ manufacturers, models }) {
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
    rims: '',
    plate: '',
    description: ''
  });

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

      <label className='form-car'>
        Garagem:
        <select name="garage" onChange={handleChange} value={veiculo.garage}>
          <option value="">Selecione uma garagem</option>
          {garages.map(garage => (
            <option key={garage.id} value={garage.id}>{garage.property} {garage.capacity}/{garage.ocupation}</option>
          ))}
        </select>
      </label>

      <label className='form-car'>
        Marca:
        <select name="manufacturer" onChange={handleChange} value={veiculo.manufacturer} disabled={!veiculo.garage}>
          <option value="">Selecione uma marca</option>
          {manufacturers.map((manufacturer, index) => (
            <option key={index} value={manufacturer}>{manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1)}</option>
          ))}
        </select>
      </label>

      <label className='form-car'>
        Modelo:
        <select name="model" onChange={handleChange} value={veiculo.model} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.manufacturer}>
          <option value="">Selecione um modelo</option>
          {models.map((model, index) => (
            <option key={index} value={model}>{model.charAt(0).toUpperCase() + model.slice(1)}</option>
          ))}
        </select>
      </label>

      <label className='form-car'>
        Cor Primaria:
        <input type="text" name="primaryColor" onChange={handleChange} value={veiculo.primaryColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}/>
      </label>

      <label className='form-car'>
        Cor Secundaria:
        <input type="text" name="secundaryColor" onChange={handleChange} value={veiculo.secundaryColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}/>
      </label>

      <label className='form-car'>
        Cor do Interior:
        <input type="text" name="interiorColor" onChange={handleChange} value={veiculo.interiorColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}/>
      </label>

      <label className='form-car'>
        Cor dos Detalhes:
        <input type="text" name="dashboardColor" onChange={handleChange} value={veiculo.dashboardColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}/>
      </label>

      <label className='form-car'>
        Cor das Rodas:
        <input type="text" name="rimColor" onChange={handleChange} value={veiculo.rimColor} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}/>
      </label>

      <label className='form-car'>
        Rodas:
        <input type="text" name="rims" onChange={handleChange} value={veiculo.rims} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}/>
      </label>

      <label className='form-car'>
        Placa:
        <input type="text" name="plate" onChange={handleChange} value={veiculo.plate} disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}/>
      </label>

      <label className='form-car'>
        Descrição:
        <textarea name="description" onChange={handleChange} value={veiculo.description}disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}></textarea>
      </label>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '4px'}}>
      <button type="submit" disabled={!veiculo.garage || !veiculo.manufacturer || !veiculo.model}>Salvar Veículo</button>
      </div>
    </form>
  );
}

export default Form;