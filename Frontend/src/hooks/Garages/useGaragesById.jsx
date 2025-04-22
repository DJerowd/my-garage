import { useState, useEffect } from 'react';
import axios from 'axios';

const useGaragesById = () => {
    const [ garage, setGarage ] = useState([]);
    const [ updateList, setUpdateList ] = useState(false);
    const [ garageId, setGarageId ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const [ errors, setErrors ] = useState(null);

    useEffect(() => {
        const fetchGarage = async () => {
            setLoading(true);
            setErrors(null);
            try {
                const res = await axios.get(`http://localhost:8800/garages/` + garageId);
                setGarage(res.data.sort((a, b) => (a.createDate > b.createDate ? 1 : -1)));
            } catch (error) {
                setErrors('Erro ao carregar garagem');
            } finally {
                setLoading(false);
            }
        };

        fetchGarage();
    }, [updateList]);

    return { garage, setUpdateList, setGarageId, loading, errors };
};

export default useGaragesById;