import React, { useState } from 'react'
import MenuIcon from '../static/menu.svg';
import { useNavigate } from 'react-router-dom'

const HeaderButton = ({ hidden, menuItems }) => {
  return (
    <div
      className={`flex flex-col absolute top-full left-1/2 transform -translate-x-1/2 translate-y-[2px] min-w-52 bg-blue-500 text-white z-[2000]  ${
        hidden ? 'invisible' : 'visible'
      }`}
    >
      {menuItems.map((item, index) => (
        <button
          key={index}
          className='w-full hover:bg-blue-600 flex-grow py-2'
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
      { label: '¿Quienes Somos?', onClick: () => navigate('/nuestra-institucion/quienes-somos?') },
      { label: 'Misión y Visión', onClick: () => navigate('/nuestra-institucion#mision-vision') },
      { label: 'Principios y Valores', onClick: () => navigate('/nuestra-institucion#principios-valores') },
      { label: 'Símbolos Institucionales', onClick: () => navigate('/nuestra-institucion#simbolos-institucionales') },
      { label: 'Sedes', onClick: () => navigate('/nuestra-institucion/sedes') },
    ],
    admisiones: [],
    administrativa: [
      { label: 'Transparencia', onClick: () => navigate('/gestion-administrativa/transparencia') },
      { label: 'Comunicados', onClick: () => navigate('/gestion-administrativa/rrhh') },
      { label: 'Resoluciones', onClick: () => navigate('/gestion-administrativa/finanzas') },
      { label: 'Proyectos Pedagógicos Transversales', onClick: () => navigate('/gestion-administrativa/finanzas') },
      { label: 'SAC SEM Villavicencio', onClick: () => window.location.href = 'https://sac2.gestionsecretariasdeeducacion.gov.co/app_Login/?sec=91' }
    ],
    academica: [
      { label: 'PEI', onClick: () => navigate('/gestion-academica/documentos-institucionales#pei') },
      { label: 'Manual de Convivencia', onClick: () => navigate('/gestion-academica/documentos-institucionales#manual-convivencia') },
      { label: 'Plan de Estudios', onClick: () => navigate('/gestion-academica/documentos-institucionales#planes-estudio') },
      { label: 'Plataformas Academicas', onClick: () => navigate('/gestion-academica/plataformas-academicas') },
      { label: 'Biblioteca Virtual IERV', onClick: () => navigate('/gestion-academica/biblioteca-virtual-ierv') },

    ],
    comunidad: [
      { label: 'Eventos', onClick: () => navigate('/comunidad-ierv/eventos') },
      { label: 'Noticias', onClick: () => navigate('/comunidad-ierv/noticias') },
      { label: 'Proyectos', onClick: () => navigate('/comunidad-ierv/proyectos') },
    ],
  };

  const navElements = 'flex px-5 border-b-2 border-white hover:border-b-2 hover:border-blue-600 hover:bg-slate-300 border-black items-center relative';

  return (
    <header className='flex relative justify-between gap-32 bg-white shadow-md shadow-slate-200 px-3 xl:px-10 min-h-20 z-40'>
      <section
        className='flex w-1/2 max-h-[80px] items-center hover:cursor-pointer gap-6 xl:gap-2'
        onClick={() => navigate('/')}
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
            onClick={() => navigate('/admisiones')}
          >
            Admisiones
            <HeaderButton hidden={!menuVisibility.admisiones} menuItems={menuItems.admisiones} />
          </li>
          <li
            className={navElements}
            onMouseEnter={() => handleMouseEnter('institucion')}
            onMouseLeave={() => handleMouseLeave('institucion')}
          >
            Nuestra Institución
            <div className='w-full h-full absolute inset-0' onClick={() => navigate('/nuestra-institucion')}></div>
            <HeaderButton hidden={!menuVisibility.institucion} menuItems={menuItems.institucion} />
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
            
          >
            Gestión Académica
            <div className='w-full h-full absolute inset-0' onClick={() => navigate('/gestion-academica')}></div>
            <HeaderButton hidden={!menuVisibility.academica} menuItems={menuItems.academica} />
          </li>
          <li
            className={navElements}
            onMouseEnter={() => handleMouseEnter('comunidad')}
            onMouseLeave={() => handleMouseLeave('comunidad')}
          >
            Comunidad IERV
            <div className='w-full h-full absolute inset-0' onClick={() => navigate('/comunidad-ierv')}></div>
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
