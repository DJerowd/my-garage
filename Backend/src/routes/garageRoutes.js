import express from "express";
import { getGarages } from "../controllers/garagesController.js";

const router = express.Router();

router.get("/", getGarages);

export default router;