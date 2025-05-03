import { React, useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify';

import axios from 'axios';

import '../../Styles/layout.css';
import '../../Styles/responsive.css';

function Edit({ setUpdateCharactersListByUserId, setShowEdit, editingCharacter, setEditingCharacter }) {
    const [character, setCharacter] = useState({
        id: '',
        userId: '',
        username: '',
        reputation: 0,
        createDate: ''
    });

    // DEFINE DADOS DE PERSONAGEM
    useEffect(() => {
        setCharacter(editingCharacter);
    }, [editingCharacter]);

    // FUNÇÃO PARA EDITAR DADOS DO PERSONAGEM
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!character.username || !character.reputation || !character.createDate) {
            toast.warn(`Todos os campos devem ser preenchidos!`);
        } else {
            const confirm = window.confirm("Tem certeza de que deseja editar as informações deste personagem?");
            if (!confirm) {
                return;
            } else {
                await axios
                .put("http://localhost:8800/characters/" + character.id, {
                    userId: character.userId,
                    username: character.username,
                    reputation: character.reputation,
                    createDate: character.createDate,
                })
                .then(({ data }) => {
                    toast.success(`Personagem ${character.username} ${character.reputation} ${character.createDate} salvo!`);
                    setShowEdit(false)
                    setUpdateCharactersListByUserId(prevState => !prevState);
                })
                .catch(({ data }) => 
                    toast.error(`Erro ao salvar personagem ${JSON.stringify(data)}!`
                ));
                setCharacter({
                    id: 0,
                    username: '',
                    reputation: 0,
                    createDate: ''
                });
            }
        }
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
    
    return (
        <div className='content-modal'>
            <form onSubmit={handleSubmit}>

                <button type='button' className='close-btn' onClick={() => setShowEdit(false)}><IoClose/></button>

                <h2>Editar Personagem:</h2>

                <label>
                    RP:
                    <input className='list-input' type="number" value={character.reputation} onChange={(e) => setCharacter({ ...character, reputation: e.target.value })} min="1" max={"9999"} />
                </label>
        
                <label>
                    Nome: 
                    <input className='list-input' type="text" value={character.username} onChange={(e) => setCharacter({ ...character, username: e.target.value })}/>
                </label>

                <label>
                    Data de Criação:
                    <input className='list-input' type="date" value={character.createDate} onChange={(e) => setCharacter({ ...character, createDate: e.target.value })} />
                </label>
        
                <button type="submit" className='form-btn'>Salvar</button>

                <button type='button' className='list-btn' onClick={() => handleDelete(character.id)}>
                    <FaTrash/>
                </button>
            </form>
        </div>
    );
}
  
export default Edit;