import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useCharacter = () => useContext(Context);

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const addCharacter = (character) => {
    setCharacters([...characters, { ...character, id: Date.now(), ativo: false }]);
  };

  const deleteCharacter = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  const toggleAtivo = (id) => {
    setCharacters(characters.map(character =>
      character.id === id ? { ...character, ativo: !character.ativo } : character
    ));
  };

  return (
    <Context.Provider value={{ characters, addCharacter, deleteCharacter, toggleAtivo }}>
      {children}
    </Context.Provider>
  );
};