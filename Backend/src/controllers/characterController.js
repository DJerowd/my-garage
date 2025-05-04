import {db} from "../db.js";

// REQUISIÇÃO DE PERSONAGENS.
export const getCharacters = (_, res) => {
    const q = "SELECT * FROM characters";
    db.query(q, (err, data) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        if (data.length === 0) return res.status(204).json("Não há personagens cadastrados");
        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE PERSONAGENS PELO ID.
export const getCharactersById = (req, res) => {
    const q = "SELECT * FROM characters WHERE `id` = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        if (data.length === 0) return res.status(404).json("Nenhum personagem encontrado");
        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE PERSONAGENS PELO ID DE USUÁRIO.
export const getCharactersByUserId = (req, res) => {
    const q = "SELECT * FROM characters WHERE `userId` = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        if (data.length === 0) return res.status(404).json("Nenhum personagem encontrado");
        return res.status(200).json(data);
    });
};

// ADICIONAR NOVO PERSONAGEM.
export const addCharacter = (req, res) => {
    const q = "INSERT INTO characters(`userId`, `username`, `reputation`, `createDate`) VALUES (?)";
    const values = [ req.body.userId, req.body.username, req.body.reputation, req.body.createDate ];
    db.query(q, [values], (err) => {
        if (err) { 
            console.log(JSON.stringify(err));
            if (err.code === 'ER_DUP_ENTRY') { 
                return res.status(400).json("Personagem já cadastrado");
            }
            return res.status(500).json(err.code);
        }
        return res.status(200).json("Personagem criado com sucesso!");
    });
};

// ATUALIZAR PERSONAGEM EXISTENTE.
export const updateCharacter = (req, res) => {
    const q = "UPDATE characters SET `username` = ?, `reputation` = ? WHERE `id` = ?";
    const values = [ req.body.username, req.body.reputation ];
    db.query(q, [...values, req.params.id], (err, result) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        if (result.affectedRows === 0) return res.status(404).json("Personagem não encontrado");
        return res.status(200).json("Personagem atualizado com sucesso!");
    });
};

// EXCLUIR PERSONAGEM EXISTENTE.
export const deleteCharacter = (req, res) => {
    const q = "DELETE FROM characters WHERE `id` = (?)";
    db.query(q, [req.params.id], (err, result) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        if (result.affectedRows === 0) return res.status(404).json("Personagem não encontrado");
        return res.status(200).json("Personagem deletado com sucesso!");
    });
};