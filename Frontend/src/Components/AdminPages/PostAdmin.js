import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function PostAdmin() {
    const navigate = useNavigate()
    return (
        <div className="h-full py-10 w-8/12 mx-auto">
            <h2 className="text-left text-6xl font-bold mb-10">Administrar Posts</h2>
            <section className='flex justify-between gap-8'>
                <div className="flex gap-5 bg-slate-200 flex-grow py-2 px-3 rounded-xl">
                    <button className='bg-white h-full rounded-lg px-6 py-1 w-32 hover:bg-blue-500 hover:text-white'>Noticias</button>
                    <button className='bg-white h-full rounded-lg px-6 py-1 w-32 hover:bg-blue-500 hover:text-white'>Artículos</button>
                    {<button className='bg-white h-full rounded-lg px-6 py-1 w-32 hover:bg-blue-500 hover:text-white'>Libro</button>}
                    {/* Agrega más tipos de post si es necesario */}
                </div>
                <button
                    className="bg-blue-400 text-white py-2 px-4 rounded-xl hover:bg-blue-500 "
                    onClick={() => navigate('/crear-post')}
                >
                    Crear Post
                </button>
            </section>
        </div>
    );
}