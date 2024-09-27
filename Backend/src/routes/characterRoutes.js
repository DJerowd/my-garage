import express from "express";
import { getCharacters, getCharactersByUserId, addCharacter, updateCharacter, deleteCharacter } from "../controllers/characterController.js";

const router = express.Router();

router.get("/", getCharacters);

router.get("/user/:id", getCharactersByUserId);

router.post("/", addCharacter);

router.put("/:id", updateCharacter);

router.delete("/:id", deleteCharacter);

export default router;