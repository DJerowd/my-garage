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
        <a></a>
        <a>RP</a>
        <a style={{ flex: 2,}}>Username</a>
        <a>Data de Criação</a>
        <a></a>
      </h3>
      <ul>
        {characters.map((character, index) => (
          <us>
            <div key={character.id}>
              <a>{index + 1}</a>
              <a>{character.reputation}</a>
              <a style={{ flex: 2}}>{character.username}</a>
              <a>{format(new Date(character.createDate), 'dd/MM/yyyy')}</a>
              <a>
                <button onClick={() => handleEdit(character.id)}>
                  <FaRegEdit/>
                </button>
                <button onClick={() => handleDelete(character.id)}>
                  <FaTrash/>
                </button>
              </a>
            </div>
          </us>
        ))}
      </ul>
    </div>
  );
}

export default List;