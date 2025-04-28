import {db} from "../db.js";

// REQUISIÇÃO DE VEÍCULOS.
export const getVehicles = (_, res) => {
    const q = "SELECT vehicles.id, vehicles.characterId, username, vehicles.garageId, property, manufacturer, model, primaryColor, secundaryColor, pearlescentColor, interiorColor, dashboardColor, rimColor, rimsType, rims, windows, plateModel, plate FROM ((vehicles LEFT JOIN characters ON vehicles.characterId = characters.id) LEFT JOIN garages ON vehicles.garageId = garages.id)";
    // const q = "SELECT * FROM vehicles";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err.code);
        // if (data.length === 0) return res.status(204).json("Não há veículos cadastrados");
        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE VEÍCULOS POR ID.
export const getVehiclesById = (req, res) => {
    const q = "SELECT vehicles.id, vehicles.characterId, username, vehicles.garageId, property, manufacturer, model, primaryColor, secundaryColor, pearlescentColor, interiorColor, dashboardColor, rimColor, rimsType, rims, windows, plateModel, plate FROM ((vehicles LEFT JOIN characters ON vehicles.characterId = characters.id) LEFT JOIN garages ON vehicles.garageId = garages.id) WHERE vehicles.id = ?";
    // const q = "SELECT * FROM vehicles WHERE `id` = ?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err.code);
        // if (data.length === 0) return res.status(404).json("Nenhum modelo encontrado");
        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE VEÍCULOS POR ID DO USUÁRIO.
export const getVehiclesByCharacterId = (req, res) => {
    const q = "SELECT vehicles.id, vehicles.characterId, username, vehicles.garageId, property, manufacturer, model, primaryColor, secundaryColor, pearlescentColor, interiorColor, dashboardColor, rimColor, rimsType, rims, windows, plateModel, plate FROM ((vehicles LEFT JOIN characters ON vehicles.characterId = characters.id) LEFT JOIN garages ON vehicles.garageId = garages.id) WHERE vehicles.characterId = ?";
    // const q = "SELECT * FROM vehicles WHERE `characterId` = ?";
    if (!req.params.id) return res.status(400).json("É necessário informar a ID do personagem");
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err.code);
        // if (data.length === 0) return res.status(404).json("Nenhum veículo encontrado");
        return res.status(200).json(data);
    });
};

// REQUISIÇÃO DE VEÍCULOS PELO ID DA GARAGEM.
export const getVehiclesByGarageId = (req, res) => {
    const q = "SELECT vehicles.id, vehicles.characterId, username, vehicles.garageId, property, manufacturer, model, primaryColor, secundaryColor, pearlescentColor, interiorColor, dashboardColor, rimColor, rimsType, rims, windows, plateModel, plate FROM ((vehicles LEFT JOIN characters ON vehicles.characterId = characters.id) LEFT JOIN garages ON vehicles.garageId = garages.id) WHERE vehicles.garageId = ?";
    // const q = "SELECT * FROM vehicles WHERE `garageId` = ?";
    if (!req.params.id) return res.status(400).json("É necessário informar a ID da garagem");
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err.code);
        // if (data.length === 0) return res.status(404).json("Nenhum veículo encontrado");
        return res.status(200).json(data);
    });
};

// ADICIONAR NOVO VEÍCULO.
export const addVehicle = (req, res) => {
    const q = "INSERT INTO vehicles(`characterId`, `garageId`, `manufacturer`, `model`, `primaryColor`, `secundaryColor`, `pearlescentColor`, `interiorColor`, `dashboardColor`, `rimColor`, `rimsType`, `rims`, `windows`, `plateModel`, `plate`) VALUES (?)";
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
        req.body.plateModel,
        req.body.plate,
    ];
    db.query(q, [values], (err) => {
        if (err) { 
            if (err.code === 'ER_DUP_ENTRY') { 
                return res.status(400).json("Veículo já cadastrado");
            }
            return res.status(500).json(err.code);
        }
        return res.status(200).json("Veículo salvo com sucesso!");
    });
};

// ATUALIZAR VEÍCULO EXISTENTE.
export const updateVehicle = (req, res) => {
    const q = "UPDATE vehicles SET ?  WHERE `id` = ?";
    const values = [
        req.body,
        req.params.id
    ];
    db.query(q, values, (err, result) => {
        if (err) { 
            if (err.code === 'ER_DUP_ENTRY') { 
                return res.status(400).json("Veículo já cadastrado");
            }
            return res.status(500).json(err.code);
        }
        if (result.affectedRows === 0) return res.status(404).json("Veículo não encontrado");
        return res.status(200).json("Veículo atualizado com sucesso");
    });
};

// ALTERAR GARAGEM DO VEÍCULO.
export const updateVehicleGarage = (req, res) => {
    const q = "UPDATE vehicles SET garageId = ? WHERE id = ?";
    const values = [
        req.body.garageId,
        req.params.id
    ];
    db.query(q, values, (err, result) => {
        if (err) { 
            if (err.code === 'ER_DUP_ENTRY') { 
                return res.status(400).json("Veículo já cadastrado");
            }
            return res.status(500).json(err.code);
        }
        if (result.affectedRows === 0) return res.status(404).json("Veículo não encontrado");
        return res.status(200).json("Garagem alterada com sucesso!");
    });
};

// EXCLUIR VEÍCULO EXISTENTE.
export const deleteVehicle = (req, res) => {
    const q = "DELETE FROM vehicles WHERE `id` = (?)";
    db.query(q, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err.code);
        if (result.affectedRows === 0) return res.status(404).json("Veículo não encontrado");
        return res.status(200).json("Veículo excluido com sucesso!");
    });
};
