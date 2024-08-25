import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [updateCharacterList, setUpdateCharacterList] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/characters`);
                setCharacters(res.data.sort((a, b) => (a.createDate > b.createDate ? -1 : 1)));
            } catch (error) {
                toast.error(error);
            }
        };

        fetchCharacters();
    }, [updateCharacterList]);

    return { characters, setUpdateCharacterList };
};

export default useCharacters;