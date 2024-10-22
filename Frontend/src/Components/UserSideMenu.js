import React, { useState } from 'react';
import Bookmark from '../static/bookmark.svg';
import Album from '../static/album.svg';
import User from '../static/user.svg';
import Calendar from '../static/calendar-today.svg';

import { useNavigate } from 'react-router-dom';

const UserSideMenu = ({ open, togglePanel }) => {
  const [userType, setUserType] = useState('usuario'); // Para cambiar entre usuario y profesor
  const [role, setRole] = useState('consultor'); // Para cambiar entre roles: consultor, editor, admin
  const navigate = useNavigate();

  const handleClickAdministrarPost = () => {
    if (role === 'editor' || role === 'admin') {
      navigate('/administrar-posts'); // Solo navegamos si es editor o admin
    }
    togglePanel();
  };

  const handleClickAdministrarEventos = () => {
    if (role === 'editor' || role === 'admin') {
      navigate('/administrar-eventos'); // Solo navegamos si es editor o admin
    }
    togglePanel();
  };

  const handleLogout = () => {
    togglePanel();
    // Aquí puedes agregar la lógica de cerrar sesión si es necesario
  };

  return (
    <>
      {/* Fondo oscuro semitransparente */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={togglePanel} // Al hacer clic en el fondo, se cierra el menú
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white text-white shadow-lg transform transition-transform duration-300 z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <section className='text-xl flex justify-between text-slate-600 mb-6'>
            <div className='text-left'>
              <h4 className='text-lg'>Menú</h4>
              <h3 className='text-2xl font-bold text-slate-800'>Nombre de Usuario</h3>
              <p className='text-sm text-slate-600'>{userType === 'profesor' ? 'Profesor' : 'Usuario'}</p>
              <p className='text-sm text-slate-600'>Rol: {role.charAt(0).toUpperCase() + role.slice(1)}</p>
            </div>
            <p className='mr-3 cursor-pointer' onClick={togglePanel}>x</p>
          </section>

          {/* Opciones según el rol */}
          {(role === 'editor' || role === 'admin') && (
            <>
              <button 
                onClick={handleClickAdministrarPost}
                className="flex gap-2 hover:bg-slate-200 text-lg py-2 px-4 rounded-full border-slate-400 font-bold text-slate-400 border-2 mb-4"
              >
                <img src={Album} alt="administrar post" />
                Administrar Post
              </button>

              <button 
                onClick={handleClickAdministrarEventos}
                className="flex gap-2 hover:bg-slate-200 text-lg py-2 px-4 rounded-full border-slate-400 font-bold text-slate-400 border-2 mb-4"
              >
                <img src={Calendar} alt="administrar eventos" />
                Administrar Eventos
              </button>
            </>
          )}

          {(role === 'admin') && (
            <button className="flex gap-2 hover:bg-slate-200 text-lg py-2 px-4 rounded-full border-slate-400 font-bold text-slate-400 border-2 mb-4">
              <img src={User} alt="administrar usuarios" />
              Administrar Usuarios
            </button>
          )}

          {/* Solo los profesores tienen el botón de Citas */}
          {userType === 'profesor' && (
            <button className="flex gap-2 hover:bg-slate-200 text-lg py-2 px-4 rounded-full border-slate-400 font-bold text-slate-400 border-2 mb-4">
              <img src={Bookmark} alt="administrar citas" />
              Citas
            </button>
          )}

          {/* Botón de Cerrar Sesión */}
          <div className="mt-auto">
            <button 
              className="border-red-600 border-2 text-red-600 hover:bg-red-700 hover:text-white py-2 px-4 rounded-full w-full"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>

          {/* Botones de Testeo para Cambiar de Usuario/Rol */}
          <div className="flex flex-col mt-4">
            <button
              className="text-black py-1 px-2 border border-black mb-2"
              onClick={() => {
                setUserType('usuario');
                setRole('consultor');
              }}
            >
              Usuario Consultor
            </button>
            <button
              className="text-black py-1 px-2 border border-black mb-2"
              onClick={() => {
                setUserType('usuario');
                setRole('editor');
              }}
            >
              Usuario Editor
            </button>
            <button
              className="text-black py-1 px-2 border border-black mb-2"
              onClick={() => {
                setUserType('usuario');
                setRole('admin');
              }}
            >
              Usuario Administrador
            </button>
            <button
              className="text-black py-1 px-2 border border-black mb-2"
              onClick={() => {
                setUserType('profesor');
                setRole('editor');
              }}
            >
              Profesor Editor (Citas)
            </button>
            <button
              className="text-black py-1 px-2 border border-black mb-2"
              onClick={() => {
                setUserType('profesor');
                setRole('admin');
              }}
            >
              Profesor Administrador (Citas)
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSideMenu;
