import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharactersById = () => {
    const [ character, setCharacter ] = useState([]);
    const [ updateList, setUpdateList ] = useState(false);
    const [ characterId, setCharacterId ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const [ errors, setErrors ] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            setLoading(true);
            setErrors(null);
            try {
                const res = await axios.get(`http://localhost:8800/characters/` + characterId);
                setCharacter(res.data.sort((a, b) => (a.createDate > b.createDate ? 1 : -1)));
            } catch (error) {
                setErrors('Erro ao carregar personagem');
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [updateList]);

    return { character, setUpdateList, setCharacterId, loading, errors };
};

export default useCharactersById;