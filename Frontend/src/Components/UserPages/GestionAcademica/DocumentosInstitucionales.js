import React from 'react';
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

const DocumentosInstitucionales = () => {
    return (
        <div className='mx-auto w-9/12'>
            <ScrollToHashElement />
            <h2 className="text-left text-6xl font-bold my-10">Documentos Institucionales</h2>
            <section className='mt-20'id='pei'>
                <h3 className="text-4xl font-bold mb-10 text-center">PEI</h3>
                <iframe
                    title='PEI'
                    src="//e.issuu.com/embed.html#31442354/54341837"
                    className='mx-auto w-2/3 h-[70svh]'
                    style={{ border: 'none', overflow: 'hidden' }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </section>
            <section className='mt-20' id='manual-convivencia'>
                <h3 className="text-4xl font-bold mb-10 text-center">Nuestro Manual de Convivencia</h3>
                <iframe
                    title='manual de convivencia'
                    src="https://e.issuu.com/embed.html?identifier=dw3gw7x57vcb&embedType=script#33814072/62637967"
                    className='mx-auto w-2/3 h-[70svh]'
                    style={{ border: 'none', overflow: 'hidden' }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </section>
            <section className='mt-20' id='planes-estudio'>
                <h3 className="text-4xl font-bold mb-10 text-center">Planes de Estudios</h3>
                <iframe
                    title='planes de estudio'
                    src="//e.issuu.com/embed.html#31442354/54341837"
                    className='mx-auto w-2/3 h-[70svh]'
                    style={{ border: 'none', overflow: 'hidden' }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
            </section>
        </div>
    );
}

export default DocumentosInstitucionales;
