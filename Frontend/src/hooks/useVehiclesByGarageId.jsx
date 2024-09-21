import { useState, useEffect } from 'react';
import axios from 'axios';

const useVehiclesByGarageId = () => {
    const [vehiclesByGarageId, setVehiclesByGarageId] = useState([]);
    const [updateVehicleListByGarageId, setUpdateVehicleListByGarageId] = useState(false);
    const [vehicleByGarageId, setVehicleByGarageId] = useState(0);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/vehicles/garage/` + vehicleByGarageId);
                setVehiclesByGarageId(res.data.sort((a, b) => (a.createDate > b.createDate ? 1 : -1)));
            } catch (error) {
                toast.error(error);
            }
        };

        fetchVehicles();
    }, [updateVehicleListByGarageId]);

    return { vehiclesByGarageId, setUpdateVehicleListByGarageId, setVehicleByGarageId };
};

export default useVehiclesByGarageId;