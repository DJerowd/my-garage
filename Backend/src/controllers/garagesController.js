import {db} from "../db.js";

// REQUISIÇÃO DE GARAGENS.
export const getGarages = (_, res) => {
    const q = "SELECT garages.id, characterId, username, slot, property, ocupation, capacity, location, price FROM garages LEFT JOIN characters ON garages.characterId = characters.id";
    // const q = "SELECT * FROM garages";
    db.query(q, (err, data) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        if (data.length === 0) return res.status(204).json("Não há garagens cadastrados");
        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE GARAGENS PELO ID.
export const getGaragesById = (req, res) => {
    const q = "SELECT garages.id, characterId, username, slot, property, ocupation, capacity, location, price FROM garages LEFT JOIN characters ON garages.characterId = characters.id WHERE garages.id = ?";
    // const q = "SELECT * FROM garages WHERE `id` = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        // if (data.length === 0) return res.status(404).json("Nenhuma garagem encontrada");
        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE GARAGENS PELO ID DO PERSONAGEM.
export const getGaragesByCharacterId = (req, res) => {
    const q = "SELECT garages.id, characterId, username, slot, property, ocupation, capacity, location, price FROM garages LEFT JOIN characters ON garages.characterId = characters.id WHERE characterId = ?";
    // const q = "SELECT * FROM garages WHERE `characterId` = ? ";
    if (!req.params.id) return res.status(400).json("É necessário informar a ID do personagem");
    db.query(q, [req.params.id], (err, data) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        // if (data.length === 0) return res.status(404).json("Nenhuma garagem encontrada");
        return res.status(200).json(data);
    });
};

// ADICIONAR NOVA GARAGEM.
export const addGarages = (req, res) => {
    const q = "INSERT INTO garages(`characterId`, `slot`, `property`, `ocupation`, `capacity`, `location`, `price`) VALUES (?)";
    const values = [ req.body.characterId, req.body.slot, req.body.property, req.body.ocupation, req.body.capacity, req.body.location, req.body.price ];
    db.query(q, [values], (err) => {
        if (err) { 
            console.log(JSON.stringify(err));
            if (err.code === 'ER_DUP_ENTRY') { 
                return res.status(400).json("Garagem já cadastrada");
            }
            return res.status(500).json(err.code);
        }
        return res.status(200).json("Garagem criada com sucesso");
    });
};

// ATUALIZAR GARAGEM EXISTENTE.
export const updateGarages = (req, res) => {
    const q = "UPDATE garages SET `property` = ?, `capacity` = ?, `location` = ?, `price` = ? WHERE `id` = ?";
    const values = [ req.body.property, req.body.capacity, req.body.location, req.body.price ];
    db.query(q, [...values, req.params.id], (err, result) => {
        if (err) { 
            console.log(JSON.stringify(err));
            if (err.code === 'ER_DUP_ENTRY') { 
                return res.status(400).json("Garagem já cadastrada");
            }
            return res.status(500).json(err.code);
        }
        if (result.affectedRows === 0) return res.status(404).json("Garagem não encontrada");
        return res.status(200).json("Garagem atualizada com sucesso");
    });
};

// EXCLUIR GARAGEM EXISTENTE.
export const deleteGarages = (req, res) => {
    const q = "DELETE FROM garages WHERE `id` = (?)";
    db.query(q, [req.params.id], (err, result) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json(err.code);
        }
        if (result.affectedRows === 0) return res.status(404).json("Garagem não encontrada");
        return res.status(200).json("Garagem deletada com sucesso");
    });
};

// FUNÇÃO PARA AUMENTAR A OCUPAÇÂO DE UMA GARAGEM.
export const increaseGarageOccupation = (req, res) => {
    const q = `UPDATE garages SET ocupation = IF(ocupation + 1 <= capacity, ocupation + 1, capacity) WHERE id = ?`;
    db.query(q, [req.params.id], (err, result) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json({ message: "Erro ao aumentar ocupação", error: err });
        }
        if (result.affectedRows === 0) return res.status(404).json("Garagem não encontrada");
        return res.status(200).json({ message: "Ocupação aumentada com sucesso" });
    });
};

// FUNÇÃO PARA REDUZIR A OCUPAÇÂO DE UMA GARAGEM.
export const decreaseGarageOccupation = (req, res) => {
    const q = `UPDATE garages SET ocupation = IF(ocupation > 0, ocupation - 1, 0) WHERE id = ?`;
    db.query(q, [req.params.id], (err, result) => {
        if (err) {
            console.log(JSON.stringify(err));
            return res.status(500).json({ message: "Erro ao diminuir ocupação", error: err });
        }
        if (result.affectedRows === 0) return res.status(404).json("Garagem não encontrada");
        return res.status(200).json({ message: "Ocupação diminuída com sucesso" });
    });
};