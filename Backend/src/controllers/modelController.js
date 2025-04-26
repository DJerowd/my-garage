import {db} from "../db.js";

// REQUISIÇÃO DE MODELOS.
export const getModels = (_, res) => {
    const q = "SELECT * FROM vehicle_models";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err.code);
        if (data.length === 0) return res.status(204).json("Não há modelos cadastrados");
        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE MODELOS POR ID.
export const getModelsById = (req, res) => {
    const q = "SELECT * FROM vehicle_models WHERE `id` = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err.code);
        if (data.length === 0) return res.status(404).json("Nenhum modelo encontrado");
        return res.status(200).json(data);
    });
};

// ADICIONAR NOVO MODELO.
export const addModel = (req, res) => {
    const q = "INSERT INTO vehicle_models(`classId`, `manufacturerId`, `model`, `hash`, `price`, `seats`) VALUES (?)";
    const values = [
        req.body.classId,
        req.body.manufacturerId,
        req.body.model,
        req.body.hash,
        req.body.price,
        req.body.seats,
    ];
    db.query(q, [values], (err) => {
        if (err) { 
            if (err.code === 'ER_DUP_ENTRY') { 
                return res.status(400).json("Modelo já cadastrado");
            }
            return res.status(500).json(err.code);
        }
        return res.status(201).json("Modelo criado com sucesso");
    });
};

// ATUALIZAR MODELO EXISTENTE.
export const updateModel = (req, res) => {
    const q = "UPDATE vehicle_models SET ? WHERE `id` = ?";
    const values = [
        req.body
    ];
    db.query(q, [...values, req.params.id], (err, result) => {
        if (err) return res.status(500).json(err.code);
        if (result.affectedRows === 0) return res.status(404).json("Modelo não encontrado");
        return res.status(200).json("Modelo atualizado com sucesso");
    });
};

// EXCLUIR MODELO EXISTENTE.
export const deleteModel = (req, res) => {
    const q = "DELETE FROM vehicle_models WHERE `id` = (?)";
    db.query(q, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err.code);
        if (result.affectedRows === 0) return res.status(404).json("Modelo não encontrado");
        return res.status(200).json("Modelo deletado com sucesso");
    });
};