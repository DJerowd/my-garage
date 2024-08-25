import express from "express";
import { addVehicle, deleteVehicle, getVehicles, updateVehicle } from "../controllers/vehiclesController.js";

const router = express.Router();

router.get("/", getVehicles);

router.post("/", addVehicle);

router.put("/:id", updateVehicle);

router.delete("/:id", deleteVehicle);

export default router;