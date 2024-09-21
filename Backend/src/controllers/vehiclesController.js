import {db} from "../db.js";

// REQUISIÇÃO DE VEÍCULOS.
export const getVehicles = (_, res) => {
    const q = "SELECT * FROM vehicles";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE VEÍCULOS PELO ID.
export const getVehiclesById = (req, res) => {
    const q = "SELECT * FROM vehicles WHERE `id` = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE VEÍCULOS PELO ID DA GARAGEM.
export const getVehiclesByGarageId = (req, res) => {
    const q = "SELECT * FROM vehicles WHERE `garageId` = ?";

    if (!req.params.id) {
        return res.status(400).json({ message: "Garage ID is required." });
    }

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// ADICIONAR NOVO VEÍCULO.
export const addVehicle = (req, res) => {
    const q = "INSERT INTO vehicles(`characterId`, `garageId`, `manufacturer`, `model`, `primaryColor`, `secundaryColor`, `pearlescentColor`, `interiorColor`, `dashboardColor`, `rimColor`, `rimsType`, `rims`, `windows`, `plate`) VALUES (?)";

    const values = [
        req.body.characterId,
        req.body.garageId,
        req.body.manufacturer,
        req.body.model,
        req.body.primaryColor,
        req.body.secundaryColor,
        req.body.pearlescentColor,
        req.body.interiorColor,
        req.body.dashboardColor,
        req.body.rimColor,
        req.body.rimsType,
        req.body.rims,
        req.body.windows,
        req.body.plate,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Veículo salvo com sucesso!");
    });
};

// ATUALIZAR VEÍCULO EXISTENTE.
export const updateVehicle = (req, res) => {
    const q = "UPDATE vehicles SET  WHERE `id` = '?'";
};

// EXCLUIR VEÍCULO EXISTENTE.
export const deleteVehicle = (req, res) => {
    const q = "DELETE FROM vehicles WHERE `id` = (?)";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Veículo excluido com sucesso!");
    });
};