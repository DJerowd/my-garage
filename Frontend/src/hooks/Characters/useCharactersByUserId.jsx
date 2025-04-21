import { useState, useEffect } from 'react';
import { getLoggedInUser } from '../../utils/auth.js';
import axios from 'axios';

const useCharactersByUserId = () => {
    const [charactersByUserId, setCharactersByUserId] = useState([]);
    const [updateCharactersListByUserId, setUpdateCharactersListByUserId] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ errors, setErrors ] = useState(null);

    const loggedInUser = getLoggedInUser();

    useEffect(() => {
        const fetchGarages = async () => {
            setLoading(true);
            setErrors(null);
            try {
                const res = await axios.get(`http://localhost:8800/characters/user/` + loggedInUser.id );
                setCharactersByUserId(res.data.sort((a, b) => (a.createDate > b.createDate ? 1 : -1)));
            } catch (error) {
                setErrors('Erro ao carregar personagens!');
                toast.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchGarages();
    }, [updateCharactersListByUserId]);

    return { charactersByUserId, setUpdateCharactersListByUserId, loading, errors };
};

export default useCharactersByUserId;