import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import EventoPreview from "../components/EventoPreview";
import apiService from "../services/api-service";

import "./styles/List.css";

const EventosPage = () => {
  const [eventos, setEventos] = useState([]);
  const { idOrganizacion } = useParams();

  const loadData = async () => {
    let resEventos;
    if (!idOrganizacion) {
      resEventos = await apiService.getEventos();
    } else {
      resEventos = await apiService.getEventosOrganizacion(idOrganizacion);
    }
    console.log(resEventos);
    setEventos(resEventos);
  };

  useEffect(() => loadData(), []);

  return (
    <main className="container mt-3">
      <div className="d-flex">
        <h2 className="mr-2">Eventos</h2>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/crear-evento" className="btn btn-primary text-align-center">
          <b>Nuevo Evento</b>
        </Link>
      </div>
      <div className="List">
        {eventos.map((evento) => (
          <EventoPreview key={evento.id} evento={evento} />
        ))}
      </div>
    </main>
  );
};

export default EventosPage;
