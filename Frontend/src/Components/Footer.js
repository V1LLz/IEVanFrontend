import React from 'react'
import Escudo from '../static/escudo.webp'
import Facebook from '../static/facebook.svg'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className='bg-white xl:h-[20svh] gap-10 flex py-10 flex-col-reverse xl:flex-row xl:justify-between items-center px-5 xl:px-24 z-40 shadow-gray-800 shadow-lg mt-20'>
      <p className='xl:w-1/3 text-gray-400 text-center xl:text-left'>Copyright © Institución Educativa Rural Vanguardia. Todos los derechos reservados.</p>
      <img src={Escudo} alt="escudo IERV" className='size-24 cursor-pointer w-auto' onClick={() => navigate('/')}/>
      <a className='xl:w-1/3 xl:flex-row-reverse flex size-10' href='https://www.facebook.com/paginaierv'>
        <img src={Facebook} alt="facebook" />
      </a>
    </footer>
  )
}
