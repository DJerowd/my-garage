import { React } from 'react';
import { format } from 'date-fns';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';

function List({ characters, setUpdateCharacterList }) {

  // FUNÇÃO PARA EDITAR O PERSONAGEM.
  const handleEdit = (id) => {
    toast.success(`Personagem ${id} editado!`);
  };

  // FUNÇÃO PARA EXCLUIR O PERSONAGEM.
  const handleDelete = async (id) => {
    const confirm = window.confirm("Tem certeza de que deseja excluir este personagem? Todas as informações relacionadas a este personagem serão perdidas.");
    if (!confirm) {
      toast.error(`Exclusão cancelada!`);
      return;
    } else {
      await axios
      .delete("http://localhost:8800/characters/" + id)
      .then(({ data }) => {
        setUpdateCharacterList(prevState => !prevState);
        toast.success(`Personagem ${id} excluido!`);
      })
      .catch(({ data }) => toast.error(data)
      );
    }
  };
  
  return (
    <div>
      <h3>
        <span></span>
        <span1>RP</span1>
        <span2 style={{ flex: 2,}}>Username</span2>
        <span3>Data de Criação</span3>
        <span4></span4>
      </h3>
      <ul>
        {characters.map((character, index) => (
          <us>
            <div key={character.id}>
              <span>{index + 1}</span>
              <span1>{character.reputation}</span1>
              <span2 style={{ flex: 2}}>{character.username}</span2>
              <span3>{format(new Date(character.createDate), 'dd/MM/yyyy')}</span3>
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