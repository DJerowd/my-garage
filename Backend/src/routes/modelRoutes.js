import express from "express";
import { getModels, getModelsById, addModel, updateModel, deleteModel } from "../controllers/modelController.js";

const router = express.Router();

router.get("/", getModels);

router.get("/:id", getModelsById);

router.post("/", addModel);

router.put("/:id", updateModel);

router.delete("/:id", deleteModel);

export default router;