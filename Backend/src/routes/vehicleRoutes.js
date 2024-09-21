import express from "express";
import { addVehicle, deleteVehicle, getVehicles, getVehiclesById, getVehiclesByGarageId, updateVehicle } from "../controllers/vehiclesController.js";

const router = express.Router();

router.get("/", getVehicles);

router.get("/:id", getVehiclesById);

router.get("/garage/:id", getVehiclesByGarageId);

router.post("/", addVehicle);

router.put("/:id", updateVehicle);

router.delete("/:id", deleteVehicle);

export default router;