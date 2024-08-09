import { React, useEffect, useState } from 'react';
import characters from '../../database/characters.json';
import { FaRegEdit, FaTrash  } from "react-icons/fa";

function List() {

  // Função de editar personagem
  const handleEdit = (id) => {
    alert(`Editar o personagem ${id}`);
  };

  // Função de excluir personagem
  const handleDelete = (id) => {
    alert(`Excluir o personagem ${id}`);
  };
  
  return (
    <div>
      <h3>
        <span1>RP</span1>
        <span2 style={{ flex: 2,}}>Username</span2>
        <span3>Data de Criação</span3>
        <span4></span4>
      </h3>
      <ul>
        {characters.map(character => (
          <us>
            <div key={character.id}>
              <span1>{character.rp}</span1>
              <span2 style={{ flex: 2}}>{character.username}</span2>
              <span3>{character.dataCriacao}</span3>
              <span4>
                <button style={{backgroundColor: '#0000', borderColor: '#0000'}} onClick={() => handleEdit(character.id)}>
                  <FaRegEdit style={{width: '50%', height: '50%' }}/>
                </button>
                <button style={{backgroundColor: '#0000', borderColor: '#0000'}} onClick={() => handleDelete(character.id)}>
                  <FaTrash style={{width: '50%', height: '50%' }}/>
                </button>
              </span4>
            </div>
          </us>
        ))}
      </ul>
    </div>
  );
}

export default List;