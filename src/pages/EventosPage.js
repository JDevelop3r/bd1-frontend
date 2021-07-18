import React from "react";
import EventoPreview from "../components/EventoPreview";

import "./styles/List.css";

const EventosPage = () => {
  const eventos = [
    {
      id: "0",
      imgURL:
        "https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg",
      fecha: "27/07/2021",
      organizadores: "Organizador 1",
      tipo: "Presencial",
      duracion: "90",
      entrada: "50",
      entradaNuevo: "75",
      lugar: "Calle 1 Ciudad 1 Pais 1",
    },
    {
      id: "1",
      imgURL:
        "https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg",
      fecha: "27/07/2021",
      organizadores: "Organizador 2",
      tipo: "Presencial",
      duracion: "90",
      entrada: "50",
      entradaNuevo: "75",
      lugar: "Calle 2 Ciudad 2 Pais 2",
    },
    {
      id: "2",
      imgURL:
        "https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg",
      fecha: "27/07/2021",
      organizadores: "Organizador 3",
      tipo: "Presencial",
      duracion: "90",
      entrada: "50",
      entradaNuevo: "75",
      lugar: "Calle 3 Ciudad 3 Pais 3",
    },
    {
      id: "3",
      imgURL:
        "https://www.marquid.com/wp-content/uploads/2017/06/6197706_orig.jpg",
      fecha: "27/07/2021",
      organizadores: "Organizador 4",
      tipo: "Presencial",
      duracion: "90",
      entrada: "50",
      entradaNuevo: "75",
      lugar: "Calle 4 Ciudad 4 Pais 4",
    },
  ];

  return (
    <main className="container mt-3">
      <h2>Eventos</h2>
      <div className="List">
        {eventos.map((evento) => (
          <EventoPreview key={evento.id} evento={evento} />
        ))}
      </div>
    </main>
  );
};

export default EventosPage;
