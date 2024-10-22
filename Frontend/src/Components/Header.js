import React from 'react'
import MenuIcon from '../static/menu.svg';
import {Link, useNavigate } from 'react-router-dom'


export default function Header({onOpenUserSideMenu}) {
  const navigate = useNavigate();

  const NavBar = () => {
    const navElements = 'flex px-5 hover:border-b-2 hover:bg-slate-300 border-black items-center'
    return(
      <nav className='invisible xl:visible flex  mx-auto hover:cursor-pointer absolute left-1/2 transform -translate-x-1/2 h-full'> 
        <ul className='flex'>
          <li className={navElements} onClick={() => navigate('/institucion')}>Institución</li>
          <li className={navElements} onClick={() => navigate('/institucion')}>Articulos</li>
          <li className={navElements} onClick={() => navigate('/noticias')}>Noticias</li>
          <li className={navElements} onClick={() => navigate('/eventos')}>Eventos</li>
          <li className={navElements} onClick={() => navigate('/sedes')}>Sedes</li>
        </ul>
      </nav>
    )
  }

  return (
    <header className='flex relative justify-between gap-32 bg-white shadow-md shadow-slate-200 px-3 xl:px-10 min-h-20'> 
      <section className='flex w-1/2 max-h-[80px] items-center hover:cursor-pointer gap-6 xl:gap-2' onClick={() => navigate('/inicio')}>
        <img className=" xl:hidden h-1/2" src={MenuIcon} alt='sa' />  
        <img 
          className=' xl:w-72 max-h-[57.25px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReKB6IFGKa3JfTVhzH9tjQx5lnRrwJ_n4XIg&s' 
          alt='Escudo del Colegio Rural Vanguardia'>
        </img>
      </section>

      <NavBar />

      <div className='my-auto '>
        <button className='px-5 py-1 rounded-full bg-blue-500 h-10 my-auto hover:bg-blue-600 text-white' onClick={() => navigate('/ingresar')} >Acceder</button>
        <button className='rounded-full w-10 h-10 bg-slate-300' onClick={() => onOpenUserSideMenu()}> P </button>
      </div>
    </header>
  )
}
