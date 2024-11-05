import React from 'react';

const PlataformasAcademicas = () => {
    return (
        <div className='mx-auto w-9/12'>
            <h2 className="text-left text-6xl font-bold my-10">Plataformas Academicas</h2>
            <h3 className="text-4xl font-bold my-10">Colpegasus</h3>
            <section className='flex justify-between gap-5 h-56'>
                <a href='https://awp.s4.colpegasus.com/?id=84' className='w-full mx-auto border-2 rounded-lg flex justify-center flex-col py-5'>
                    <p className='text-center'>Diurna:</p>
                    <img decoding="async" className='mx-auto' src="https://awp.s5.colpegasus.com/img/logo_aw.png" alt="Colpegasus Diurna Icono" width="300"  />
                </a>
                <a href='https://awp.s4.colpegasus.com/?id=86' className='w-full mx-auto border-2 rounded-lg flex justify-center flex-col py-5'>
                    <p className='text-center'>Nocturna:</p>
                    <img decoding="async" className='mx-auto' src="https://awp.s5.colpegasus.com/img/logo_aw.png" alt="Colpegasus Nocturna Icono" width="300" />
                </a>
            </section>
            <h3 className="text-4xl font-bold my-10">Campus virtual IERV</h3>
            <section className='flex justify-between gap-5'>
                <a href='https://classroom.google.com/u/0/h' className='w-full mx-auto border-2 rounded-lg flex justify-center flex-col py-5'>
                    <p className='text-center'>Acceso a Google Classroom:</p>
                    <img decoding="async" className='mx-auto' src="https://4.bp.blogspot.com/-nZrbXEOroYQ/WsawCzkedyI/AAAAAAAACV8/3ZbgkzliNT8UGZlAIsUK6oIe-OJ77S62gCPcBGAYYCw/s1600/2017-09-19-10-29-08-logo_lockup_classroom_icon_vertical-475x_.png" alt="Google Classroom icono" width="225" height="158" />
                </a>
                <a href='http://aulasvirtuales.ierv.edu.co/login/index.php' className='w-full mx-auto border-2 rounded-lg flex justify-center flex-col py-5'>
                    <p className='text-center'>Acceso a las aulas virtuales Moodle IERV (En construcción):</p>
                    <img decoding="async" className='mx-auto'src="https://www.elgrupoinformatico.com/static/Manuales/2020/04/moodle-logo-1300x650.png" alt="moddle icono" width="300" height="200" />
                </a>
            </section>
        </div>
    );
}

export default PlataformasAcademicas;
