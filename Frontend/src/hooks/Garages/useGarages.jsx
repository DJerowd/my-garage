import { useState, useEffect } from 'react';
import axios from 'axios';

const useGarages = () => {
    const [garages, setGarages] = useState([]);
    const [updateGarageList, setUpdateGarageList] = useState(false);

    useEffect(() => {
        const fetchGarages = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/garages`);
                setGarages(res.data.sort((a, b) => (a.slot > b.slot ? 1 : -1)));
            } catch (error) {
                toast.error(error);
            }
        };

        fetchGarages();
    }, [updateGarageList]);

    return { garages, setUpdateGarageList };
};

export default useGarages;