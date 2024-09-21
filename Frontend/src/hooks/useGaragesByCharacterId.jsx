import { useState, useEffect } from 'react';
import axios from 'axios';

const useGaragesByCharacterId = () => {
    const [garagesByCharacterId, setGaragesByCharacterId] = useState([]);
    const [updateGarageListByCharacterId, setUpdateGarageListByCharacterId] = useState(false);
    const [garageByCharacterId, setGarageByCharacterId] = useState(0);

    useEffect(() => {
        const fetchGarages = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/garages/character/` + garageByCharacterId );
                setGaragesByCharacterId(res.data.sort((a, b) => (a.createDate > b.createDate ? 1 : -1)));
            } catch (error) {
                toast.error(error);
            }
        };

        fetchGarages();
    }, [updateGarageListByCharacterId]);

    return { garagesByCharacterId, setUpdateGarageListByCharacterId, setGarageByCharacterId };
};

export default useGaragesByCharacterId;