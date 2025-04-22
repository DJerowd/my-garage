import express from "express";
import { getCharacters, getCharactersById, getCharactersByUserId, addCharacter, updateCharacter, deleteCharacter } from "../controllers/characterController.js";

const router = express.Router();

router.get("/", getCharacters);

router.get("/:id", getCharactersById);

router.get("/user/:id", getCharactersByUserId);

router.post("/", addCharacter);

router.put("/:id", updateCharacter);

router.delete("/:id", deleteCharacter);

export default router;