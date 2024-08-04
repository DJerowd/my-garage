import React, { useState } from 'react';
import './Styles.css';

function Form({ marcas, modelos }) {
  const [veiculo, setVeiculo] = useState({
    marca: '',
    modelo: '',
    garagem: '',
    cor: '',
    descricao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeiculo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(veiculo);
    // Aqui você pode adicionar a lógica para enviar os dados para um backend ou salvar localmente
  };

  return (
    <form onSubmit={handleSubmit}>

      <label className='car-form'>
        Marca:
        <select name="marca" onChange={handleChange} value={veiculo.marca}>
          <option value="">Selecione uma marca</option>
          {marcas.map((marca, index) => (
            <option key={index} value={marca}>{marca.charAt(0).toUpperCase() + marca.slice(1)}</option>
          ))}
        </select>
      </label><br/>

      <label className='car-form'>
        Modelo:
        <select name="modelo" onChange={handleChange} value={veiculo.modelo} disabled={!veiculo.marca}>
          <option value="">Selecione um modelo</option>
          {modelos.map((modelo, index) => (
            <option key={index} value={modelo}>{modelo.charAt(0).toUpperCase() + modelo.slice(1)}</option>
          ))}
        </select>
      </label><br/>

      <label className='car-form'>
        Garagem:
        <input type="text" name="garagem" onChange={handleChange} value={veiculo.garagem} />
      </label><br/>

      <label className='car-form'>
        Cor:
        <input type="text" name="cor" onChange={handleChange} value={veiculo.cor} />
      </label><br/>

      <label className='car-form'>
        Descrição:
        <textarea name="descricao" onChange={handleChange} value={veiculo.descricao}></textarea>
      </label><br/>
      
      <button type="submit">Registrar Veículo</button>
    </form>
  );
}

export default Form;