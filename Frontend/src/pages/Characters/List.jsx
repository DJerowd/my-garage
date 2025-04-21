import { React } from 'react';
import { format } from 'date-fns';
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';

import '../../Styles/layout.css';
import '../../Styles/grid.css';
import '../../Styles/responsive.css';

function List({ charactersByUserId, setUpdateCharactersListByUserId, currentPage, itemsPerPage }) {

  // OBTÉM OS USUÁRIOS PARA A PÁGINA ATUAL
  const currentcharacters = charactersByUserId.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
  );

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
        setUpdateCharactersListByUserId(prevState => !prevState);
        toast.success(`Personagem ${id} excluido!`);
      })
      .catch(({ data }) => toast.error(data)
      );
    }
  };

  //  LISTA VAZIA PARA SER EXIBIDA QUANDO NÃO HOUVER NENHUM PERSONAGEM.
  if (JSON.stringify(charactersByUserId) == '[]') {
    return (
        <table>
            {/* HEADER DA TABELA */}
            <th id='characters-list'>
              <td></td>
              <td>RP</td>
              <td>Username</td>
              <td>Data de Criação</td>
              <td></td>
            </th>
            {/* DADOS DA TABELA */}
            <tr id='none-list'>
                <td>Nenhum personagem encontrado.</td>
            </tr>
        </table>
    );
  }
  
  return (
    <table>
      {/* HEADER DA TABELA */}
      <th id='characters-list'>
        <td id="index"></td>
        <td id="rp">RP</td>
        <td id="name">Username</td>
        <td id="date">Data de Criação</td>
        <td id="btn"></td>
      </th>
      {/* DADOS DA TABELA */}
      {currentcharacters.map((character, index) => (
        <tr key={character.id} id='characters-list'>
          <td id="index">{index + 1}</td>
          <td id="rp">{character.reputation}</td>
          <td id="name">{character.username}</td>
          <td id="date">{format(new Date(character.createDate), 'dd/MM/yyyy')}</td>
          <td id="btn">
            <button onClick={() => handleEdit(character.id)}>
              <FaRegEdit/>
            </button>
            <button onClick={() => handleDelete(character.id)}>
              <FaTrash/>
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default List;