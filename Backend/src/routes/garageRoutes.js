import express from "express";
import { addGarages, decreaseGarageOccupation, deleteGarages, getGarages, getGaragesByCharacterId, getGaragesById, increaseGarageOccupation, updateGarages } from "../controllers/garagesController.js";

const router = express.Router();

router.get("/", getGarages);

router.get("/:id", getGaragesById);

router.get("/character/:id", getGaragesByCharacterId);

router.post("/", addGarages);

router.put("/:id", updateGarages);

router.put("/increase/:id", increaseGarageOccupation);

router.put("/decrease/:id", decreaseGarageOccupation);

router.delete("/:id", deleteGarages);

export default router;