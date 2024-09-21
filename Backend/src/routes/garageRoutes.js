import express from "express";
import { getGarages, getGaragesByCharacterId, getGaragesById } from "../controllers/garagesController.js";

const router = express.Router();

router.get("/", getGarages);

router.get("/:id", getGaragesById);

router.get("/character/:id", getGaragesByCharacterId);

export default router;