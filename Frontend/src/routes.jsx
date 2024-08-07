import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index.jsx";
import Characters from "./pages/Characters/Index.jsx";
import Garages from "./pages/Garages/Index.jsx";
import Vehicles from "./pages/Vehicles/Index.jsx";


function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/garages" element={<Garages />} />
            <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
    )
}

export default MainRoutes;