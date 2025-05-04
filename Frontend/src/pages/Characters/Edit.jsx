import { React, useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';

import '../../Styles/layout.css';
import '../../Styles/responsive.css';

function Edit({ setUpdateCharactersListByUserId, setShowEdit, editingCharacter, setEditingCharacter }) {

    // FUNÇÃO PARA EDITAR DADOS DO PERSONAGEM
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!editingCharacter.username || !editingCharacter.reputation || !editingCharacter.createDate) {
            toast.warn(`Todos os campos devem ser preenchidos!`);
        } else {
            const confirm = window.confirm("Tem certeza de que deseja editar as informações deste personagem?");
            if (!confirm) {
                return;
            } else {
                await axios
                .put("http://localhost:8800/characters/" + editingCharacter.id, {
                    username: editingCharacter.username,
                    reputation: editingCharacter.reputation,
                })
                .then(({ data }) => {
                    toast.success(`Personagem ${editingCharacter.username} ${editingCharacter.reputation} ${editingCharacter.createDate} salvo!`);
                    setShowEdit(false)
                    setUpdateCharactersListByUserId(prevState => !prevState);
                })
                .catch(({ data }) => 
                    toast.error(`Erro ao salvar personagem ${JSON.stringify(data)}!`
                ));
                setEditingCharacter({
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
                setShowEdit(false)
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

                <div className='btn-bar'>
                    <button type='button' className='close-btn' onClick={() => setShowEdit(false)}><IoClose/></button>
                    <button type='button' className='list-btn' onClick={() => handleDelete(editingCharacter.id)}><FaTrash/></button>
                </div>

                <h2>Editar Personagem:</h2>

                <label>
                    RP:
                    <input className='list-input' type="number" value={editingCharacter.reputation} onChange={(e) => setEditingCharacter({ ...editingCharacter, reputation: e.target.value })} min="1" max={"9999"} />
                </label>
        
                <label>
                    Nome: 
                    <input className='list-input' type="text" value={editingCharacter.username} onChange={(e) => setEditingCharacter({ ...editingCharacter, username: e.target.value })}/>
                </label>
        
                <button type="submit" className='form-btn'>Salvar</button>

            </form>
        </div>
    );
}
  
export default Edit;