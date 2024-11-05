import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

// Componente principal de la biblioteca
const Biblioteca = () => {
    // Estado para almacenar el libro seleccionado
    const [selectedBook, setSelectedBook] = useState(null);

    // Lista de libros de ejemplo
    const books = [
        {
            id: 1,
            title: 'El Principito',
            author: 'Antoine de Saint-Exupéry',
            imageUrl: 'https://example.com/el-principito.jpg',
            synopsis: 'Un piloto se encuentra con un pequeño príncipe de otro planeta...',
            pdfUrl: 'https://example.com/el-principito.pdf',
        },
        {
            id: 2,
            title: 'Cien Años de Soledad',
            author: 'Gabriel García Márquez',
            imageUrl: 'https://example.com/cien-anos-de-soledad.jpg',
            synopsis: 'La historia de la familia Buendía en el mítico pueblo de Macondo...',
            pdfUrl: 'https://example.com/cien-anos-de-soledad.pdf',
        },
        {
            id: 3,
            title: 'El chespirito',
            author: 'Roberto Gomez Bolaños',
            imageUrl: 'https://example.com/el-chespirito.jpg',
            synopsis: 'El chavo del ocho y otras historias...',
            pdfUrl: 'https://example.com/el-chespirito.pdf',
        },
        {
            id: 4,
            title: 'El chespirito 222',
            author: 'Roberto Gomez Bolaños',
            imageUrl: 'https://example.com/el-chespirito-222.jpg',
            synopsis: 'Una recopilación de cuentos...',
            pdfUrl: 'https://example.com/el-chespirito-222.pdf',
        },
        {
            id: 5,
            title: 'El chespirito 1111',
            author: 'Roberto Gomez Bolaños',
            imageUrl: 'https://example.com/el-chespirito-1111.jpg',
            synopsis: 'Historias de humor y reflexión...',
            pdfUrl: 'https://example.com/el-chespirito-1111.pdf',
        },
        // Agrega más libros según sea necesario
    ];

    // Configuración del slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-11/12 xl:w-9/12 mx-auto my-20">
            <h2 className="text-center text-6xl font-bold my-10">Biblioteca IERV</h2>
            <p className="text-center mb-10">
                Un espacio para fomentar la lectura en la IERV, el cual se encuentra en proceso de construcción.<br/>A continuación, una pequeña muestra para compartir con nuestros estudiantes.
            </p>

            {/* Sección fija para mostrar el libro seleccionado */}
            {selectedBook && (
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
                    <p className="text-gray-700 mb-2"><strong>Autor:</strong> {selectedBook.author}</p>
                    <p className="text-gray-700 mb-4"><strong>Sinopsis:</strong> {selectedBook.synopsis}</p>
                    <div className="w-full h-96">
                        <iframe
                            src={selectedBook.pdfUrl}
                            title={selectedBook.title}
                            className="w-full h-full border"
                        ></iframe>
                    </div>
                </section>
            )}

            {/* Slider para mostrar los libros */}
            <Slider {...settings} className=''>
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="p-1 cursor-pointer"
                            onClick={() => setSelectedBook(book)}
                        >
                            <div className="border overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={book.imageUrl}
                                    alt={book.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold object-cover h-16">{book.title}</h3>
                                    <p className="text-sm text-gray-600 object-cover ">{book.author}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </Slider>
            
        </div>
    );
};

export default Biblioteca;
