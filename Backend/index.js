import express from "express";
import cors from "cors";
import characterRoutes from "./src/routes/characterRoutes.js";
import garageRoutes from "./src/routes/garageRoutes.js";
import vehicleRoutes from "./src/routes/vehicleRoutes.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/characters", characterRoutes)
app.use("/garages", garageRoutes)
app.use("/vehicles", vehicleRoutes)

app.listen(8800);