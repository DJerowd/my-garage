import { useState, useEffect } from 'react';
import { getLoggedInUser } from '../../utils/auth.js';
import axios from 'axios';

const useCharactersByUserId = () => {
    const [charactersByUserId, setCharactersByUserId] = useState([]);
    const [updateCharactersListByUserId, setUpdateCharactersListByUserId] = useState(false);
    const loggedInUser = getLoggedInUser();

    useEffect(() => {
        const fetchGarages = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/characters/user/` + loggedInUser.id );
                setCharactersByUserId(res.data.sort((a, b) => (a.createDate > b.createDate ? 1 : -1)));
            } catch (error) {
                toast.error(error);
            }
        };

        fetchGarages();
    }, [updateCharactersListByUserId]);

    return { charactersByUserId, setUpdateCharactersListByUserId };
};

export default useCharactersByUserId;