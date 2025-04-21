import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [updateCharacterList, setUpdateCharacterList] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ errors, setErrors ] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            setLoading(true);
            setErrors(null);
            try {
                const res = await axios.get(`http://localhost:8800/characters`);
                setCharacters(res.data.sort((a, b) => (a.createDate > b.createDate ? -1 : 1)));
            } catch (error) {
                setErrors('Erro ao carregar personagens!');
                toast.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [updateCharacterList]);

    return { characters, setUpdateCharacterList, loading, errors };
};

export default useCharacters;