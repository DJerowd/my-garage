import {db} from "../db.js";

// REQUISIÇÃO DE GARAGENS.
export const getGarages = (_, res) => {
    const q = "SELECT * FROM garages";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE GARAGENS PELO ID.
export const getGaragesById = (req, res) => {
    const q = "SELECT * FROM garages WHERE `id` = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE GARAGENS PELO ID DO PERSONAGEM.
export const getGaragesByCharacterId = (req, res) => {
    const q = "SELECT * FROM garages WHERE `characterId` = ?";

    if (!req.params.id) {
        return res.status(400).json({ message: "Character ID is required." });
    }

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};