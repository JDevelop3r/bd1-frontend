import React, { useState, useEffect } from "react";
import OrganizacionPreview from "../components/OrganizacionPreview";
import apiService from "../services/api-service";

import "./styles/List.css";

const OrganizacionesPage = () => {
  const [organizaciones, setOrganizaciones] = useState([]);

  const loadData = async () => {
    const resOrganizaciones = await apiService.getOrganizaciones();
    setOrganizaciones(resOrganizaciones);
  };

  useEffect(() => loadData(), []);

  return (
    <main className="container mt-3">
      <h2>Organizaciones</h2>
      <div className="List">
        {organizaciones.map((organizacion) => (
          <OrganizacionPreview
            key={organizacion.id}
            organizacion={organizacion}
          />
        ))}
      </div>
    </main>
  );
};

export default OrganizacionesPage;
