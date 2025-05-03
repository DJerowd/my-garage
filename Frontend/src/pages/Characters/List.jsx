import { React } from 'react';

import '../../Styles/layout.css';
import '../../Styles/character.css';
import '../../Styles/grid.css';
import '../../Styles/responsive.css';

function List({ charactersByUserId, setUpdateCharactersListByUserId, currentPage, itemsPerPage, setShowAdd, setShowEdit, setEditingCharacter }) {

  // OBTÉM OS USUÁRIOS PARA A PÁGINA ATUAL
  const currentcharacters = charactersByUserId.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );

  // FUNÇÃO PARA EDITAR O PERSONAGEM
  const handleEdit = (character) => {
    setShowEdit(true);
    setEditingCharacter(character);
  };

  //  LISTA VAZIA PARA SER EXIBIDA QUANDO NÃO HOUVER NENHUM PERSONAGEM
  if (JSON.stringify(charactersByUserId) == '[]') {
    return (
        <table className='table'>
          <h3 className='error'>Nenhum personagem encontrado.</h3>
        </table>
    );
  }
  
  return (
    <table className='table'>
      <div className='list' style={{gridTemplateColumns: `repeat(calc(${itemsPerPage} / 2), 1fr)`}}>
        {currentcharacters.map((character, index) => (
          <section key={character.id} className="item character-item" onClick={() => handleEdit(character)}>
            <a className='img-preview character-preview'>
              <img src={`/empty-profile.png`} alt={`${character.id}`} onError={(e) => {e.target.onerror = null; e.target.src = '../../assets/icon.png'; }}/>
              <b >{character.reputation}</b>
            </a>
            <h3 >{character.username}</h3>
          </section>
        ))}
      </div>
    </table>
  );
}

export default List;