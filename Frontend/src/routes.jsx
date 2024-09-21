import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index.jsx";
import Login from "./pages/Login/Index.jsx";
import Register from "./pages/Register/Index.jsx";
import Profile from "./pages/Profile/Index.jsx";
import Characters from "./pages/Characters/Index.jsx";
import Garages from "./pages/Garages/Index.jsx";
import Vehicles from "./pages/Vehicles/Index.jsx";
import VehicleDetails from "./pages/VehicleDetails/Index.jsx";


function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user_profile" element={<Profile />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/garages" element={<Garages />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/details" element={<VehicleDetails />} />
        </Routes>
    )
}

export default MainRoutes;