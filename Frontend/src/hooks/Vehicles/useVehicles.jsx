import { useState, useEffect } from 'react';
import axios from 'axios';

const useVehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const [updateVehicleList, setUpdateVehicleList] = useState(false);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/vehicles`);
                setVehicles(res.data.sort((a, b) => (a.createDate > b.createDate ? 1 : -1)));
            } catch (error) {
                toast.error(error);
            }
        };

        fetchVehicles();
    }, [updateVehicleList]);

    return { vehicles, setUpdateVehicleList };
};

export default useVehicles;