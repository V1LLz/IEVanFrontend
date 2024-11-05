import React from 'react';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import SedesImg from '../../../static/Sedes.webp'

const Sedes = () => {
    return (
        <div className='w-11/12 xl:w-9/12 mx-auto my-20'>
            <ScrollToHashElement />
            <h2 className="text-center text-5xl xl:text-6xl font-bold my-10">Nuestras Sedes</h2>
            <p className="text-center mb-10">
                Un espacio para fomentar la lectura en la IERV, el cual se encuentra en proceso de construcción.<br/>A continuación, una pequeña muestra para compartir con nuestros estudiantes.
            </p>
            <img src={SedesImg} alt="Todas las sedes" className='mx-auto'/>

            <section id='sedePrincipal' className='xl:px-10 my-10'>
                <iframe
                    title='Sede Principal'
                    className='w-full h-[40dvh] xl:h-[720px] mx-auto '
                    src="https://www.google.com/maps/d/embed?mid=1pGJWRS3ruEtdrK0GorgkjKtUIn4&hl=en&ehbc=2E312F" >
                </iframe>
            </section>
        </div>
    );
}

export default Sedes;
