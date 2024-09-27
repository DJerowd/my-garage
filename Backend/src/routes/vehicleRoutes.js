import express from "express";
import { addVehicle, deleteVehicle, getVehicles, getVehiclesById, getVehiclesByGarageId, getVehiclesByCharacterId, updateVehicle, updateVehicleGarage } from "../controllers/vehiclesController.js";

const router = express.Router();

router.get("/", getVehicles);

router.get("/:id", getVehiclesById);

router.get("/character/:id", getVehiclesByCharacterId);

router.get("/garage/:id", getVehiclesByGarageId);

router.post("/", addVehicle);

router.put("/:id", updateVehicle);

router.put("/garage/:id", updateVehicleGarage);

router.delete("/:id", deleteVehicle);

export default router;