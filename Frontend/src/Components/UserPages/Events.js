import { Component, useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from "react-modal";
import { getEventos } from '../api';
import 'react-calendar/dist/Calendar.css';

class Events extends Component {
    render() {
        return (
            <div className='h-full py-10 w-8/12 mx-auto'>
                <h2 className='text-left text-6xl font-bold mb-10'>Eventos</h2>
                <CustomCalendar />
            </div>
        )
    }
}

Modal.setAppElement('#root');

const CustomCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventos, setEventos] = useState([]);
    const [eventosDia, setEventosDia] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Cargar los eventos desde la API al cargar el componente
    useEffect(() => {
        const fetchEventos = async () => {
            const eventos = await getEventos();
            console.log(eventos);
            setEventos(eventos);
        };
        fetchEventos();
    }, []);

    // Formatear la fecha a "YYYY-MM-DD"
    const formatearFecha = (fecha) => {
        return new Date(fecha).toISOString().split('T')[0];
    };

    // Verifica si hay eventos en una fecha determinada
    const tieneEventos = (date) => {
        const fechaFormateada = date.toISOString().split('T')[0];
        return eventos.some((evento) => formatearFecha(evento.fecha) === fechaFormateada);
    };

    // Al seleccionar una fecha, abrir el modal si tiene eventos
    const handleDateClick = (date) => {
        const fechaFormateada = date.toISOString().split('T')[0];
        const eventosDelDia = eventos.filter((evento) => formatearFecha(evento.fecha) === fechaFormateada);
        if (eventosDelDia.length > 0) {
            setEventosDia(eventosDelDia);
            setModalIsOpen(true);
        } else {
            setEventosDia([]); // Si no hay eventos, no mostrar nada
        }
    };

    return (
        <div>
            <div className="calendarStyle">
                <Calendar
                    value={selectedDate}
                    onClickDay={handleDateClick}
                    tileContent={({ date }) =>
                        tieneEventos(date) ? <div className="dot"></div> : null
                    }
                />
            </div>

            {/* Modal para mostrar eventos */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Eventos del día"
            >
                <h2>Eventos</h2>
                <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
                {eventosDia.length > 0 ? (
                    eventosDia.map((evento) => (
                        <div key={evento.id}>
                            <h3>{evento.nombre}</h3>
                            <p>{evento.descripcion || 'Sin descripción disponible'}</p>
                            <p>{formatearFecha(evento.fecha)}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay eventos para este día</p>
                )}
            </Modal>
        </div>
    );
};


export {CustomCalendar , Events}