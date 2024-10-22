// src/api.js
import axios from 'axios';

export const getEventos = async () => {
  try {
    const response = await axios.get('http://localhost:8080/evento');
    return response.data; // Esto asume que la API devuelve un array de eventos
  } catch (error) {
    console.error('Error al obtener eventos', error);
    return [];
  }
};
