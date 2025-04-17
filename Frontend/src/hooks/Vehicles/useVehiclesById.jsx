import { useState, useEffect } from 'react';
import axios from 'axios';

const useVehiclesById = () => {
    const [ vehicle, setVehicle ] = useState([]);
    const [ updateList, setUpdateList ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ errors, setErrors ] = useState(null);
    const [ vehicleId, setVehicleId ] = useState(0);

    useEffect(() => {
        const fetchVehicle = async () => {
            setLoading(true);
            setErrors(null);
            try {
                const res = await axios.get(`http://localhost:8800/vehicles/` + vehicleId);
                setVehicle(res.data.sort((a, b) => (a.createDate > b.createDate ? 1 : -1)));
            } catch (error) {
                setErrors('Erro ao carregar usuários');
            } finally {
                setLoading(false);
            }
        };

        fetchVehicle();
    }, [updateList]);

    return { vehicle, setUpdateList, loading, errors, setVehicleId };
};

export default useVehiclesById;