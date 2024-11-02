import React, { useState } from 'react'
import MenuIcon from '../static/menu.svg';
import { useNavigate } from 'react-router-dom'

const HeaderButton = ({ hidden, menuItems }) => {
  return (
    <div
      className={`flex flex-col justify-between min-h-24 absolute top-full left-1/2 transform -translate-x-1/2 min-w-52 bg-white z-50 ${
        hidden ? 'invisible' : 'visible'
      }`}
    >
      {menuItems.map((item, index) => (
        <button
          key={index}
          className='w-full hover:bg-slate-300 flex-grow'
          onClick={() => item.onClick()}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default function Header({ onOpenUserSideMenu }) {
  const navigate = useNavigate();

  const [menuVisibility, setMenuVisibility] = useState({
    institucion: false,
    admisiones: false,
    administrativa: false,
    academica: false,
    comunidad: false,
  });

  const handleMouseEnter = (menuName) => {
    setMenuVisibility((prev) => ({
      ...prev,
      [menuName]: true,
    }));
  };

  const handleMouseLeave = (menuName) => {
    setMenuVisibility((prev) => ({
      ...prev,
      [menuName]: false,
    }));
  };

  // Definir los elementos de menú específicos para cada sección
  const menuItems = {
    institucion: [
      { label: 'Historia', onClick: () => navigate('/nuestra-institucion/historia') },
      { label: 'Misión y Visión', onClick: () => navigate('/nuestra-institucion/mision-vision') },
      { label: 'Símbolos', onClick: () => navigate('/nuestra-institucion/simbolos') },
    ],
    admisiones: [
      { label: 'Proceso de Admisión', onClick: () => navigate('/admisiones/proceso') },
      { label: 'Requisitos', onClick: () => navigate('/admisiones/requisitos') },
      { label: 'Fechas Importantes', onClick: () => navigate('/admisiones/fechas') },
    ],
    administrativa: [
      { label: 'Directiva', onClick: () => navigate('/gestion-administrativa/directiva') },
      { label: 'Recursos Humanos', onClick: () => navigate('/gestion-administrativa/rrhh') },
      { label: 'Finanzas', onClick: () => navigate('/gestion-administrativa/finanzas') },
    ],
    academica: [
      { label: 'Programas Académicos', onClick: () => navigate('/gestion-academica/programas') },
      { label: 'Plan de Estudios', onClick: () => navigate('/gestion-academica/plan-estudios') },
      { label: 'Evaluación', onClick: () => navigate('/gestion-academica/evaluacion') },
    ],
    comunidad: [
      { label: 'Eventos', onClick: () => navigate('/comunidad-ierv/eventos') },
      { label: 'Noticias', onClick: () => navigate('/comunidad-ierv/noticias') },
      { label: 'Proyectos', onClick: () => navigate('/comunidad-ierv/proyectos') },
    ],
  };

  const navElements = 'flex px-5 hover:border-b-2 hover:bg-slate-300 border-black items-center relative';

  return (
    <header className='flex relative justify-between gap-32 bg-white shadow-md shadow-slate-200 px-3 xl:px-10 min-h-20'>
      <section
        className='flex w-1/2 max-h-[80px] items-center hover:cursor-pointer gap-6 xl:gap-2'
        onClick={() => navigate('/inicio')}
      >
        <img className="xl:hidden h-1/2" src={MenuIcon} alt='Menu Icon' />
        <img
          className='xl:w-72 max-h-[57.25px]'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKB6IFGKa3JfTVhzH9tjQx5lnRrwJ_n4XIg&s'
          alt='Escudo del Colegio Rural Vanguardia'
        />
      </section>

      <nav className='invisible xl:visible flex mx-auto hover:cursor-pointer absolute left-1/2 transform -translate-x-1/2 h-full'>
        <ul className='flex'>
          <li
            className={navElements}
            onMouseEnter={() => handleMouseEnter('institucion')}
            onMouseLeave={() => handleMouseLeave('institucion')}
            onClick={() => navigate('/nuestra-institucion')}
          >
            Nuestra Institución
            <HeaderButton hidden={!menuVisibility.institucion} menuItems={menuItems.institucion} />
          </li>
          <li
            className={navElements}
            onMouseEnter={() => handleMouseEnter('admisiones')}
            onMouseLeave={() => handleMouseLeave('admisiones')}
            onClick={() => navigate('/admisiones')}
          >
            Admisiones
            <HeaderButton hidden={!menuVisibility.admisiones} menuItems={menuItems.admisiones} />
          </li>
          <li
            className={navElements}
            onMouseEnter={() => handleMouseEnter('administrativa')}
            onMouseLeave={() => handleMouseLeave('administrativa')}
            onClick={() => navigate('/gestion-administrativa')}
          >
            Gestión Administrativa
            <HeaderButton hidden={!menuVisibility.administrativa} menuItems={menuItems.administrativa} />
          </li>
          <li
            className={navElements}
            onMouseEnter={() => handleMouseEnter('academica')}
            onMouseLeave={() => handleMouseLeave('academica')}
            onClick={() => navigate('/gestion-academica')}
          >
            Gestión Académica
            <HeaderButton hidden={!menuVisibility.academica} menuItems={menuItems.academica} />
          </li>
          <li
            className={navElements}
            onMouseEnter={() => handleMouseEnter('comunidad')}
            onMouseLeave={() => handleMouseLeave('comunidad')}
            onClick={() => navigate('/comunidad-ierv')}
          >
            Comunidad IERV
            <HeaderButton hidden={!menuVisibility.comunidad} menuItems={menuItems.comunidad} />
          </li>
        </ul>
      </nav>

      <div className='my-auto'>
        <button
          className='px-5 py-1 rounded-full bg-blue-500 h-10 my-auto hover:bg-blue-600 text-white'
          onClick={() => navigate('/ingresar')}
        >
          Acceder
        </button>
        <button
          className='rounded-full w-10 h-10 bg-slate-300'
          onClick={() => onOpenUserSideMenu()}
        >
          P
        </button>
      </div>
    </header>
  );
}
