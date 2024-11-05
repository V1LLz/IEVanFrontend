import React, { useState } from 'react';
import axios from 'axios';
import Escudo from '../static/escudo.webp';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../static/Frente-IERV.webp';

const Login = () => {
  const [correo, setCorreo] = useState('');  // Antes era 'email'
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        _id: "",  // Puedes enviar el _id vacío si no lo necesitas en este punto
        nombreApellido: "", // O agrega los valores que consideres si necesitas más datos
        correo: correo,  // Asegúrate de que el nombre del campo sea 'correo' como en el backend
        numeroCelular: "",  // Puedes enviarlo vacío si no es necesario para el login
        password: password, 
        rol: {}  // En caso de que se espere un rol, pero puedes dejarlo vacío si no es necesario en el login
      });

      console.log('Respuesta exitosa:', response.data);
      navigate('/inicio');

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión, verifica tus credenciales.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div 
      className="flex items-center justify-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      <form 
        onSubmit={handleLogin} 
        className="bg-white p-6 rounded-lg shadow-lg w-2/5 relative z-10"
      >
        <div className='flex justify-between items-center'>
          <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
          <img className='h-fit w-14 cursor-pointer' src={Escudo} alt="Escudo" onClick={() => navigate('/')}/>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="usuario@correo.com"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contraseña"
            required
          />
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
};

export default Login;
