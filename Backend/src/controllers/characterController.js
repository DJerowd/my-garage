import {db} from "../db.js";

// REQUISIÇÃO DE PERSONAGENS.
export const getCharacters = (_, res) => {
    const q = "SELECT * FROM characters";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE PERSONAGENS PELO ID DE USUÁRIO.
export const getCharactersByUserId = (req, res) => {
    const q = "SELECT * FROM characters WHERE `userId` = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};



// ADICIONAR NOVO PERSONAGEM.
export const addCharacter = (req, res) => {
    const q = "INSERT INTO characters(`userId`, `username`, `reputation`, `createDate`) VALUES (?)";

    const values = [
        req.body.userId,
        req.body.username,
        req.body.reputation,
        req.body.createDate,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Personagem criado com sucesso!");
    });
};



// ATUALIZAR PERSONAGEM EXISTENTE.
export const updateCharacter = (req, res) => {
    const q = "UPDATE characters SET `userId` = ?, `username` = ?, `reputation` = ?, `createDate` = ? WHERE `id` = ?";

    const values = [
        req.body.userId,
        req.body.username,
        req.body.reputation,
        req.body.createDate,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Personagem atualizado com sucesso!");
    });
};



// EXCLUIR PERSONAGEM EXISTENTE.
export const deleteCharacter = (req, res) => {
    const q = "DELETE FROM characters WHERE `id` = (?)";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Personagem deletado com sucesso!");
    });
};