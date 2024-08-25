import {db} from "../db.js";

export const getVehicles = (_, res) => {
    const q = "SELECT * FROM vehicles";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};


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


export const updateVehicle = (req, res) => {
    const q = "UPDATE vehicles SET  WHERE `id` = '?'";
};


export const deleteVehicle = (req, res) => {
    const q = "DELETE FROM vehicles WHERE `id` = (?)";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Veículo excluido com sucesso!");
    });
};