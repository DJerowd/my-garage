import { React, useEffect, useState } from 'react';
import characters from '../../database/characters.json';

function List() {

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3 style={{width: '8%', paddingInline: '10px', textAlign: 'center'}}>RP</h3>
        <h3 style={{width: '68%', paddingInline: '10px'}}>Username</h3>
        <h3 style={{width: '24%', paddingInline: '10px', textAlign: 'center'}}>Data de Criação</h3>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <ul style={{width: '8%', paddingInline: '10px', textAlign: 'center'}}>
          {characters.map(character => (
            <div key={character.id}>
              <div>{character.rp}</div>
            </div>
          ))}
        </ul>
        <ul style={{width: '68%', paddingInline: '10px'}}>
          {characters.map(character => (
            <div key={character.id}>
              <div>{character.username}</div>
            </div>
          ))}
        </ul>
        <ul style={{width: '24%', paddingInline: '10px', textAlign: 'center'}}>
          {characters.map(character => (
            <div key={character.id}>
              <div>{character.dataCriacao}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;