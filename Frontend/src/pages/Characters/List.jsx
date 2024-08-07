import { React, useEffect, useState } from 'react';
import characters from '../../database/characters.json';

function List() {

  // Função de editar personagem
  const handleEdit = (id) => {
    console.log(`Editar o personagem ${id}`);
  };

  // Função de excluir personagem
  const handleDelete = (id) => {
    console.log(`Excluir o personagem ${id}`);
  };
  
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '2px solid white' }}>
        <span style={{ width: '8%', textAlign: 'center'}}>RP </span>
        <span style={{ flex: 2, marginInline: '20px' }}>Username</span>
        <span style={{ width: '24%', textAlign: 'center'}}>Data de Criação</span>
      </h3>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <ul>
          {characters.map(character => (
            <div key={character.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid white', padding: '10px 0' }}>
              <span style={{ width: '8%', textAlign: 'center'}}>{character.rp}</span>
              <span style={{ flex: 2, marginInline: '20px' }}>{character.username}</span>
              <span style={{ width: '24%', textAlign: 'center'}}>{character.dataCriacao}</span>
            </div>
          ))}
        </ul>
        
      </div>
    </div>
  );
}

export default List;