import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { CustomCalendar } from '../UserPages/Events';
import Card from '../Card';
import Delete from '../../static/trash-empty.svg'

export default function EventAdmin() {
    const [events, setEvents] = useState([
        {
            id: 1,
            date: '2024-11-03',
            title: 'Titulo evento 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);
    const [formData, setFormData] = useState({ title: '', description: '', date: '' });

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formatDate = (dateString) => {
        const date = new Date(`${dateString}T00:00:00`); // interpretará la fecha en la zona horaria local
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
        return { day, month };
    };

    const handleCreateOrEdit = () => {
        if (currentEvent) {
            setEvents(events.map(event => (event.id === currentEvent.id ? { ...currentEvent, ...formData } : event)));
        } else {
            setEvents([...events, { ...formData, id: Date.now() }]);
        }
        toggleModal();
    };

    const handleEditEvent = (event) => {
        setCurrentEvent(event);
        setFormData({ title: event.title, description: event.description, date: event.date });
        toggleModal();
    };

    const handleCreateEvent = () => {
        setCurrentEvent(null);
        setFormData({ title: '', description: '', date: '' });
        toggleModal();
    };

    const deleteEvent = (id) => {
        const confirmDelete = window.confirm('¿Esta seguro de eliminar este evento? Los cambios no se pueden revertir.');
        if (confirmDelete) {
            setEvents(events.filter(event => event.id !== id));
            toggleModal();
        }
    };

    return (
        <div className="h-full py-10 w-10/12 xl:w-9/12 mx-auto">
            <h2 className="text-left text-4xl xl:text-6xl font-bold mb-10">Administrar eventos</h2>
            <CustomCalendar />
            <div className="flex justify-between mt-16">
                <h3 className="text-left text-4xl font-bold mb-10">Eventos</h3>
                <button
                    className="rounded-lg bg-blue-400 px-5 py-3 h-4/5 text-white hover:bg-blue-500"
                    onClick={handleCreateEvent}
                >
                    Crear Evento
                </button>
            </div>
            <div className="mt-5">
                {events.map((event) => (
                    <Card
                        key={event.id}
                        type="eventCard"
                        title={event.title}
                        description={event.description}
                        date={`${formatDate(event.date).day} ${formatDate(event.date).month}`} 
                        onEdit={() => handleEditEvent(event)}
                        onDelete={() => deleteEvent(event.id)}
                    />
                ))}
            </div>


            {/* Ventana flotante para crear/editar eventos */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-10/12  md:w-2/3 xl:w-1/3 relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">
                                {currentEvent ? 'Editar Evento' : 'Crear Evento'}
                            </h2>
                            {/* Botón de eliminar (solo al editar) */}
                            {currentEvent && (
                                <button
                                    className="border-2 border-red-500 text-white px-3 py-3 rounded-xl hover:bg-red-600"
                                    onClick={() => deleteEvent(currentEvent.id)}
                                >
                                    <img src={Delete} alt="administrar post" />
                                </button>
                            )}
                        </div>

                        <form>
                            {/* Fecha */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Fecha:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className=" appearance-none border rounded-xl w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>

                            {/* Título */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className=" appearance-none border rounded-xl w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>

                            {/* Descripción */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className=" appearance-none border rounded-xl w-full py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 px-4 py-2 border-2 border-red-500 text-red-500 rounded-xl hover:bg-red-600 hover:text-white" 
                                    onClick={toggleModal}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-400 text-white rounded-xl hover:bg-blue-500"
                                    onClick={handleCreateOrEdit}
                                >
                                    {currentEvent ? 'Guardar Cambios' : 'Crear'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
