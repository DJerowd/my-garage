import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Index.jsx";
import SignIn from "./pages/SignIn/Index.jsx";
import SignUp from "./pages/SignUp/Index.jsx";
import Profile from "./pages/Profile/Index.jsx";
import Settings from "./pages/Settings/Index.jsx";
import Characters from "./pages/Characters/Index.jsx";
import Garages from "./pages/Garages/Index.jsx";
import Vehicles from "./pages/Vehicles/Index.jsx";
import VehicleDetails from "./pages/VehicleDetails/Index.jsx";


function MainRoutes(){
    return (
        <Routes>
            <Route path="*" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user_profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/garages" element={<Garages />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicle/:id" element={<VehicleDetails />} />
        </Routes>
    )
}

export default MainRoutes;