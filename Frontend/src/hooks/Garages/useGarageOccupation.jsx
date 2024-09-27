import { useState, useCallback } from 'react';
import axios from 'axios';

const useGarageOccupation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const increaseOccupation = useCallback(async (garageId) => {
    setLoading(true);
    setError(null);
    try {
      await axios.put(`http://localhost:8800/garages/increase/${garageId}`);
      // Você pode adicionar aqui qualquer lógica adicional após o sucesso da requisição
    } catch (err) {
      setError(err.message || 'Erro ao aumentar ocupação');
    } finally {
      setLoading(false);
    }
  }, []);


  const decreaseOccupation = useCallback(async (garageId) => {
    setLoading(true);
    setError(null);
    try {
      await axios.put(`http://localhost:8800/garages/decrease/${garageId}`);
      // Você pode adicionar aqui qualquer lógica adicional após o sucesso da requisição
    } catch (err) {
      setError(err.message || 'Erro ao diminuir ocupação');
    } finally {
      setLoading(false);
    }
  }, []);

  return { increaseOccupation, decreaseOccupation, loading, error };
};

export default useGarageOccupation;